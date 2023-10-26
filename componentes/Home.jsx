import React from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/home.css'

export const Home = () => {
  return (

    <div className="d-flex flex-column align-items-center">


      <h1 className="mt-4">Venta de Camiones</h1>
      <img src="camion_4.jpg" alt="Camión2" className="mt-4" />

      <div className="d-flex justify-content-center">
        <Link to="/contacts" className="btn btn-primary mx-2">
          Contactos
        </Link>
        <Link to="/aboutus" className="btn btn-primary mx-2">
          Personal
        </Link>
        <Link to="/services" className="btn btn-primary mx-2">
          Servicios
        </Link>
        <Link to="/products" className="btn btn-primary mx-2">
          Productos
        </Link>
      </div>
      <img src="camion_2.jpg" alt="Camión" className="mt-4" />

    </div>
  );
};


