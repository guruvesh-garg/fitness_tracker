package com.FitnessApp.FitnessApp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FitnessApp.FitnessApp.entity.User;

public interface UserRepository extends JpaRepository <User,Long>{
	
	Optional<User> findByName(String name);

}
