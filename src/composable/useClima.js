import { ref, computed } from "vue";
import axios from "axios";

const clima = ref({});

export default function useClima() {
  const obtenerClima = async (ciudad) => {
    console.log(ciudad);
    //Importar el api key
    const key = import.meta.env.VITE_API_KEY;

    try {
      //obtener el clima

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric`;
      const { data } = await axios(url);
      clima.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarClima = computed(() => {
    return Object.values(clima.value).length > 0;
  });

  const formatearTemperatura = (temperatura) => {
    return Math.round(temperatura);
  };

  return {
    obtenerClima,
    clima,
    mostrarClima,
    formatearTemperatura,
  };
}
