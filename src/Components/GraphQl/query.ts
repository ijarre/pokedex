import { gql } from "@apollo/client";

export const GET_DETAIL_POK = gql`
  query PokemonDetail($id: String) {
    pokemon(id: $id) {
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      image
      evolutions {
        id
      }
      classification
      resistant
      weaknesses
      types
    }
  }
`;

export const GET_POKS = gql`
  query PokemonList($first: Int!) {
    pokemons(first: $first) {
      name
      image
    }
  }
`;
