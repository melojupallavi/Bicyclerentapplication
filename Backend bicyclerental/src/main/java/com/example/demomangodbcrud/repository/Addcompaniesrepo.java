package com.example.demomangodbcrud.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demomangodbcrud.entity.Addcompanies;

public interface Addcompaniesrepo extends MongoRepository<Addcompanies,String> {

	public Addcompanies findByCompanyname(String companyname);

	public Addcompanies deleteByCompanyname(String companyname);

}
