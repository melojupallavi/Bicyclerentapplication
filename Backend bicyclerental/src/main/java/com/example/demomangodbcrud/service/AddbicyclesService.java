package com.example.demomangodbcrud.service;

import java.util.List;

import org.springframework.stereotype.Service;


import com.example.demomangodbcrud.entity.Addbicycles;

@Service
public interface AddbicyclesService {
	
	
	public List<Addbicycles> getallbicycles();
	public Addbicycles savebicycles(Addbicycles bicycle);
	public List<Addbicycles> getuserdeatilsbycompanyname(String companyname);
	public Addbicycles getuserdeatilsbymodelname(String modelname);
	public Addbicycles deletebicyclebymodelname(String modelname);
	public Addbicycles updatebicycles(String modelname, Addbicycles oldbicycle);
      
}
