package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Customer {

	private @Id @GeneratedValue Long id;
	private String name;
	private String email;
	private String tel;

	private Customer() {}
	public Customer(String name, String email,String tel) {
		this.name = name;
		this.email = email;
		this.tel = tel;
	}
}