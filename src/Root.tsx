import { useEffect, useState } from "react";
import { PokeAPI } from "./api";

type Pokemon = {
  id: number;
  name: string;
  image: string;
};

async function fetchData() {
  const response = await PokeAPI.listPokemons();
  return response.results.map((item, idx) => ({
    id: idx,
    name: item.name,
    image: "", 
  }));
}

async function fetchCardData(name: string) {
  const response = await PokeAPI.getPokemonByName(name);

  return {
    image: response.sprites.other?.["official-artwork"].front_default ?? "",
    types: response.types.map(item => item.type.name)
  }
}

const Card = (props: { title: string; image: string }) => {
  const [image, setImage] = useState('');
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    fetchCardData(props.title).then((data) => {
      setImage(data.image);
      setTypes(data.types);
    });
  }, [props.title]);

  return (
    <div className="bg-white w-40 h-50 flex flex-col rounded-md px-4 pt-4 border border-gray-400">
      <p className="text-center font-bold mb-2">{props.title}</p>
      {image && (
        <img
          src={image}
          alt={props.title}
          className="w-full h-32 object-cover"
        />
      )}
      
      <p className="text-center text-sm">{types.join(", ")}</p>
    </div>
  );
};

export const Root = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchData().then((data) => setPokemons(data)); 
  }, []);

  return (
    <div className="p-5 flex flex-wrap gap-4 justify-center">
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          title={pokemon.name}
          image={pokemon.image} 
        />
      ))}
    </div>
  );
};