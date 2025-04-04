
export const SaveInStorage = (key, element) => {

  // Obtener los datos del localStorage
  let elementsInStorage = localStorage.getItem(key);

  // Verificar si los datos existen y son válidos
  try {
    elementsInStorage = JSON.parse(localStorage.getItem(key)) || []; // Si es null, inicializar como un array vacío
  } 
  catch (error) {
    console.error("Error al analizar los datos de localStorage:", error);
    elementsInStorage = []; // Si hay un error, inicializar como un array vacío
  }

  // Actualizar el estado con las películas del almacenamiento local
  if (Array.isArray(elementsInStorage)) {
    elementsInStorage.push(element); // Agregar la nueva película al array
  } else {
    elementsInStorage = [element]; // Si no es un array, inicializar como un nuevo array con la película
  }

  localStorage.setItem(key, JSON.stringify(elementsInStorage)); // Guardar el array actualizado en el localStorage

  return element;
};
