package com.example.demomangodbcrud.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Payment {
	
	@Id
	private  String id;
	private  String fromdate;
	private  String todate;
	private  String modelname;
	private  String count; 
	private  String bookingmoney;
	private  String cardno;
	private  String nameoncard;
	private  String cvv;
	private  String expirydate;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getFromdate() {
		return fromdate;
	}
	public void setFromdate(String fromdate) {
		this.fromdate = fromdate;
	}
	public String getTodate() {
		return todate;
	}
	public void setTodate(String todate) {
		this.todate = todate;
	}
	
	
	public String getBookingmoney() {
		return bookingmoney;
	}
	public void setBookingmoney(String bookingmoney) {
		this.bookingmoney = bookingmoney;
	}
	public String getCardno() {
		return cardno;
	}
	public void setCardno(String cardno) {
		this.cardno = cardno;
	}
	public String getNameoncard() {
		return nameoncard;
	}
	public void setNameoncard(String nameoncard) {
		this.nameoncard = nameoncard;
	}
	public String getCvv() {
		return cvv;
	}
	public void setCvv(String cvv) {
		this.cvv = cvv;
	}
	public String getExpirydate() {
		return expirydate;
	}
	public void setExpirydate(String expirydate) {
		this.expirydate = expirydate;
	}
	public String getCount() {
		return count;
	}
	public void setCount(String count) {
		this.count = count;
	}
	public String getModelname() {
		return modelname;
	}
	public void setModelname(String modelname) {
		this.modelname = modelname;
	}
	

	  

}
