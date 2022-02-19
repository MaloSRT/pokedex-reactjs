import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Pokemon from "../components/atoms/Pokemon/Pokemon";
import { capitalize } from "../utils";
import { getMovesNames, getStatsHtml, getTypesNames } from "../pokemonUtils";

/**
 * Récupère depuis l'API les données du pokémon précisé dans le slug (dans l'URL)
 * puis affiche ces données sur la page.
 * 
 * @returns Informations du pokémon 
 */
const PokemonData = () => {
    const { slug } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [hasError, setError] = useState(false);
    const [data, setData] = useState([]);

    const fetchApi = async () => {
        try {
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon/" + slug
            );
            const data = await response.json();

            setData(data);
            setLoading(false);
        } catch (err) {
            setError(true);
            throw err;
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    if (hasError) return <p>Le pokémon <em>{slug}</em> n'existe pas.</p>;

    return (
        <>
            {
                isLoading ? <p>Chargement...</p> :
                <Pokemon 
                    name={capitalize(data.name)}
                    picture={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + data.id + '.png'}
                    weight={data.weight / 10}
                    height={data.height * 10}
                    moves={getMovesNames(data.moves)} 
                    stats={getStatsHtml(data.stats)}
                    types={getTypesNames(data.types)}
                />
            }
        </>
    );
};

export default PokemonData;