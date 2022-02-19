/**
 * Retourne l'affichage d'un pokémon
 * 
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
    { name, picture, weight, height, moves, stats, types }
) => (
    <div className="pokemon_details">
        <div className="description">
            <h2>{name}</h2>
            <p>Poids : {weight} kg</p>
            <p>Taille : {height} cm</p>
        </div>
        <img src={picture} alt={name} />
    </div>
);

export default Pokemon;