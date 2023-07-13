import axios from "axios"
import { useEffect } from "react"

const url = 'http://localhost:8080/characters'
const ShowCharacters = () => {

const [characters, setCharacters] = useState([])

useEffect(() => {
  getCharacters()
}, [])
    const getCharacters = async () => {
        const response = await axios.get(url)
        let data = response.data
        setCharacters(data)
    }

  return (
    <div>
      {characters.map(character) => (
      <div className="contenedor" key={characters.id}>
        <img src={characters.image} alt="" />
        <h3></h3>
        <p></p>
      </div>)}
    </div>
  )
}

export default ShowCharacters