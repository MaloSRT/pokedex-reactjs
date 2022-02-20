import { useState } from "react";

/**
 * Affiche le contenu de la page d'accueil
 * 
 * @returns Page d'accueil
 */
const Home = () => {

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (ev.target[0].value === "") return;
        window.location.href = '/' + ev.target[0].value;
        console.log(ev.target[0].value);
    };

    return (
        <>
            <h2>Rechercher un pokémon</h2>
            <form className="inline" onSubmit={handleSubmit}>
                <input type="text" id="search-field" name="search" placeholder="Recherche..." autoFocus />
                <input type="submit" id="search-btn" value="Recherche..." />
            </form>
            
        </>
    );
    
};
  
export default Home;