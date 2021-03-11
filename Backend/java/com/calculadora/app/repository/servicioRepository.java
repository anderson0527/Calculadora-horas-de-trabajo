package com.calculadora.app.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.calculadora.app.model.servicio;
@Repository
public interface servicioRepository extends JpaRepository<servicio, String>{
	List<servicio> findAllByIdTecnico(String id);		
}