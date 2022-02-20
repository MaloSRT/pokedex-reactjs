import { useState } from "react";

const FavorisButton = ({id, name}) => {

    const [data, setData] = useState(
        JSON.parse(localStorage.getItem("favoris")) || []
    );

    const handleClick = (ev) => {
        setData(
            (
                prev // récupération de la valeur avant modification
            ) => [
                ...prev, // injection de toutes les valeurs
                { id: id, name: name }, // ajout d'une nouvelle valeur
            ]
        );
    };

    localStorage.setItem("favoris", JSON.stringify(data));

    return <button id="fav-btn" onClick={handleClick}>Ajouter aux favoris</button>;
}

export default FavorisButton;