import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './createcharacters.css'

const url= "http://localhost:8080/characters"

const CreateCharacters = () => {

const [nombre, setNombre] = useState('')
const[ imagen,setImagen] = useState('')
const [descripcion,setDescripcion] = useState('')

const navigate = useNavigate()

const store = async(e) =>{
    e.preventDefault()
    console.log(e)
    await axios.post(url,{ name: nombre, img: imagen, description: descripcion  })
    navigate("/")
}


  return (
    <>
    <div className="cuadrodetexto">
     <h2>Crear personaje nuevo</h2>
     <form onSubmit={store}>
       <div>
        <label>Nombre</label>
        <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}/> 
        </div>
        <div>
         <label>Dirección URL</label>
         <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)}/>
        </div> 

        <div>
            <label>Descripción</label>
            <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
        </div>
        <button type="submit">Create character</button>

     </form>
    </div>
    </>
   
  )
}

export default CreateCharacters