import React, {Component} from 'react';
class MenuServicio extends Component{
    constructor(props){
        super(props);
        this.addServicio = this.addServicio.bind(this);
        this.calcular = this.calcular.bind(this);
    }
    addServicio = () => this.props.history.push('/MenuServicio');
    calcular = () => this.props.history.push('/MenuCalcular');
     
    render(){
        return(
            <div>
                <div>
                    <h4>Seleccione una opcion</h4>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary margin" onClick={this.addServicio}>Reportar servicio</button>
                    <button className="btn btn-primary margin" onClick={this.calcular}>Calcular horas</button>
                </div>
            </div>
        ); 
    }
}
export default MenuServicio;