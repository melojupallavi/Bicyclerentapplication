package com.example.demomangodbcrud.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.example.demomangodbcrud.entity.Addbicycles;

public interface Addbicylesrepo extends  MongoRepository<Addbicycles,String> {

   public	List<Addbicycles> findByCompanyname(String companyname);

  public Addbicycles findByModelname(String modelname);

         public Addbicycles deleteByModelname(String modelname);
//         public  Addbicycles updatebicycles(String modelname,Addbicycles newbicyle);
         

}