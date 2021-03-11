import Axios from 'axios';

const apiUrl = "http://localhost:8081/backend/controller/servicios/";
const calcularUrl = "http://localhost:8081/backend/controller/calcularHoras/";

class Service{
    createServicio(servicio){
        return Axios.post(apiUrl, servicio);
    }
    getServicioById(servicioId){
        return Axios.get(apiUrl + servicioId);
    }
    calcularHoras(servicio){
        return Axios.get(calcularUrl + servicio);
    }
}
export default new Service();