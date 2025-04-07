export const SaveInStorage = (key, element) => {
  // Obtener los datos del localStorage una sola vez
  let elementsInStorage = localStorage.getItem(key);

  // Verificar si los datos existen y son válidos
  try {
      elementsInStorage = JSON.parse(elementsInStorage) || []; // Si es null o vacío, inicializar como un array vacío
  } catch (error) {
      console.error("Error al analizar los datos de localStorage:", error);
      elementsInStorage = []; // Si hay un error, inicializar como un array vacío
  }

  // Actualizar el array con el nuevo elemento
  elementsInStorage.push(element);

  // Guardar el array actualizado en el localStorage
  localStorage.setItem(key, JSON.stringify(elementsInStorage));

  return element;
};