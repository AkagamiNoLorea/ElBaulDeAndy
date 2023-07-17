import './showCharacters.css'

export default function CardCharacter (props) {
    
    const character = props.character;
    
    return (
        <>
        <div className="card">
            <img src ={character.img} alt="" className="img"/> 
            <div className="contenedor-datos">
                <h3>{character.name}</h3>
                <p>{character.description}</p>
            </div>
            <div className="buttons">
                <button onClick={() => props.editCharacter(character) }> Editar </button>
                <button onClick={() => props.deleteCharacter(character) }> Eliminar </button>
                </div>
        </div>
        </>
    )
}