import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Input from "../components/Filter/category/Input";

const Episodes = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, name, episode } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map(async (x) => {
          const res = await fetch(x);
          return await res.json();
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="text-center text-primary mb-2">
          {name === "" ? "Unknown" : name}
        </h1>
        <h5 className="text-center">
          Air Date: {air_date === "" ? "Unknown" : air_date}
        </h5>
        <h5 className="text-center mb-2">
          Code: {episode === "" ? "Unknown" : episode}
        </h5>
      </div>
      <div className="row ">
        <Input name="Episode" changeID={setID} total={51} />
        <div className="col-lg-12 col-12 mt-5">
          <div className="row">
            <Card page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
