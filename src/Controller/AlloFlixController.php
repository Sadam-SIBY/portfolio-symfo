<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class AlloFlixController extends AbstractController
{
    #[Route('/alloflix', name: 'project_allo_flix')]
    public function index(): Response
    {
        return $this->render('projects/alloflix.html.twig');
    }
}
