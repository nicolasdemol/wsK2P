<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use phpseclib3\Net\SFTP;

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

        if (file_exists($filename)) {
            header('Content-Description: File Transfer');
            header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename="' . basename($filename) . '"');
            header('Expires: 0');
            header('Cache-Control: must-revalidate');
            header('Pragma: public');
            header('Content-Length: ' . filesize($filename));
            exit;
        } else throw new \Exception('Cannot login to the server.');
    }
}
