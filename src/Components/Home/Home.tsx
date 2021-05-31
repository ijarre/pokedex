import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import "./Home.scss";
import { GET_POKS } from "../GraphQl/query";
import { Link } from "react-router-dom";

const Home = () => {
  const { data } = useQuery(GET_POKS, { variables: { first: 60 } });

  return (
    <div className="container-home p-4 ">
      {data?.pokemons.map((el: { image: string | undefined; name: string; id: string }, i: number) => {
        return (
          <Link to={`/detail/${el.id}`}>
            <div className="card pokemon-card p-2" key={el.id}>
              <img src={el.image} alt="" />
              <div className="pokemon-name mt-3">
                <p>{el.name}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
