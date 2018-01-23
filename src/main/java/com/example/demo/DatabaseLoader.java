package com.example.demo;

import com.example.demo.Reserve;
import com.example.demo.ReserveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final ReserveRepository reserveRepository;

    @Autowired
    public DatabaseLoader(ReserveRepository repository) {
        this.reserveRepository = repository;
    }


	@Override
	public void run(String... strings) throws Exception {
		this.reserveRepository.save(new Reserve("R1","S01","C0001","นภัสสร"));
		this.reserveRepository.save(new Reserve("R2","S02","C0002","ธนัชชา"));
		this.reserveRepository.save(new Reserve("R3","S03","C0003","มารุต"));
		this.reserveRepository.save(new Reserve("R4","S04","C0004","รัชพล"));
		this.reserveRepository.save(new Reserve("R5","S05","C0005","นุ่น"));
		this.reserveRepository.save(new Reserve("R6","S06","C0006","หมิง"));
		this.reserveRepository.save(new Reserve("R7","S07","C0007","เบียร์"));
		this.reserveRepository.save(new Reserve("R8","S08","C0008","เจล"));
		this.reserveRepository.save(new Reserve("R9","G01","C0011","เอส"));
		this.reserveRepository.save(new Reserve("R10","G02","C0012","วรัญญา"));
		this.reserveRepository.save(new Reserve("R11","G03","C0013","ทองยศ"));
		this.reserveRepository.save(new Reserve("R12","G04","C0014","กลุ่ม9"));
		this.reserveRepository.save(new Reserve("R13","G05","C0015","ห้องซ้อมดนตรี"));
	}
}


