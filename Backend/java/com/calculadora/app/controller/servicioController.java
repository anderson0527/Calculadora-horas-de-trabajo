package com.calculadora.app.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.calculadora.app.model.calcular;
import com.calculadora.app.model.servicio;
import com.calculadora.app.repository.servicioRepository;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/backend/controller/")
public class servicioController {
	
	@Autowired
	private servicioRepository servicioRepository;
	
	@PostMapping("/servicios")
	public servicio createServicio(@RequestBody servicio servicio) {
		return servicioRepository.save(servicio);
	}
	
	@GetMapping("/servicios/{id}")
	public List<servicio> getServicioById(@PathVariable String id) {
		List<servicio> servicios = null;
		try {
			servicios = servicioRepository.findAllByIdTecnico(id);
		}catch (Exception e) {}
		if(servicios == null)
			return null;
		else
			return servicios;
	}
	
	@GetMapping("/calcularHoras/{fechas}")
	public Object[] calcularHoras(@PathVariable Object[] fechas) {
		calcular calcularHoras = new calcular();
		return calcularHoras.calcularHoras(fechas);
		
	}
}