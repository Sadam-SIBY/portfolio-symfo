<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class TripodvisorController extends AbstractController
{
    #[Route('/tripodvisor', name: 'project_tripodvisor')]
    public function index(): Response
    {
        return $this->render('projects/tripodvisor.html.twig');
    }

}
