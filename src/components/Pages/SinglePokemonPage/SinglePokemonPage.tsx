import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../../Slices/pokemonSlice';
import MoveDescription from '../../Move/MoveDescription';
import './singlePokemon.scss';

const baseUrl:string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const SinglePokemonPage = () => {
  const { nameId } = useParams();
  // @ts-ignore
  const { data, isLoading, isSuccess } = useGetPokemonByNameQuery(nameId);
  const [movesList, setMovesList] = useState<{move:{name:string, url:string}}[]>([]);
  const [clicked, setClicked] = useState(false);
  return (
    <div className="singlePokemon__hero">
      <div className="singlePokemon__image">
        <img
          src={`${baseUrl}${data && data.id}.png`}
          width="200px"
          alt=""
        />
      </div>
      <div className="singlePokemon__paragraph">
        <h1 className="singlePokemon__description">
          Pokemon ID:
          {data && data.id}
        </h1>
        <h1 className="singlePokemon__description">
          Pokemon Name:
          {data && data.name.toUpperCase()}
        </h1>
        <h1 className="singlePokemon__description">
          Pokemon height:
          {data && data.height}
        </h1>
        <h1 className="singlePokemon__description">
          Pokemon weight:
          {data && data.weight}
        </h1>
        <h1 className="singlePokemon__description">
          Pokemon total moves:
          {data && data.moves.length}
        </h1>
        {data && (
        <button
          className="singlePokemon__action-btn"
          onClick={() => {
            setMovesList(data.moves && data.moves);
          }}
        >
          Show Moves
        </button>
        )}
        <button
          className="singlePokemon__action-btn"
          onClick={() => {
            setMovesList([]);
          }}
        >
          Hide Moves
        </button>

        <div className="singlePokemon__moves">
          {movesList.map((item, i) => {
            const itemAddressArray = item.move.url.split('/');
            const itemId = Number(itemAddressArray[itemAddressArray.length - 2]);
            return (
              <div key={Math.random()}>
                <button
                  className="move__btn"
                  onClick={() => { setClicked(!clicked); }}
                >
                  {item.move.name}
                </button>
                {clicked && <MoveDescription id={itemId} />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SinglePokemonPage;
