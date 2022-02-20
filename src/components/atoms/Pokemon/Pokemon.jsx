import FavorisButton from "../../../containers/FavorisButton";

import "./Pokemon.css";

/**
 * Retourne l'affichage d'un pokémon
 * 
 * @param {number} id Identifiant du pokémon
 * @param {string} name Nom du pokémon
 * @param {string} picture URL de l'image du pokémon
 * @param {number} weight Poids en kg
 * @param {number} height Taille en cm
 * @param {Array} moves Liste des capacités
 * @param {Array} stats Liste des statistiques
 * @param {Array} types Liste des types
 * @returns Affichage des informations du pokémon
 */
const Pokemon = (
    { id, name, picture, weight, height, moves, stats, types }
) => (
    <div className="pokemon-details">
        <div className="description">
            <h2>{name}</h2>
            <p>Poids : {weight} kg</p>
            <p>Taille : {height} cm</p>
            <p>Type : {types.join(', ')}</p>
            <p>3 premières capacités : {moves.join(', ')}</p>
            <p className="stats-label">Stats : </p>
            {stats}
        </div>
        <div className="illustration">
            <img src={picture} alt={name} className="picture" />
            <FavorisButton id={id} name={name} />
            <p>id : {id}</p>
        </div>
    </div>
);

export default Pokemon;