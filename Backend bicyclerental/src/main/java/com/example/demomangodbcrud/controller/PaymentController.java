package com.example.demomangodbcrud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demomangodbcrud.entity.Payment;
import com.example.demomangodbcrud.service.PaymentService;

@CrossOrigin("*")
@RestController()
@RequestMapping("/payment")
public class PaymentController {
	
	
	@Autowired
	public PaymentService service;
	
	@GetMapping("/list")
	public List<Payment>getallpaymentdetails()
	{
		return service.getallpaymentdetails();
	}
    
	@PostMapping("/save")
	public Payment savepayment(@RequestBody Payment payment)
	{
		return service.savepayment(payment);
	}
	
	@GetMapping("/find/{nameoncard}")
	public List<Payment>  getdetailsbynameoncard(@PathVariable  String nameoncard)
	{
		return service. getdetailsbynameoncard(nameoncard);
	}
	

}
