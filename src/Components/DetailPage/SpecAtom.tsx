import React from "react";
import "./DetailPage.scss";

interface SpecAtomProps {
  title: string;
  value: string | [];
}

const SpecAtom: React.FC<SpecAtomProps> = ({ title, value }) => {
  return (
    <div className="spec">
      <div className="title p-2">{title}</div>
      {typeof value !== "string" ? (
        <div className="value p-2">
          <ul>
            {value?.map((el: string) => {
              return <li>{el}</li>;
            })}
          </ul>
        </div>
      ) : (
        <div className="value p-2">{value}</div>
      )}
    </div>
  );
};

export default SpecAtom;
