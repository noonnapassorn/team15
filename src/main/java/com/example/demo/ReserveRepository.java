package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface ReserveRepository extends CrudRepository<Reserve, String> {
    Reserve findByreserveId(
            @Param("reserveId") String reserveId
    );

}
