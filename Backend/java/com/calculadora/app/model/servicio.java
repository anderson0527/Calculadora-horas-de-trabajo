package com.calculadora.app.model;
import java.io.Serializable;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import com.sun.istack.NotNull;
@Entity
@Table(name = "servicio")
public class servicio  implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	@Column(name = "idTecnico", nullable = false)
	private String idTecnico;
	
	@NotNull
	@Column(name = "idServicio", nullable = false)
	private String idServicio;
	
	@NotNull
	@Column(name = "fechaInicio", nullable = false)
	private LocalDateTime fechaInicio;
	
	@NotNull
	@Column(name = "fechaFin", nullable = false)
	private LocalDateTime fechaFin;
	
	public servicio() {}
	public servicio(String idTecnico, String idServicio, LocalDateTime fechaInicio, LocalDateTime fechaFin) {
		super();
		this.idTecnico = idTecnico;
		this.idServicio = idServicio;
		this.fechaInicio = fechaInicio;
		this.fechaFin = fechaFin;
	}
		
	public String getIdTecnico() { return idTecnico; }
	public void setIdTecnico(String idTecnico) { this.idTecnico = idTecnico; }
	
	public String getIdServicio() { return idServicio; }
	public void setIdServicio(String idServicio) { this.idServicio = idServicio; }
	
	public LocalDateTime getFechaInicio() { return fechaInicio; }
	public void setFechaInicio(LocalDateTime fechaInicio) { this.fechaInicio = fechaInicio; }
	
	public LocalDateTime getFechaFin() { return fechaFin; }
	public void setFechaFin(LocalDateTime fechaFin) { this.fechaFin = fechaFin; }
}