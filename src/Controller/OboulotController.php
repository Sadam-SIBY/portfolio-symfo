<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class OboulotController extends AbstractController
{
    #[Route('/oboulot', name: 'project_oboulot')]
    public function oboulot(): Response
    {
        return $this->render('projects/oboulot.html.twig');
    }
}
