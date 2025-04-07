import React from "react";
import { SaveInStorage } from "../helpers/SaveInStorage";

export const Create = ({setListState}) => {
  const title = "Agregar Pelicula";

  const [movies, setMovies] = React.useState([]);

  const getDates = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let description = e.target.description.value;

    if (title.trim() === "" || description.trim() === "") {
      alert("Los campos no pueden estar vacíos");
      return;
    }

    let movie = {
      id: new Date().getTime(),
      title,
      description,
    };
    
    // Guardar la película en el estado local
    setMovies([...movies, movie]); 
    // Guardar la película en el estado del componente padre
    setListState(elements =>{
      return [...elements, movie];
    })

    e.target.title.value = "";
    e.target.description.value = "";

    SaveInStorage("movies", movie);
  };


  return (
    <div className="add">
      <h3 className="title">{title}</h3>

      <form onSubmit={getDates}>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Nombre de la pelicula"
        />
        <textarea
          id="description"
          name="description"
          placeholder="Descripción"
          maxLength={150}
          rows={4}
        ></textarea>
        <button type="submit">Agregar</button>
      </form>

      {/* Mostrar las películas agregadas */}
      {movies.length > 0 && (
        <div className="movie-list">
          <h4>Películas Agregadas:</h4>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <strong>{movie.title}</strong>: {movie.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};