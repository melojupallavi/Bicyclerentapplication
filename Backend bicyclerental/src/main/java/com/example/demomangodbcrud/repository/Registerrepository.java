package com.example.demomangodbcrud.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demomangodbcrud.entity.Register;

@Repository
public interface Registerrepository extends MongoRepository<Register,String>{

	public Register findByEmail(String email);

//	
	

	

}
