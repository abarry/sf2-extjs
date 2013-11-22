<?php

namespace Sfr\Bundle\DemoSf2ExtjsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sfr\Bundle\DemoSf2ExtjsBundle\Entity\User;

class DefaultController extends Controller
{
    public function indexAction()
    {
        /*$em = $this->getDoctrine()->getManager();

        for($i=1; $i <500 ; $i++) {

            $user = new User();
            $user->setFirstName($i.'Prenom');
            $user->setLastName($i.'Nom');
            $user->setEmail($i.'email@domaine'.$i."com");
            $user->setUid('uid'.$i);
            $em->persist($user);
            $em->flush();
        }*/
        return $this->render('SfrDemoSf2ExtjsBundle:Default:index.html.twig', array('name' => 'BARRY'));
    }

    public function readAction()
    {
        $data = array(
            'users'     => array(),
            'total'     => 0,
            'success'   => true
        );

        $start = $_GET['start'];
        $limit = $_GET['limit'];
        $repository = $this->getDoctrine()
            ->getRepository('SfrDemoSf2ExtjsBundle:User');

        $data['total'] = count($repository->findAll());
        $data['users'] = $repository->load($start, $limit);

        return new JsonResponse($data);
    }

    public function createAction()
    {
        $request = $this->getRequest()->request;
        $user = new User();
        $user->setFirstName($request->get('firstName'));
        $user->setLastName($request->get('lastName'));
        $user->setEmail($request->get('email'));
        $user->setUid($request->get('uid'));

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return new JsonResponse(array('success'=>true));
    }


    public function updateAction()
    {
        $rawpostdata = file_get_contents("php://input");
        $userData = json_decode($rawpostdata);

        $user = $this->getDoctrine()
            ->getRepository('SfrDemoSf2ExtjsBundle:User')
            ->findOneBy(array('email'=>$userData->email));

        $user->setFirstName($userData->firstName);
        $user->setLastName($userData->lastName);
        $user->setEmail($userData->email);
        $user->setUid($userData->uid);

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return new JsonResponse(array('success'=>true));
    }

    public function gridAction()
    {
        return $this->render('SfrDemoSf2ExtjsBundle:Default:grid.html.twig');
    }

    public function formAction()
    {
        return $this->render('SfrDemoSf2ExtjsBundle:Default:grid.html.twig');
    }
}
