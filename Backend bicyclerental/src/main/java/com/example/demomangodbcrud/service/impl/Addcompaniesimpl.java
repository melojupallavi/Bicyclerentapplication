package com.example.demomangodbcrud.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demomangodbcrud.entity.Addcompanies;
import com.example.demomangodbcrud.repository.Addcompaniesrepo;
import com.example.demomangodbcrud.service.Addcompaniesservice;
@Service
public class Addcompaniesimpl implements Addcompaniesservice{

	
	
	@Autowired
	private Addcompaniesrepo repo;
	@Override
	public Addcompanies savecompany(Addcompanies company) {
		
		return repo.save(company);
	}

	public Addcompaniesrepo getRepo() {
		return repo;
	}

	public void setRepo(Addcompaniesrepo repo) {
		this.repo = repo;
	}

	@Override
	public List<Addcompanies> getallcompanies() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public boolean companypresent(String companyname) {
		if(repo.findByCompanyname(companyname) != null)
			return true;
		return false;
	}

	@Override
	public Addcompanies deletecompany(String companyname) {
		// TODO Auto-generated method stub
		return repo.deleteByCompanyname(companyname);
	}

	
}
