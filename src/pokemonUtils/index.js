export const getMovesNames = (moves) => {
    let movesNames = [];
    let nbMoves = moves.length;
    for (let i = 0; i < 3 && i < nbMoves; i++) {
        movesNames.push(moves[i].move.name);
    }
    return movesNames;
}