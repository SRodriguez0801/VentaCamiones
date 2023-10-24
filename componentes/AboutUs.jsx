import React, { useState } from 'react';
import '../Estilos/formulario.css'
import { Link } from 'react-router-dom';

export const AboutUs = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    estadoCivil: '',
    residencia: '',
    ciudad: '',
    pais: '',
    fecha: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer algo con los datos del formulario, como enviarlos a un servidor o mostrarlos en la consola.
    console.log(formData);
  };

  return (
    <div className="d-flex flex-column align-items-center">
    <h1>Personal</h1>
    
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </label>
       
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleInputChange}
          />
        </label>
   
        <label>
          Edad:
          <input
            type="text"
            name="edad"
            value={formData.edad}
            onChange={handleInputChange}
          />
        </label>
   
        <label>
          Estado Civil:
          <input
            type="text"
            name="estadoCivil"
            value={formData.estadoCivil}
            onChange={handleInputChange}
          />
        </label>
       
        <label>
          Residencia:
          <input
            type="text"
            name="residencia"
            value={formData.residencia}
            onChange={handleInputChange}
          />
        </label>
      
        <label>
          Ciudad:
          <input
            type="text"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleInputChange}
          />
        </label>
     
        <label>
          País:
          <input
            type="text"
            name="pais"
            value={formData.pais}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Fecha:
          <input
            type="text"
            name="fecha"
            value={formData.fecha}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <Link to="/">Menu</Link>


    </div>
  );
};



