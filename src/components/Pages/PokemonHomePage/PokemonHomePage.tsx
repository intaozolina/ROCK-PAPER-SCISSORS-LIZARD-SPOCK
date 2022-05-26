import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllPokemonQuery } from '../../Slices/pokemonSlice';
import './pokemonPage.scss';

const baseUrl:string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const PokemonHomePage = () => {
  const [visiblePokemon, setVisiblePokemon] = useState(0);
  const { data, isLoading, isSuccess } = useGetAllPokemonQuery(visiblePokemon);
  const navigate = useNavigate();
  console.log(data);

  return (
    <div>
      <div className="pokemon__hero">
        {data && data.results.map(({ name, url }) => {
          const arr = url.split('/');
          const id = arr[arr.length - 2];
          return (
            <div
              className="pokemon__card"
              key={Math.random()}
            >
              <img
                src={`${baseUrl}${id}.png`}
                alt=""
              />
              <button
                className="pokemon__btn"
                onClick={() => { navigate(`/pokemon/${name}`); }}
              >
                Name:
                {' '}
                {name.toUpperCase()}
              </button>
            </div>
          );
        })}
      </div>
      <div className="switch_box">
        {visiblePokemon !== 0 && (
        <button
          className="switch_btn"
          onClick={() => { setVisiblePokemon(visiblePokemon - 20); }}
        >
          Previous
        </button>
        )}
        <button
          className="switch_btn"
          onClick={() => { setVisiblePokemon(visiblePokemon + 20); }}
        >
          Next
        </button>

      </div>
    </div>
  );
};

export default PokemonHomePage;
