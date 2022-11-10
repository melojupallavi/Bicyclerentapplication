package com.example.demomangodbcrud.entity;

import org.springframework.data.annotation.Id;

public class Login {

	@Id
	private String  id;
	private String Username;
	private String  password;
    private String role;

    public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
}
