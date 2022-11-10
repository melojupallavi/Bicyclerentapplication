package com.example.demomangodbcrud.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demomangodbcrud.entity.Addbicycles;
import com.example.demomangodbcrud.service.AddbicyclesService;

@CrossOrigin("*")
@RestController()
@RequestMapping("/bicycles")
public class AddbicyclesController {

	@Autowired
	public AddbicyclesService service;
	
	@GetMapping("/list")
	public List<Addbicycles> getallbicycles()
	{
		return service. getallbicycles();
		
	}
	@PostMapping("/save")
	public  Addbicycles savebicycles(@RequestBody Addbicycles bicycle)
	{
		return service.savebicycles(bicycle);
		
	}
	@GetMapping("find/{companyname}")
	public List<Addbicycles> getuserdeatilsbycompanyname(@PathVariable String companyname)
	{
//		Query query = new Query();
//		query.addCriteria(Criteria.where("email").is(email));
//		 Register user = MongoTemplate.find(query, Register.class);
		return service.getuserdeatilsbycompanyname(companyname);
//		return user;
	}
	
	@GetMapping("modelname/{modelname}")
	public Addbicycles getuserdeatilsbymodelname(@PathVariable String modelname)
	{
//		Query query = new Query();
//		query.addCriteria(Criteria.where("email").is(email));
//		 Register user = MongoTemplate.find(query, Register.class);
		return service.getuserdeatilsbymodelname(modelname);
//		return user;
	}
	
      @DeleteMapping("/delete/{modelname}")
      public Addbicycles deletebicyclebymodelname(@PathVariable String modelname)
      {
    	  return service.deletebicyclebymodelname(modelname);
      }
      
      @PutMapping("/update/{modelname}")
      public Addbicycles updatebicycles(@PathVariable String modelname, @RequestBody Addbicycles newbicycle)
      {
//    	  System.out.println("hello");
    	    Addbicycles oldbicycle=service.getuserdeatilsbymodelname(modelname);
    	    
    	    oldbicycle.setCount(newbicycle.getCount());
//    	   service.deletebicyclebymodelname(modelname);
    	 Addbicycles  acutalbicycle= service.savebicycles(oldbicycle);
    	   return  acutalbicycle;
    	    
      }
}
