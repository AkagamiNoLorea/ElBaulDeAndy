import ShowCharacters from "../components/ShowCharacters"
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <header>
        <h1>EL BAÚL DE ANDY</h1>
        <NavLink to ="/create ">
            <button>Añadir juguete</button></NavLink></header>
        <ShowCharacters />
    </div>
  )
}

export default Home;