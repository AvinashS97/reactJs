//! V55: How NOT to fetch API data in React
//! V56:
//! V57: Handling Loading and Error States in React.

import { useEffect, useState } from 'react';
import './Pokemon.css';

export const WayToFetchApi = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  //! How not to fetch API
  // fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => res.json())
  //   .then(data => setPokemon(data))
  //   .catch(error => console.log(error));

  //! Best way to fetch API

  const API = 'https://pokeapi.co/api/v2/pokemon/pikachu';

  // const fetchPokemon = () => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPokemon(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError(error);
  //       setLoading(false);
  //     });
  // };

  //? V58: Data Fetching in React: Using Async Await & Try Catch 

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setPokemon(data);
      setLoading(false);
    } catch(error) {
      console.log(error);
      setError(error);
      setLoading(false);
  };
  };


  useEffect(() => {
    fetchPokemon()
  }, []);

  console.log(pokemon);

  if (loading)
    return (
      <div>
        <h1> Loading...</h1>
      </div>
    );

  if (error)
    return (
      <div>
        <h1> Error: {error.message} </h1>
      </div>
    )

  return (
    <section className='container'>
      <header>
        <h1> Lets Catch Pokemon</h1>
      </header>
      <ul className='card-demo'>
        <li className='pokemon-card'>
          <figure>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className='pokemon-image'
            />
          </figure>
          <h1>{pokemon.name}</h1>
          <div className="grid-three-cols">
            <p className="pokemon-info">
            Height: <span> {pokemon.height} </span>
            </p>
            <p className="pokemon-info">
              Weight: <span> {pokemon.weight} </span>
            </p>
            <p className="pokemon-info">
              speed: <span> {pokemon.stats[5].base_stat} </span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
