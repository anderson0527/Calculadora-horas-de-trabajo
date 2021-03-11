import React, {Component} from 'react';
class MenuCalcular extends Component{
    constructor(props){
        super(props)
        this.state={
            idTecnicoCalcular: '',
            numeroSemana: ''
        }
        this.consultarTecnico = this.consultarTecnico.bind(this);
        this.limpiarCampos = this.limpiarCampos.bind(this);
        this.changeIdTecnico = this.changeIdTecnico.bind(this);
        this.changeNumeroSemana = this.changeNumeroSemana.bind(this);
    }
    
    limpiarCampos = () => this.setState({idTecnicoCalcular: '', numeroSemana: ''});
    consultarTecnico = (e) => {
        if(this.state.idTecnicoCalcular === '' || this.state.numeroSemana === '' || this.state.idTecnicoCalcular.length > 4){
            this.state.idTecnicoCalcular.length > 4 ? alert('Para el ID debe ingresar un numero positivo menor de 5 digitos') : alert('Complete todos los campos correctamente');
        }else{
            this.props.history.push('/Respuesta', {idTecnico: this.state.idTecnicoCalcular, numeroSemana: this.state.numeroSemana} );
        }
    }
    changeIdTecnico = (event) => this.setState({idTecnicoCalcular: event.target.value});
    changeNumeroSemana = (event) => this.setState({numeroSemana: event.target.value});
    
    render(){
        return(
            <div>
                <div>
                    <h4>INGRESE SUS DATOS PARA CALCULAR</h4>
                </div>
                <div>
                    <form>
                        <table className="text-center tablee table-hover table-bordered">
                            <tbody>
                                <tr className="bg-primary color-white">
                                    <td>Identificacion del tenico</td>
                                </tr>
                                <tr>
                                    <td><input type="number" id="idTecnicoCalcular" name="idTecnicoCalcular" min="0" required
                                        value={this.state.idTecnicoCalcular} onChange={this.changeIdTecnico} /></td>
                                </tr>
                                <tr className="bg-primary color-white">
                                    <td>Numero de la semana</td>
                                </tr>
                                <tr>
                                    <td><input type="week" id="numeroSemana" name="numeroSemana" required 
                                        value={this.state.numeroSemana} onChange={this.changeNumeroSemana}/></td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type="submit" id="enviar" onClick={this.consultarTecnico} className="btn btn-primary margin"  >Enviar</button>
                                        <button type="reset" id="borrar" onClick={this.limpiarCampos} className="btn btn-primary margin"  >Limpiar Campos</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>     
            </div>
        ); 
    }
}
export default MenuCalcular;