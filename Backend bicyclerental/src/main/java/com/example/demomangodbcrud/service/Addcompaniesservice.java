package com.example.demomangodbcrud.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demomangodbcrud.entity.Addcompanies;


@Service
public interface Addcompaniesservice {

	public Addcompanies savecompany(Addcompanies company);
	public List<Addcompanies>getallcompanies();
//    @Query("{ 'email' : ?0 }")
  // public	Addcompanies getuserdeatilsbyemail(String email);
	public boolean companypresent(String companyname);
	public Addcompanies deletecompany(String companyname);
}
