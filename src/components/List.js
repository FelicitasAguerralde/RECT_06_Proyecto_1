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

  return (
    <>
      {listState != null ? listState.map(movie => {
        return ( 
            <article key={movie.id} className="item">
              <h3 className="title">{movie.title}</h3>
              <p className="description">{movie.description}</p>
              <button className="edit">Editar</button>
              <button className="delete">Eliminar</button>
            </article>
        );
      })
    : <h2>No hay películas</h2>}
    </>
  );
};
