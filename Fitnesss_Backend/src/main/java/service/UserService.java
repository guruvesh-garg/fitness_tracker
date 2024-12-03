package service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Repo.UserRepo;
import entity.User;

@Service
public class UserService {

	@Autowired
	private UserRepo userRepo;
	
	public String registerUser(User user) {
		if(userRepo.existsByMobileNumber(user.getMobileNumber())) {
			return "User existes with this mobile number";
		}
		if(!user.getPassword().equals(user.getReenterPassord())) {
			return "Passoword doesnt match";
		}
		
		userRepo.save(user);
		return "User register successfully";
	}
	
	
	
	
}
