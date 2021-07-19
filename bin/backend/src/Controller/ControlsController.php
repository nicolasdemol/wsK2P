<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use phpseclib3\Net\SFTP;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

class ControlsController extends AbstractController
{
    #[Route('/controls/{datecode}', name: 'controls')]
    public function index(int $datecode): Response
    {
        $host = "192.168.10.5";
        $username = "Acces_serveur_pour_w";
        $password = "K2Process@miseenplace2021";

        $sftp = new SFTP($host);
        $sftp->login($username, $password);

        $path = "/D:/QUALITE/Resultat pour client";

        $filename = $datecode . ".txt";
        $filepath = $path . "/" . $filename;

        $sftp->get($filepath, $filename);

        $publicResourcesFolderPath = $this->getParameter('kernel.project_dir') . '/public/';

        // This should return the file to the browser as response
        $response = new BinaryFileResponse($publicResourcesFolderPath . $filename);

        // Guess the mimetype of the file according to the extension of the file
        $response->headers->set('Content-Type', 'mime/type');
        // Set the mimetype of the file manually, in this case for a text file is text/plain
        $response->headers->set('Content-Type', 'text/plain');

        $response->headers->set('Access-Control-Allow-Origin', '*');

        // Set content disposition inline of the file
        $response->setContentDisposition(
            ResponseHeaderBag::DISPOSITION_ATTACHMENT,
            $filename
        );

        return $response;
    }
}
