package com.example.demomangodbcrud.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demomangodbcrud.entity.Register;

@Service
public interface RegisterService {
	
	
	public Register saveregistration(Register user);
	public List<Register>getallregistrations();
//	  @Query("{ 'email' : ?0 }")
    public	Register getuserdeatilsbyemail(String email);

}
