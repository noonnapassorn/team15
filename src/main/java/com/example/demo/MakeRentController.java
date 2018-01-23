package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;

@Controller
public class MakeRentController {

     @Autowired
     CutRoomRepository cutRoomRepository;
     @Autowired
     ReserveRepository reserveRepository;

     @ResponseBody
     @RequestMapping(path = "/name/{n}/nameId/{id}/receipt/{re}/room/{r}/status/{s}", method = RequestMethod.DELETE)
     public String cutRoom(@PathVariable String id,@PathVariable String r,@PathVariable String n,@PathVariable String re,@PathVariable String s) {
         Reserve reserve = this.reserveRepository.findOne(re);
         CutRoom cutRoom = new CutRoom(reserve,id,r,n,s);
         this.cutRoomRepository.save(cutRoom);
         return "{\"status\":\"Voted\"}";
     }
}