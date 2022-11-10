package com.example.demomangodbcrud.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demomangodbcrud.entity.User;
import com.example.demomangodbcrud.repository.UserRepository;
import com.example.demomangodbcrud.service.UserService;


@Service
public class UserServiceImpl  implements UserService{

	@Autowired
	private UserRepository userrepository;
	
	
	@Override
	public User saveuser(User user) {
		
		System.out.println(user.getName());
		return userrepository.save(user);
	}

	public UserRepository getUserrepository() {
		return userrepository;
	}

	public void setUserrepository(UserRepository userrepository) {
		this.userrepository = userrepository;
	}

	@Override
	public List<User> getusers() {
		
		return  userrepository.findAll();
	}

}
