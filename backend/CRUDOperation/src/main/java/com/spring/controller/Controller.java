package com.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.spring.entities.Registration;
import com.spring.service.UserService;

@CrossOrigin("http://localhost:3000")
@RestController
public class Controller {

	   @Autowired
	    private UserService userService;

	    @PostMapping("/user")
	    public Registration newUser(@RequestBody Registration newUser) {
	        return userService.addUser(newUser);
	    }

	    @GetMapping("/users")
	    public List<Registration> getAllUsers() {
	        return userService.getAllUsers();
	    }

	    @GetMapping("/user/{id}")
	    public Registration getUserById(@PathVariable("id") int id) {
	        return userService.getById(id);
	        
	    }

	    @PutMapping("/user/{id}")
	    public Registration updateUser(@RequestBody Registration user, @PathVariable("id") int id) {
	    	Registration user1=userService.updateUser(id, user);
			return user1;
	    }

	    @DeleteMapping("/user/{id}")
	   public String deleteUser(@PathVariable("id") int id) {
	    	 return userService.deleteUser(id);
	    	 
	     
	    }


}
