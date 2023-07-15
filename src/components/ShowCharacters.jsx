import axios from "axios";
import { useEffect, useState } from "react";
import './showCharacters.css';

const url = "http://localhost:8080/characters";
const ShowCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedImage, setUpdatedImage] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  useEffect(() => {
    getAllCharacters();
  }, []);

  const getAllCharacters = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setCharacters(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (character) => {
    setSelectedCharacter(character);
    setIsEditFormOpen(true);
    setUpdatedName(character.name);
    setUpdatedImage(character.img);
    setUpdatedDescription(character.description);
  };

  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    const updatedCharacter = {
      ...selectedCharacter,
      name: updatedName,
      img: updatedImage,
      description: updatedDescription,
    };

    try {
      await axios.put(`${url}/${selectedCharacter.id}`, updatedCharacter);

      setCharacters((prevCharacters) =>
        prevCharacters.map((character) =>
          character.id === selectedCharacter.id ? updatedCharacter : character
        )
      );

      closeEditForm();
      console.log("Character updated:", selectedCharacter.id);
    } catch (error) {
      console.log(error);
    }
  };

  const closeEditForm = () => {
    setIsEditFormOpen(false);
    setSelectedCharacter(null);
    setUpdatedName("");
    setUpdatedImage("");
    setUpdatedDescription("");
  };

  const handleDelete = async (characterId) => {
    try {
      await axios.delete(`${url}/${characterId}`);
      setCharacters((prevCharacters) =>
        prevCharacters.filter((character) => character.id !== characterId)
      );
      console.log("Character deleted:", characterId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="box">
      {characters.map((character) => (
        <div className="contenedor" key={character.id}>
          <div className="contenedor-img">
            <img src={character.img} alt="" className="img" />
          </div>
          <div className="contenedor-datos">
            <h3>{character.name}</h3>
            <p>{character.description}</p>
          </div>
          <br />
          <br />
          <div>
            <button onClick={() => handleUpdate(character)}>Actualizar</button>
            <button onClick={() => handleDelete(character.id)}>Eliminar</button>
          </div>
        </div>
      ))}

      {isEditFormOpen && selectedCharacter && (
        <div className="edit-form">
          <h3>Actualizar Caracteristicas</h3>
          <form onSubmit={handleEditFormSubmit}>
            <label>Nombre:</label>
            <input
              type="text"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
            <label>Dirección URL:</label>
            <input
              type="text"
              value={updatedImage}
              onChange={(e) => setUpdatedImage(e.target.value)}
            />
            <label>Descripción:</label>
            <textarea
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
            ></textarea>
            <div>
              <button type="submit">Guardar</button>
              <button onClick={closeEditForm}>Cancelar</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ShowCharacters;