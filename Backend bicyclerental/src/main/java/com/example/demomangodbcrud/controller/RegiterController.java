package com.example.demomangodbcrud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demomangodbcrud.entity.Register;
import com.example.demomangodbcrud.service.RegisterService;

@CrossOrigin("*")
@RestController()
@RequestMapping("/register")
public class RegiterController {
	
	@Autowired
	private RegisterService register;
	
	@GetMapping("/list")
	public List<Register> getallregistrations()
	{
		return register.getallregistrations();
	}
	
	@PostMapping("/save")
	public Register saveregistration(@RequestBody Register user)
	{
		return register.saveregistration(user);
	}
	
	@GetMapping("/mail/{email}")
	public Register getuserdeatilsbyemail(@PathVariable String email)
	{
//		Query query = new Query();
//		query.addCriteria(Criteria.where("email").is(email));
//		 Register user = MongoTemplate.find(query, Register.class);
		return register.getuserdeatilsbyemail(email);
//		return user;
	}
	
//	@Query("mongo query")
//	public Register findBy(String email)
//	{
//		
//	}
	

}
