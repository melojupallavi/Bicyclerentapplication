package com.example.demomangodbcrud.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demomangodbcrud.entity.Register;
import com.example.demomangodbcrud.repository.Registerrepository;
import com.example.demomangodbcrud.service.RegisterService;

@Service
public class Registerimpl  implements RegisterService{

	
	
	@Autowired
	private Registerrepository repo;
	@Override
	public Register saveregistration(Register user) {
		
		return repo.save(user);
	}

	public Registerrepository getRepo() {
		return repo;
	}

	public void setRepo(Registerrepository repo) {
		this.repo = repo;
	}

	@Override
	public List<Register> getallregistrations() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}
	
	@Override
	public Register getuserdeatilsbyemail(String email) {
		// TODO Auto-generated method stub
		Register user=repo.findByEmail(email);
		return user;
	}
	

}
