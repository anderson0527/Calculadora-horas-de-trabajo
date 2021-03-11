import React, {Component} from 'react';
import Service from '../service/Service';

class Prueba extends Component{
    constructor(props){
        super(props)
        this.state={
            servicio: [],
            idTecnicoCalcular: props.location.state.idTecnico,
            numeroSemanaCalcular: props.location.state.numeroSemana,
            mensajeRespuesta: ''
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.calcularHoras = this.calcularHoras.bind(this);
    }

    componentDidMount = () => {
        Service.getServicioById(this.state.idTecnicoCalcular).then(res => {
            if(res.data.length === 0 ){
                this.setState({servicio: ["0:00","0:00","0:00","0:00","0:00","0:00"] });
                this.setState({mensajeRespuesta: 'No existe el tecnico con id: '+this.state.idTecnicoCalcular});
            }else{
                this.setState({servicio: [
                    this.state.numeroSemanaCalcular, 
                    res.data.map(valor => 
                        [valor.fechaInicio, valor.fechaFin]
                    )] 
                });
                this.calcularHoras();
            }
        });
    }
    calcularHoras = () => {
        Service.calcularHoras( this.state.servicio ).then(resultado =>{
            if(resultado.data.length === 0){
                this.setState({servicio: ["0:00","0:00","0:00","0:00","0:00","0:00"] });
                this.setState({mensajeRespuesta: "No hay reportes para en la semana: "+ this.state.numeroSemanaCalcular});
            }else{
                this.setState({servicio: resultado.data});
            }
        });
    } 

    render(){
        return(
            <div className="text-center">
                <table className="text-center tablee table-hover table-bordered">
                    <thead> 
                        <tr>
                            <td>Horas Normales</td>
                            <td>Horas Nocturnas</td>
                            <td>Horas Dominicales</td>
                            <td>Horas Normales Extra</td>
                            <td>Horas Nocturnas Extra</td>
                            <td>Horas Dominicales Extra</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            { 
                                this.state.servicio.map( hora => 
                                    <td key={hora}> {hora} </td> 
                                ) 
                            }
                        </tr>
                    </tbody>
                </table>
                {this.state.mensajeRespuesta}
            </div>
        ); 
    }
}
export default Prueba;