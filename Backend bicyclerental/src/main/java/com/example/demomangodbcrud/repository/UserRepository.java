package com.example.demomangodbcrud.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demomangodbcrud.entity.User;

public interface UserRepository extends MongoRepository<User,String> {

}
