import React, { useEffect, useState } from "react";

export const List = ({listState, setListState}) => {
  
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    setListState(movies);
    return movies;
  };

  const deleteMovie = (id) => {
    let movies = getMovies();
    let newMovies = movies.filter(movie => movie.id !== parseInt(id));
    setListState(newMovies);
    localStorage.setItem("movies", JSON.stringify(newMovies));
  }

  return (
    <>
      {listState != null ? listState.map(movie => {
        return ( 
            <article key={movie.id} className="item">
              <h3 className="title">{movie.title}</h3>
              <p className="description">{movie.description}</p>
              <button className="edit">Editar</button>
              <button className="delete" onClick={()=> deleteMovie(movie.id)}>Eliminar</button>
            </article>
        );
      })
    : <h2>No hay películas</h2>}
    </>
  );
};
