package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface ReserveRepository extends CrudRepository<Reserve, String> {
    Reserve findBymemberId(
            @Param("memberId") String memberId
    );
    Reserve findByName(@Param("name") String name);

}
