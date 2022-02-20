import { useState } from "react";

/**
 * Affiche la liste des pokémons favoris enregistrés dans le stockage local.
 * 
 * @returns Affichage de la liste des favoris 
 */
const Favoris = () => {

    const [data] = useState(
        JSON.parse(localStorage.getItem("favoris")) || []
    );

    return (
        <>
            <h1>Favoris</h1>
            <div className="favoris-list">
                {data.map((pokemon, index) => (
                    <div className="favoris-item">
                        <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.id + '.png'} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                    </div>
                ))}
            </div>
        </>
        
    );
};
  
export default Favoris;