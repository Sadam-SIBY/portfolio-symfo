<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class OshopController extends AbstractController
{
    #[Route('/oshop', name: 'project_oshop')]
    public function oshop(): Response
    {
        return $this->render('projects/oshop.html.twig');
    }
}
