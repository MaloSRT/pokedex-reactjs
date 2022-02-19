import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Pokemon from "../components/atoms/Pokemon/Pokemon";

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

    let name = data.name;
    let picture = '';
    let weight = data.weight / 10;
    let height = data.height * 10;

    return (
        <>
            {isLoading ? <p>Chargement...</p> : <Pokemon name={name} picture={picture} weight={weight} height={height} moves="{}" stats="{}" types="{}" />}
        </>
    );
};

export default PokemonData;