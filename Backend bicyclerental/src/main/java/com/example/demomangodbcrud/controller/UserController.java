package com.example.demomangodbcrud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demomangodbcrud.entity.User;
import com.example.demomangodbcrud.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
	
	
	@Autowired
	private UserService userservice;
	
	@PostMapping(value="/save", consumes = {"application/json"})
	public User saveuser(@RequestBody User user)
	{
		return userservice.saveuser(user);
	}
	
	
	@GetMapping("/list")
	public List<User> getusers()
	{
		return userservice.getusers();
	}
	
	public UserService getUserservice() {
		return userservice;
	}


	public void setUserservice(UserService userservice) {
		this.userservice = userservice;
	}


	@GetMapping("/error")
	public String goterror()
	{
		return "error";
	}

}
