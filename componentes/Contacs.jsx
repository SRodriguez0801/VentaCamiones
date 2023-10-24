import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Contacs = () => {

    const [formData] = useState({
        phoneNumber: '9880-1090',
        truckQuery: 'Jordan Rodriguez',
      });
    
      const formStyle = {
        border: '1px solid #ccc',
        padding: '20px',
        width: '300px',
        margin: '0 auto',
      };
    
      const labelStyle = {
        fontWeight: 'bold',
      };
    
      return (
        <div className="d-flex flex-column align-items-center">
          <h1>Contacto</h1>
          <img src="contacto.jpg" alt="contacto" className="mt-4" />
          <form style={formStyle}>
            <div>
              <label style={labelStyle}>Numero Celular:</label>
              <p>{formData.phoneNumber}</p>
            </div>
            <div>
              <label style={labelStyle}>Asesor de Ventas:</label>
              <p>{formData.truckQuery}</p>
            </div>
          </form>
          <Link to="/">Menu</Link>
        </div>
        
      );
    };











