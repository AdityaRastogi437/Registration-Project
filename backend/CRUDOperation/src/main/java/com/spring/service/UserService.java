package com.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.dao.RegistrationRepo;
import com.spring.entities.Registration;

@Service
public class UserService {

	@Autowired
	private RegistrationRepo registrationRepo;
	
     public Registration addUser(Registration user) {
		
	    Registration user1=registrationRepo.save(user);
	    return user1;
	}
	
	public Registration updateUser(int id,Registration newUser) {
		
		 return registrationRepo.findById(id)
	                .map(user -> {
	                    user.setName(newUser.getName());
	                    user.setEmail(newUser.getEmail());
	                    user.setPassword(newUser.getPassword());
	                    user.setDob(newUser.getDob());
	                    user.setAddress(newUser.getAddress());
	                    return registrationRepo.save(user);
	                }).orElseThrow(() ->new UserNotFoundException(id));
	}
	
	public String deleteUser(int id) {
		  if (!registrationRepo.existsById(id)) {
	            throw new UserNotFoundException(id);
	        }
	        registrationRepo.deleteById(id);
	        return "User with the id " + id + " has been successfully deleted.";
	}
	
	public List<Registration> getAllUsers()
	{
		List<Registration> user=(List<Registration>)registrationRepo.findAll();
		return user;
	}
	
  public Registration getById(int id) {
		
	  return registrationRepo.findById(id)
              .orElseThrow(() -> new UserNotFoundException(id));
	}
	
	
}
