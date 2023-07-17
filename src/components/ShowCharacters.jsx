import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import './showCharacters.css'
import CardCharacter from "./CardCharacter"


const url = "http://localhost:8080/characters"
const ShowCharacters = () => {

  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCharacters()
  }, [])
 

  const getAllCharacters = async () => {
    const response = await axios.get(url)
    let data = response.data;
    setCharacters(data);
  }

  // create, read, update, delete 
  const handleEditCharacter = (character) => {
    navigate(`/edit/${character.id}`)
  };

  const handleDeleteCharacter = (character) => {    
    navigate(`/delete/${character.id}`);
  };

  const cards = characters.map((character) => <CardCharacter 
                                                        key = {character.id} 
                                                        character = {character} 
                                                        editCharacter = { handleEditCharacter }
                                                        deleteCharacter = { handleDeleteCharacter }
                                                     /> );
  
  return (
    <>
      <div className="box">
        { 
          cards
        }
      </div>
    </>
  )
}

export default ShowCharacters