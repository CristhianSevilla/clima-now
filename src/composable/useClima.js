import axios from "axios";

export default function useClima() {
  const obtenerClima = async (ciudad) => {
    console.log(ciudad);
    //Importar el api key
    const key = import.meta.env.VITE_API_KEY;

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric`;
      const { data } = await axios(url);
      console.log(url);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    //obtener el clima
  };

  return {
    obtenerClima,
  };
}
