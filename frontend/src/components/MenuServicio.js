import React, {Component} from 'react';
import Service from '../service/Service';

class MenuServicio extends Component{
    
    constructor(props){
        super(props)
        this.state={
            idTecnico: '',
            idServicio: '',
            fechaInicio: '',
            fechaFin: '',
            respuesta: true,
            estadoMenuServicio: false
        }
        this.saveServicio = this.saveServicio.bind(this);
        this.limpiarCampos = this.limpiarCampos.bind(this);
        this.changeIdTecnico = this.changeIdTecnico.bind(this);
        this.changeIdServicio = this.changeIdServicio.bind(this);
        this.changeFechaInicio = this.changeFechaInicio.bind(this);
        this.changeFechaFin = this.changeFechaFin.bind(this);
    }

    saveServicio = (e) => {
        if(this.state.fechaInicio >= this.state.fechaFin){
            alert('La fecha de inicio debe ser menor que la fecha de finalizacion.');
        }else if(this.state.idTecnico.length > 4 || this.state.idServicio.length > 4 || this.state.idTecnico === '' || this.state.idServicio === '' || this.state.fechaInicio === '' || this.state.fechaFin === ''){
            this.state.idTecnico.length >4 || this.state.idServicio.length >4 ? alert('Para el ID debe ingresar un numero positivo menor de 5 digitos') :alert('Complete todos los campos correctamente');
        }else{
            e.preventDefault();
            let servicio = {idTecnico: this.state.idTecnico, idServicio: this.state.idServicio, fechaInicio: this.state.fechaInicio, fechaFin: this.state.fechaFin };
            Service.createServicio(servicio).then(res => {
                if(res.data.length === 0){
                    return null;
                }else{
                    this.setState({estadoMenuServicio: !this.state.estadoMenuServicio, respuesta: !this.state.respuesta});
                }
            });
        }
    }
    limpiarCampos = () => this.setState({idTecnico: '', idServicio: '', fechaInicio: '', fechaFin: ''});
    changeIdTecnico = (event) => this.setState({idTecnico: event.target.value});
    changeIdServicio = (event) => this.setState({idServicio: event.target.value});
    changeFechaInicio = (event) => this.setState({fechaInicio: event.target.value});
    changeFechaFin = (event) => this.setState({fechaFin: event.target.value});

    render(){ 
        return(
            <div>
                <div hidden={this.state.estadoMenuServicio}>
                    <div>
                        <h4>INGRESE TODOS LOS DATOS PARA GENERAR UN REPORTE TECNICO</h4>
                    </div>
                    <div>
                        <form>
                            <table className="text-center tablee table-hover table-bordered">
                                <tbody>
                                    <tr className="bg-primary color-white">
                                        <td>Identificacion del tecnico</td>
                                    </tr>
                                    <tr>
                                        <td><input type="number" required min="0" id="idTecnico" name ="idTecnico" 
                                            value={this.state.idTecnico} onChange={this.changeIdTecnico} /></td>
                                    </tr>
                                    <tr className="bg-primary color-white">
                                        <td>Identificacion del servicio</td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" required min="0" id="idServicio" name="idServicio" 
                                            value={this.state.idServicio} onChange={this.changeIdServicio} /></td>
                                    </tr>
                                    <tr className="bg-primary color-white">
                                        <td>Fecha y hora de inicio</td>
                                    </tr>
                                    <tr>
                                        <td><input type="datetime-local" id="fechaInicio" name="fechaInicio"
                                            required value={this.state.fechaInicio} onChange={this.changeFechaInicio} /></td>
                                    </tr>
                                    <tr className="bg-primary color-white">
                                        <td>Fecha y hora de fin</td>
                                    </tr>
                                    <tr>
                                        <td><input type="datetime-local" id="fechaFin" name="fechaFin" 
                                            required value={this.state.fechaFin} onChange={this.changeFechaFin}/></td>
                                    </tr>
                                    <tr> 
                                        <td>
                                            <button id="enviar" type="submit" onClick={this.saveServicio} className="btn btn-primary margin" >Enviar</button>
                                            <button id="borrar" type="reset" onClick={this.limpiarCampos} className="btn btn-primary margin" >Limpiar Campos</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>  
                </div>
                <div hidden={this.state.respuesta}>
                    <h4>Datos guardados correctamente.</h4>
                </div>
            </div>
        ); 
    }
}
export default MenuServicio;