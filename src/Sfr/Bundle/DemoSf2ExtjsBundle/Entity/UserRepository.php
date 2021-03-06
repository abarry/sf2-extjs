<?php

namespace Sfr\Bundle\DemoSf2ExtjsBundle\Entity;

use Doctrine\ORM\EntityRepository;

/**
 * UserRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class UserRepository extends EntityRepository
{
    public function findAll()
    {
        return $this->createQueryBuilder('users')->getQuery()->getArrayResult();
    }

    public function load($start=0, $limit=5)
    {
        return $this->createQueryBuilder('users')
            ->setMaxResults($limit)
            ->setFirstResult($start)
            ->getQuery()
            ->getArrayResult();
    }
}
