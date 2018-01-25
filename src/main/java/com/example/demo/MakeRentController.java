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
     @RequestMapping(path = "/name/{name}/memberId/{memberId}", method = RequestMethod.GET)
     public String cutRoom(@PathVariable String name , @PathVariable String memberId ) {
        Reserve res = this.reserveRepository.findByName(name);
        Reserve idroom = this.reserveRepository.findBymemberId(memberId);
        System.out.println(res +"  "+idroom);//ปริ้นค่าออกมาดูว่าจะรีอะไร
        if(res!=null&&idroom!=null)//รีเทิร์นเป็นออปเจคมั้ย ถ้าไม่มันจะเป็นnull
            return "{\"status\":\"found\"}";
        else
            return "{\"status\":\"not found\"}";
         

     }

}