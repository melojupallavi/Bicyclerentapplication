package com.example.demomangodbcrud.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demomangodbcrud.entity.Payment;

@Service
public interface PaymentService {
	
	public List<Payment>getallpaymentdetails();
	public Payment savepayment(Payment payment);
	//public Payment getdetailsbynameoncard(String nameoncard);
	public List<Payment>  getdetailsbynameoncard(String nameoncard);

}
