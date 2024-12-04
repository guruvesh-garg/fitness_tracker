package com.FitnessApp.FitnessApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FitnessApp.FitnessApp.entity.User;
import com.FitnessApp.FitnessApp.service.UserService;

@RestController
@RequestMapping("/api/bmi")
public class BMIController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/calculate")
	public ResponseEntity <String> calculateBMI (@RequestBody User user){
		String result= userService.calculateAndSaveBMI(user);
		return ResponseEntity.ok(result);
		
	}
	
	

	
}
