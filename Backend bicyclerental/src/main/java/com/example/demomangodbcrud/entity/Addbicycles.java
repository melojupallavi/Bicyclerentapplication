package com.example.demomangodbcrud.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Addbicycles {
	
	@Id
	private String id;
	private String companyname;
	private String modelname;
	private String count;
	
	private boolean isedit;
	private String url;
	public boolean isIsedit() {
		return isedit;
	}
	public void setIsedit(boolean isedit) {
		this.isedit = isedit;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCompanyname() {
		return companyname;
	}
	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}
	public String getModelname() {
		return modelname;
	}
	public void setModelname(String modelname) {
		this.modelname = modelname;
	}
	public String getCount() {
		return count;
	}
	public void setCount(String count) {
		this.count = count;
	}

	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	

}
