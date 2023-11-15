export default function useClima() {
  const obtenerClima = ({ ciudad, pais }) => {
    //Importar el api key
    const key = import.meta.env.VITE_API_KEY;

    const urlCiudad = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric`;

    const urlCiudadPais = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`;

    console.log(urlCiudad);
    console.log(urlCiudadPais);

    //obtener el clima
  };

  return {
    obtenerClima,
  };
}
