import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const Services = () => {
  // Estado para almacenar los servicios ofrecidos
  const [services, setServices] = useState([
    'Venta de camiones nuevos',
    'Venta de camiones usados',
    'Financiamiento',
    'Reparaciones y mantenimiento',
  ]);

  // Función para manejar la adición de nuevos servicios
  const addService = (newService) => {
    setServices([...services, newService]);
  };

  return (
    <div className="d-flex flex-column align-items-center">
    <h1>Servicios de Ventas </h1>
      <p>Explora los servicios que ofrecemos.</p>
      <img src="camion_5.jpeg" alt="camion" className="mt-4" />

      <h2>Servicios Disponibles:</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>

      <h2>Agregar Nuevo Servicio:</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newService = e.target.newService.value;
          if (newService.trim() !== '') {
            addService(newService);
            e.target.newService.value = '';
          }
        }}
      >
        <input type="text" name="newService" placeholder="Nombre del servicio" />
        <button type="submit">Agregar</button>
      </form>
      <Link to="/">Menu</Link>

    </div>
  );
};


