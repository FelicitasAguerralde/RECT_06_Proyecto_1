import React from "react";
import "../css/index.css"
export const FormEdit = ({ movie, setEdit, onUpdate }) => {
  // Recibimos movie, setEdit y onUpdate como props

  const title_component = "Editar Película";

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedTitle = e.target.title.value;
    const updatedDescription = e.target.description.value;

    // Llama a la función onUpdate que viene del componente List
    onUpdate(movie.id, updatedTitle, updatedDescription);

    // Después de actualizar, cierra el formulario de edición
    setEdit(null);
  };

  return (
    <div className="edit-movie">
      <h3 className="title">{title_component}</h3>
      <form className="edit-form" onSubmit={handleUpdate}>
        <input type="text" name="title" defaultValue={movie.title} />
        <textarea
          type="text"
          name="description"
          defaultValue={movie.description}
        />
        <button className="save" type="submit">Guardar Cambios</button> {/* Cambiamos el texto del botón */}
      </form>
    </div>
  );
};