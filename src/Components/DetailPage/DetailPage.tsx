import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Card } from "reactstrap";
import "./DetailPage.scss";
import SpecAtom from "./SpecAtom";
import { GET_DETAIL_POK } from "../GraphQl/query";

const DetailPage: React.FC = () => {
  const { id } = useParams<Record<string, string | undefined>>();

  const { data } = useQuery(GET_DETAIL_POK, { variables: { id: id } });

  return (
    <Card className="container-detail p-2">
      <div className="image-box ">
        <h1>{data?.pokemon.name}</h1>
        <img src={data?.pokemon.image} alt="" />
      </div>

      <div className="spec-box">
        <SpecAtom title="weight range" value={`${data?.pokemon.weight.minimum} - ${data?.pokemon.weight.maximum} `} />
        <SpecAtom title="height range" value={`${data?.pokemon.height.minimum} - ${data?.pokemon.height.maximum} `} />
        <SpecAtom title="Classification" value={data?.pokemon.classification} />
        <SpecAtom title="Types" value={data?.pokemon.types} />
        <SpecAtom title="Resistant" value={data?.pokemon.resistant} />

        <SpecAtom title="Weakness" value={data?.pokemon.weaknesses} />
      </div>

      <div className="evo-box">
        <div className="evo ">
          <SpecAtom
            title="Evolution"
            value={
              data?.pokemon.evolutions !== null
                ? data?.pokemon.evolutions.map((el: any, i: number) => {
                    return (
                      <li>
                        <Link to={`/detail/${el.id}`}>{i + 1}</Link>
                      </li>
                    );
                  })
                : ""
            }
          />
        </div>
      </div>
    </Card>
  );
};

export default DetailPage;
