package com.example.demomangodbcrud.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.demomangodbcrud.entity.Payment;

public interface Paymentrepo extends  MongoRepository<Payment,String> {

	public List<Payment> findByNameoncard(String nameoncard);

}
