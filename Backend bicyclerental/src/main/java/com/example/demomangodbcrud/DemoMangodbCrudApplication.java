package com.example.demomangodbcrud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan
public class DemoMangodbCrudApplication {

	public static void main(String[] args) {
//		
//		System.setProperty("server.port", 3021);
		System.setProperty("server.port","8090");
		SpringApplication.run(DemoMangodbCrudApplication.class, args);
//		System.out.println("This is mango");
	}

}
