package com.example.demomangodbcrud.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demomangodbcrud.entity.Payment;
import com.example.demomangodbcrud.repository.Paymentrepo;
import com.example.demomangodbcrud.service.PaymentService;

@Service
public class Paymentimpl implements PaymentService {
	
	
	@Autowired
	public Paymentrepo repo;

	@Override
	public List<Payment> getallpaymentdetails() {
		// TODO Auto-generated method stub
		return repo.findAll() ;
	}

	@Override
	public Payment savepayment(Payment payment) {
		// TODO Auto-generated method stub
		return repo.save(payment);
	}

	@Override
	public List<Payment> getdetailsbynameoncard(String nameoncard) {
		// TODO Auto-generated method stub
		List<Payment> pay= repo.findByNameoncard(nameoncard);
		return pay;
   }

	public Paymentrepo getRepo() {
		return repo;
	}

	public void setRepo(Paymentrepo repo) {
		this.repo = repo;
	}

}
