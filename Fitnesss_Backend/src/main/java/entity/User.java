package entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@NotBlank(message = "Name is mandatory")
	private String name;
	
	
	private int age;
	@NotBlank
	@Pattern(regexp = "^[0-9]{10}$", message = "Invalid mobile number")
	private String mobileNumber;
	
	@NotBlank
	private String password;
	@Transient
	private String reenterPassord;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getReenterPassord() {
		return reenterPassord;
	}
	public void setReenterPassord(String reenterPassord) {
		this.reenterPassord = reenterPassord;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", age=" + age + ", mobileNumber=" + mobileNumber + ", password="
				+ password + ", reenterPassord=" + reenterPassord + "]";
	}
	
	
	
	
}
