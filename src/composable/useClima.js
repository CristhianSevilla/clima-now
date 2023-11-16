import { ref, computed } from "vue";
import axios from "axios";

const clima = ref({});
const cargando = ref(false);
const error = ref("");

export default function useClima() {
  const obtenerClima = async (ciudad) => {
    //Importar el api key
    const key = import.meta.env.VITE_API_KEY;
    cargando.value = true;
    clima.value = {};
    error.value = "";

    try {
      //obtener el clima
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric&lang=es`;
      const { data } = await axios(url);
      clima.value = data;
    } catch {
      error.value = "Lo sentimos, no pudimos encontrar la ciudad :(";
    } finally {
      cargando.value = false;
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
    cargando,
    error,
  };
}
