package com.example.demomangodbcrud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demomangodbcrud.entity.Addcompanies;
import com.example.demomangodbcrud.service.Addcompaniesservice;

@CrossOrigin("*")
@RestController()
@RequestMapping("/companies")
public class AddcompaniesController {

     @Autowired
     private Addcompaniesservice service;
     
     
     
     @GetMapping("/list")
     public List<Addcompanies> gettallcompanies()
     {
    	 return service.getallcompanies();
     }
     
     
     @PostMapping("/save")
     public Addcompanies savecompany(@RequestBody Addcompanies company) {
    	 return service.savecompany(company);
     }
	
     @GetMapping("/find/{companyname}")
     public boolean companypresent(@PathVariable String companyname)
     {
    	 return service.companypresent(companyname);
     }
	
     @DeleteMapping("/delete/{companyname}")
     public Addcompanies deletecompany(@PathVariable String companyname)
     {
    	 return service.deletecompany(companyname);
     }
	
}
