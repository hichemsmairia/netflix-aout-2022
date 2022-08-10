import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../App.css";
export default function MovieList() {
  const api_key = "ec0d0ac1a02925c493e247d245274ced";

  const [data, setData] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get("http://api.themoviedb.org/3/movie/upcoming", {
        params: { api_key },
      })
      .then((response) => {
        setData(response.data.results);
        //c'est un tableau qui contient les prochaines films
      });
  }, []);
  // nom_du_tableau.map()
  const searchMovie = () => {
    axios
      .get(
        `http://api.themoviedb.org/3/search/movie?api_key=ec0d0ac1a02925c493e247d245274ced&query=${searchText}`
      )
      .then((result) => {
        setData(result.data.results);
      });
  };
  return (
    <div className="App">
      <div className="MovieSearch">
        <input
          type="text"
          placeholder="saisir le nom du film"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => searchMovie()}>rechercher!</button>
      </div>

      <div className="grid">
        {data.map((element) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w300/${element.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{element.original_title}</Card.Title>
                <Card.Text>{element.description}</Card.Text>
                <Button variant="primary">voir le film</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// /search/movie?api_key=",api_key, "&query=", query)

// ec0d0ac1a02925c493e247d245274ced
