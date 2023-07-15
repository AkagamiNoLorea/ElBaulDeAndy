import ShowCharacters from "../components/ShowCharacters"
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <header>
        <img src="src\assets\ball.png" alt="ball"></img>
        <h1>TOY STORY</h1>
        <NavLink to="/create ">
        <button>Create new character</button>
        </NavLink></header>

      <ShowCharacters />
    </div>
  )
}

export default Home;