<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Icewind\SMB\ServerFactory;
use Icewind\SMB\BasicAuth;
use Symfony\Component\HttpFoundation\Request;

class ControlsController extends AbstractController
{
    #[Route('/controls', name: 'controls')]
    public function index(): Response
    {
        return $this->render('controls/index.html.twig', [
            'controller_name' => 'ControlsController',
        ]);
    }

    public function downloadControls()
    {
        $host = "192.168.10.5";
        $username = "nicolas.demol";
        $password = "125478Nyco";
        $workgroup = "domaine.local";

        $serverFactory = new ServerFactory();
        $auth = new BasicAuth($username, $workgroup, $password);
        $server = $serverFactory->createServer($host, $auth);

        $shares = $server->listShares();

        foreach ($shares as $share) {
            echo $share->getName() . "\n";
        }
    }
}
