import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Products = () => {
  const truckData = [
    {
      type: 'Camión carga ligera',
      image: 'producto_1.jpg',
     // Ruta a la imagen del Camión Tipo 1
    },
    {
      type: 'Camión Tipo 2',
      image: 'producto_2.jpg', // Ruta a la imagen del Camión Tipo 2
    },
    {
      type: 'Camión Tipo 3',
      image: 'producto_3.jpg', // Ruta a la imagen del Camión Tipo 3
    },
    // Agrega más tipos de camiones y rutas de imágenes según tus necesidades
  ];

  const [selectedTruck, setSelectedTruck] = useState('');
  const [truckInfo, setTruckInfo] = useState('');

  const handleTruckChange = (event) => {
    const selectedTruckType = event.target.value;
    setSelectedTruck(selectedTruckType);

    // Busca la ruta de la imagen del camión seleccionado
    const selectedTruckImage = truckData.find((truck) => truck.type === selectedTruckType).image;
    setTruckInfo(selectedTruckImage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Tipos de Camiones</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Selecciona un tipo de camión:
          <select value={selectedTruck} onChange={handleTruckChange}>
            <option value="">Selecciona un camión</option>
            {truckData.map((truck, index) => (
              <option key={index} value={truck.type}>
                {truck.type}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Mostrar Información</button>
      </form>
      {truckInfo && (
        <div>
          <h3>Información del Camión Seleccionado</h3>
          <p>Camión seleccionado: {selectedTruck}</p>
          <img src={truckInfo} alt={`Imagen del ${selectedTruck}`} />
        </div>
      )}
                <Link to="/">Menu</Link>

    </div>
  );
};

