import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './showCharacters.css'

const url = "http://localhost:8080/characters"
const DeleteCharacter = () => {

  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { characterId } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${url}/${characterId}`);
        setCharacter(response.data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchCharacter();
  }, [characterId]);

  const goBack = () => {
    navigate("/");
  }
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
      <div className="form">
        <h2>Eliminar el personaje {character.name} </h2>
        <p>¿Estás seguro de que quieres eliminar este personaje?</p>
        <button onClick={handleDeleteCharacter}>Eliminar</button>
        <button type="button" onClick={goBack}>Cancelar</button>
      </div>
    </div>
  );
};

export default DeleteCharacter;