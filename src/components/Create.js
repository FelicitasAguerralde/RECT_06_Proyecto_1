import React from "react";
import "../css/index.css"
import { SaveInStorage } from "../helpers/SaveInStorage";

export const Create = ({setListState}) => {
  const title = "Agregar Película";

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
          maxLength={140}
          rows={4}
        ></textarea>
        <button className="add" type="submit">Agregar</button>
      </form>
    </div>
  );
};