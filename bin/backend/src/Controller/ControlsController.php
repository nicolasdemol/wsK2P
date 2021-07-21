<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use phpseclib3\Net\SFTP;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

class ControlsController extends AbstractController
{

    private function connectVM()
    {
        $host = "192.168.10.5";
        $username = "Acces_serveur_pour_w";
        $password = "K2Process@miseenplace2021";

        $sftp = new SFTP($host);
        $sftp->login($username, $password);

        return $sftp;
    }

    /**
     * @Route("/controls/{datecode}", name="controls")
     */
    public function datecode_file(int $datecode): Response
    {
        $sftp = $this->connectVM();

        $path_results = "/D:/QUALITE/Resultat pour client";
        $filename = $datecode . ".txt";
        $filepath = $path_results . "/" . $filename;

        $sftp->get($filepath, $filename);

        $publicResourcesFolderPath = $this->getParameter('kernel.project_dir') . '/public/';

        $response = new BinaryFileResponse($publicResourcesFolderPath . $filename);
        $response->headers->set('Content-Type', 'text/plain');
        $response->setContentDisposition(
            ResponseHeaderBag::DISPOSITION_ATTACHMENT,
            $filename
        );
        $response->deleteFileAfterSend();

        return $response;
    }



    /**
     * @Route("/controls/{datecode}/img/", name="controls_img")
     */
    public function datecode_info(Request $request, int $datecode): Response
    {
        $sftp = $this->connectVM();

        $path_traca = "/D:/QUALITE/Tracabilite";
        $filename = $datecode . ".tra";
        $filepath = $path_traca . "/" . $filename;

        // Parse file
        $traca = $sftp->get($filepath);
        $traca = preg_replace("/\s+/", " ", $traca);
        $traca = explode(" ", $traca);

        $data = array(
            "products" => array(),
            "images" => array(),
        );

        foreach ($traca as $key => $value) {
            if ($key % 2 == 0) {
                array_push($data["products"], $value);
            } else {
                array_push($data["images"], $value);
            }
        }

        $response = new Response();
        $response->setContent(json_encode($data));
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }



    /**
     * @Route("/controls/{datecode}/img/{number}", name="controls_img_")
     */
    public function datecode_img($number): Response
    {

        $sftp = $this->connectVM();

        $path_traca = "/D:/QUALITE/Tracabilite";
        $filename_image = $number . ".jpg";
        $filepath_image = $path_traca . "/" . substr($number, 0, 3) . "/" . $filename_image;
        $sftp->get($filepath_image, $filename_image);

        $publicResourcesFolderPath = $this->getParameter('kernel.project_dir') . '/public/';

        $response = new BinaryFileResponse($publicResourcesFolderPath . $filename_image);
        $response->headers->set('Content-Type', 'image/jpeg');
        $response->deleteFileAfterSend();


        return $response;
    }
}
