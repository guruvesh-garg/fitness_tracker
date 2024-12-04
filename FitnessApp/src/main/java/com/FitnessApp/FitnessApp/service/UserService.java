package com.FitnessApp.FitnessApp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FitnessApp.FitnessApp.entity.User;
import com.FitnessApp.FitnessApp.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public String calculateAndSaveBMI(User user) {
		Optional<User> existingUser=userRepository.findByName(user.getName());
		
		if(existingUser.isPresent()) {
			User foundUser=existingUser.get();
			return "BMI already Calculated for" + foundUser.getName() + ":" + foundUser.getBmi();
		}
		else {
			Double bmi= user.getWeight()/ (user.getHeight() * user.getHeight());
			user.setBmi(bmi);
			
			userRepository.save(user);
			return "BMI Calculated and saved for"+ user.getName() +":" +bmi;
		}
		
		
	}

}
