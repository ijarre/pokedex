import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import "./Home.scss";
import { GET_POKS } from "../GraphQl/query";

const Home = () => {
  const { data } = useQuery(GET_POKS, { variables: { first: 30 } });

  return (
    <div className="container-home p-4 row">
      {data?.pokemons.map((el: { image: string | undefined; name: string; id: string }, i: number) => {
        return (
          <div className="pokemon-card p-2 col-3" key={el.id}>
            <img src={el.image} alt="" />
            <div className="pokemon-name mt-3">
              <p>{el.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
