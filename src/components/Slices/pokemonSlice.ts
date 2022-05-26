// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Pokemon = {
  name: string;
  url: string;
}
export type Move = {
  move: {
    name:string;
    url: string;
  }
}
type SinglePokemonResponse = {
  name: string;
  id: number
  weight: number;
  height: number
  moves: Move[];
}

type AllPokemonResponse = {
  count: number
  next: string
  previous: null | string
  results: Pokemon[]
}
type Effect = {
  effect: string;
  // eslint-disable-next-line camelcase
  short_effect: string;
}
type MoveResponse = {
  id: number;
  name: string;
  accuracy: number;
  // eslint-disable-next-line camelcase
  effect_entries: Effect [];
  power: number
}
// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<SinglePokemonResponse, string>({
      query: (name: string) => `pokemon/${name}`,
    }),
    getAllPokemon: builder.query<AllPokemonResponse, number>({
      query: (count: number) => `pokemon?offset=${count}&limit=20`,
    }),
    getMoveById: builder.query<MoveResponse, number>({
      query: (id: number) => `move/${id}/`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetAllPokemonQuery, useGetMoveByIdQuery } = pokemonApi;

export default pokemonApi;
