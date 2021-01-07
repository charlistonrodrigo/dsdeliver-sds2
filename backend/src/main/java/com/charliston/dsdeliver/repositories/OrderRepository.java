package com.charliston.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.charliston.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
