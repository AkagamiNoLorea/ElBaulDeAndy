import axios from "axios"
import { useEffect, useState } from "react"
import './showCharacters.css'

const url= "http://localhost:8080/characters"
const ShowCharacters = () => {

    const [characters, setCharacters]  = useState([])

    useEffect( () => {
        getAllCharacters()  
    }, [])
    const getAllCharacters = async () => {
        const response = await axios.get(url)
        let data = response.data;
        setCharacters(data);
        console.log(data)
    
 
    }
// create, read, update, delete 

  return (
    <div className="box">
  {
          characters.map(character => (
            <div className="contenedor" key={character.id}>
              <div className="contenedor-img">
                <img src ={character.img} alt="" className="img"/> 
              </div>
              <div className="contenedor-datos">
                <h3>{character.name}</h3>
                <p>{character.description}</p>
              </div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          ))
        }
      </div>
  )
}

export default ShowCharacters