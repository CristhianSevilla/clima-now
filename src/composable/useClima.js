import axios from "axios";

export default function useClima() {
  const obtenerClima = (ciudad) => {
    console.log(ciudad);
    //Importar el api key
    const key = import.meta.env.VITE_API_KEY;

    const urlCiudad = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric`;

    console.log(urlCiudad);

    //obtener el clima
  };

  return {
    obtenerClima,
  };
}
