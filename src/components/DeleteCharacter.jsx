import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const DeleteCharacter = ({ characterId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleDeleteCharacter = async () => {
    setIsLoading(true);
    try {
      await axios.delete(`${url}/${characterId}`);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Eliminar Personaje</h2>
      <p>¿Estás seguro de que quieres eliminar este personaje?</p>
      <button onClick={handleDeleteCharacter}>Eliminar</button>
    </div>
  );
};

export default DeleteCharacter;