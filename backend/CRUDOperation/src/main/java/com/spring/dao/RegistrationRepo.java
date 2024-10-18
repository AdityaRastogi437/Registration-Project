package com.spring.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.entities.Registration;

@Repository
public interface RegistrationRepo extends JpaRepository<Registration, Integer> {

	
}
