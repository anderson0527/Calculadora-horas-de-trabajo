package com.calculadora.app;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import com.calculadora.app.controller.servicioController;
@SpringBootTest
class BackendApplicationTests {

	private servicioController servicioController = new servicioController();

	@Test
	public void getServicioById() {
		assertNull(servicioController.getServicioById("123"));
	}
	
	@Test
	public void createServicio() {
		Object[] fechas = new Object[3];
		fechas[0] = "2021-W08";
		fechas[1] = "2021-02-22T07:00:00";
		fechas[2] = "2021-02-22T09:00:00";
		Object[] horas = servicioController.calcularHoras(fechas);
		assertNotNull(horas);
		assertEquals("2:00", horas[0]);
	}
}