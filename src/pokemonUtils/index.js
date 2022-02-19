/**
 * Retourne le nom des 3 premières attaques du pokémon.
 * Si le Pokémon a moins de 3 attaques, toutes ses attaques seront retournées.
 * 
 * @param {Array} moves Liste des attaque provenant de l'API 
 * @returns Noms des 3 premières attaques sous forme de tableau
 */
export const getMovesNames = (moves) => {
    let movesNames = [];
    let nbMoves = moves.length;
    for (let i = 0; i < 3 && i < nbMoves; i++) {
        movesNames.push(moves[i].move.name);
    }
    return movesNames;
}

/**
 * Retourne le nom des types du pokémon.
 * 
 * @param {Array} moves Liste des types provenant de l'API 
 * @returns Noms des types forme de tableau
 */
export const getTypesNames = (types) => {
    let typesNames = [];
    let nbTypes = types.length;
    for (let i = 0; i < nbTypes; i++) {
        typesNames.push(types[i].type.name);
    }
    return typesNames;
}

/**
 * Retourne la liste des stats du pokémon au format HTML.
 * 
 * @param {Array} stats Liste des stats provenant de l'API 
 * @returns Liste des stats
 */
export const getStatsHtml = (stats) => {
    let statsUl = <></>;
    let nbStats = stats.length;
    for (let i = 0; i < nbStats; i++) {
        //statsUl += stats[i].stat.name + ' : ' + stats[i].base_stat;
        statsUl = <>{statsUl}<li>{stats[i].stat.name + ' : ' + stats[i].base_stat}</li></>;
    }
    return <ul>{statsUl}</ul>;
}