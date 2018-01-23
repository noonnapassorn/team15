package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Reserve {

    private @Id String reserveId;
    private String typeRoom;
    private String memberId;
    private String name;

    private Reserve() {}

    public Reserve(String reserveId,String typeRoom, String memberId, String name) {
        this.reserveId = reserveId;
        this.typeRoom = typeRoom;
        this.memberId = memberId;
        this.name = name;
    }
}
