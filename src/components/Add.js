import React, { useEffect } from "react";

export const Add = () => {
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

    setMovies([...movies, movie]); // Agrega la nueva película al array
    // Limpiar los campos del formulario después de agregar la película.
    e.target.title.value = "";
    e.target.description.value = "";

    // Guardar en el almacenamiento local
    localStorage.setItem("movies", JSON.stringify([...movies, movie]));
  };

  const saveInStorage = movie => {
  // Obtener los datos del localStorage
  let moviesInStorage = localStorage.getItem("movies");

  // Verificar si los datos existen y son válidos
  try {
    moviesInStorage = JSON.parse(moviesInStorage) || []; // Si es null, inicializar como un array vacío
  } catch (error) {
    console.error("Error al analizar los datos de localStorage:", error);
    moviesInStorage = []; // Si hay un error, inicializar como un array vacío
  }

  // Actualizar el estado con las películas del almacenamiento local
  if (Array.isArray(moviesInStorage)) {
    console.log("Películas en almacenamiento local:", moviesInStorage);
    setMovies(moviesInStorage);
  } else {
    console.warn("Los datos en localStorage no son un array válido.");
    setMovies([]);
  }

  return movie;
};

  // Llamar a saveInStorage cuando el componente se monte
  useEffect(() => {
    saveInStorage();
  }, []);

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