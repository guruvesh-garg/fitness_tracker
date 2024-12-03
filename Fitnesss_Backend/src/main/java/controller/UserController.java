package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import entity.User;
import jakarta.validation.Valid;
import service.UserService;

@RestController
@RequestMapping
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/api/v1/users")
	public String signUp(@Valid @RequestBody User user) {
		
		return userService.registerUser(user);
	}
}
