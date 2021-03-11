import MenuServicio from "./MenuServicio";
import MenuCalcular from "./MenuCalcular";
import React from 'react';
import {screen, render} from '@testing-library/react';

describe("Prueba menus", () => {
    it("render menu servicio sin problemas", () => {
        render(<MenuServicio />);
        expect(screen.queryByText(/INGRESE TODOS LOS DATOS PARA GENERAR UN REPORTE TECNICO/i)).toBeInTheDocument();
    });
    it("render menu calcular sin problemas", () => {
        render(<MenuCalcular />);
        expect(screen.queryByText(/Numero de la semana/i)).toBeInTheDocument();
    });
});