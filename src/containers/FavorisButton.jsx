import { useState } from "react";

/**
 * Affichage du bouton d'ajout ou de suppression du pokémon de la liste de favoris
 * 
 * @param {Object} idName Identifiant et nom du pokémon
 * @returns 
 */
const FavorisButton = ({id, name}) => {

    let favIndex;
    let isAdded = false;
    
    const [data, setData] = useState(
        JSON.parse(localStorage.getItem("favoris")) || []
    );

    let nbFavs = data.length;
    for (let i = 0; i < nbFavs; i++) {
        if (data[i].id === id) {
            favIndex = i;
            isAdded = true;
        }
    }

    // Ajout aux favoris
    const handleAdd = () => {
        setData(
            (prev) => [
                ...prev, { id: id, name: name },
            ]
        );
    };

    // Suppression des favoris
    const handleRemove = () => {
        setData((prev) => {
            prev.splice(favIndex, 1);
            return [...prev];
        });
    };

    localStorage.setItem("favoris", JSON.stringify(data));

    return isAdded ? 
        <button id="fav-btn" onClick={handleRemove}>Supprimer des favoris</button> :
        <button id="fav-btn" onClick={handleAdd}>Ajouter aux favoris</button>;
}

export default FavorisButton;