import React, { useEffect, useState, useCallback } from "react";
import { FormEdit } from "./FormEdit";
import '../css/index.css';

export const List = ({ listState, setListState }) => {
  const [editMovie, setEditMovie] = useState(null);

  // Se define getMovies usando useCallback para memoizarla
  const getMovies = useCallback(() => {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    setListState(movies);
    return movies;
  }, [setListState]);

  useEffect(() => {
    getMovies();
  }, [getMovies]); // Ahora getMovies es una dependencia estable-

  const deleteMovie = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta película?")) {
    let movies = getMovies();
    let newMovies = movies.filter((movie) => movie.id !== parseInt(id));
    setListState(newMovies);
    localStorage.setItem("movies", JSON.stringify(newMovies));
    }
  };

  const updateMovie = (id, title, description) => {
    let movies = [...listState];
    const movieIndex = movies.findIndex(movie => movie.id === id);

    if (movieIndex !== -1) {
      movies[movieIndex] = { ...movies[movieIndex], title, description };
      setListState(movies);
      localStorage.setItem("movies", JSON.stringify(movies));
    }
  };

  const handleEdit = (movie) => {
    setEditMovie(movie);
  };

  const handleCloseModal = () => {
    setEditMovie(null);
  };

  return (
    <>
      {listState != null ? (
        listState.map((movie) => (
          <article key={movie.id} className="item">
            <h3 className="title">{movie.title}</h3>
            <p className="description">{movie.description}</p>
            <button className="edit" onClick={() => handleEdit(movie)}>
              Editar
            </button>
            <button className="delete" onClick={() => deleteMovie(movie.id)}>
              Eliminar
            </button>
          </article>
        ))
      ) : (
        <h2>No hay películas</h2>
      )}

      {editMovie && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FormEdit movie={editMovie} setEdit={setEditMovie} onUpdate={updateMovie} />
          </div>
        </div>
      )}
    </>
  );
};