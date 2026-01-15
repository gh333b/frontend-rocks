import { useEffect, useState } from "react";
import { PokeAPI } from "./api";

type Pokemon = {
  id: number;
  name: string;
  image: string;
};

async function fetchData(){
  const response = await PokeAPI.listPokemons()
  return response.results.map((item, idx) => ({
          id: idx,
          name: item.name,
          image: "https://placehold.co/400x400", 
        }))
} 
const Card = ({ image, title }: { image?: string; title?: string }) => {
  return (
    <div className="bg-white w-40 flex flex-col rounded-md shadow-md overflow-hidden border border-gray-300">
      {image && (
        <img
          src={image || "https://placehold.co/400x400"}
          alt={title || ""}
          className="w-40 h-40 object-cover"
        />
      )}
      {title && <p className="p-2 text-center font-bold">{title}</p>}
    </div>
  );
};

export const Root = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    PokeAPI.listPokemons().then((response) => {
      setPokemons(response.results.map((item, idx) => ({
          id: idx,
          name: item.name,
          image: "https://placehold.co/400x400", 
        }))
      );
    });
  }, []);

  return (
    <div className="p-5 flex flex-wrap gap-4 justify-center">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.id} title={pokemon.name} image={pokemon.image} />
      ))}
    </div>
  );
};