import { useState } from "react";

/**
 * Affiche la liste des pokémons favoris enregistrés dans le stockage local.
 * 
 * @returns Affichage de la liste des favoris 
 */
const Favoris = () => {

    const [data, setData] = useState(
        JSON.parse(localStorage.getItem("favoris")) || []
    );

    return <h1>Favoris</h1>;
};
  
export default Favoris;