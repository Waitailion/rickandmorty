import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/Input";

const Location = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name, created } = info;
  let [number, setNumber] = useState(1);
  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map(async (x) => {
          const res = await fetch(x);
          return await res.json();
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3 ">
        <h1 className="text-center mb-3 ">
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>

        <h5 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
        <h6 className="text-center text-danger">Residents: {results.length}</h6>

        <h6 className="text-center">
          Creation: {created === "" ? "Unknow" : created}
        </h6>
      </div>
      <div className="row">
        <InputGroup name="Location" changeID={setNumber} total={126} />
        <div className="col-lg-12 col-12 mt-5">
          <div className="row">
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
