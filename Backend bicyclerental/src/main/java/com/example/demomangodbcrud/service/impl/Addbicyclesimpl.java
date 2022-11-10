package com.example.demomangodbcrud.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demomangodbcrud.entity.Addbicycles;
import com.example.demomangodbcrud.repository.Addbicylesrepo;
import com.example.demomangodbcrud.service.AddbicyclesService;

@Service
public class Addbicyclesimpl implements AddbicyclesService {

	
	@Autowired 
	public Addbicylesrepo repo;
	
	@Override
	public List<Addbicycles>getallbicycles() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Addbicycles savebicycles(Addbicycles bicycle) {
		// TODO Auto-generated method stub
		return repo.save(bicycle);
	}

	public Addbicylesrepo getRepo() {
		return repo;
	}

	public void setRepo(Addbicylesrepo repo) {
		this.repo = repo;
	}

	@Override
	public List<Addbicycles> getuserdeatilsbycompanyname(String companyname) {
		List<Addbicycles> bicycles=repo.findByCompanyname(companyname);
		return bicycles;
	}

	@Override
	public Addbicycles getuserdeatilsbymodelname(String modelname) {
		// TODO Auto-generated method stub
		return repo.findByModelname(modelname);
	}

	@Override
	public Addbicycles deletebicyclebymodelname(String modelname) {
		
	  return repo.deleteByModelname(modelname);
		
	}

	@Override
	public Addbicycles updatebicycles(String modelname, Addbicycles newbicycle) {
		// TODO Auto-generated method stub
		return repo.save(newbicycle);
		
	}
	

}
