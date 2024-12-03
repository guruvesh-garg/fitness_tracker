package Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import entity.User;

public interface UserRepo extends JpaRepository<User, Long> {

	boolean existsByMobileNumber(String mobileNumber);
}
