package com.example.demomangodbcrud.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demomangodbcrud.entity.Login;

public interface Loginrepo extends MongoRepository<Login,String> {

}
