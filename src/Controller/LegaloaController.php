<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class LegaloaController extends AbstractController
{
    #[Route('/legaloa', name: 'project_legaloa')]
    public function oboulot(): Response
    {
        return $this->render('projects/legaloa.html.twig');
    }
}
