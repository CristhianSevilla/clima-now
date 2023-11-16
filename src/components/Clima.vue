<script setup>
import useFecha from "../composable/useFecha";
import useClima from "../composable/useClima";

const { obtenerFechaActual, formatearHoraDesdeUnix } = useFecha();
const { formatearTemperatura } = useClima();

defineProps({
  clima: {
    type: Object,
    required: true,
  },
});

const urlImagen = (nombreImagen) => {
  const url = "https://openweathermap.org/img/wn/" + nombreImagen + "@2x.png";
  return url;
};
</script>

<template>
  <div class="sombra">
    <p class="fecha">
      {{ obtenerFechaActual() }}
    </p>

    <div class="tiempo">
      <div>
        <h2 class="ciudad">{{ clima.name }}, {{ clima.sys.country }}</h2>
        <p class="actual">{{ formatearTemperatura(clima.main.temp) }}&deg;C</p>
      </div>
      <div>
        <img :src="urlImagen(clima.weather[0].icon)" alt="Icono'" />
        <p class="condicion">{{ clima.weather[0].description }}</p>
      </div>
    </div>
    <p class="sensacion">
      Sensación térmica de
      {{ formatearTemperatura(clima.main.feels_like) }}&deg;C
    </p>
    <div class="temperaturas">
      <p>
        Min:
        <span>{{ formatearTemperatura(clima.main.temp_min) }}&deg;C</span>
      </p>
      <p>
        Max:
        <span>{{ formatearTemperatura(clima.main.temp_max) }}&deg;C</span>
      </p>
    </div>
    <div class="info">
      <div class="condiciones">
        <p>
          <span>Amanecer:</span>
          {{ formatearHoraDesdeUnix(clima.sys.sunrise) }}
        </p>
        <p>
          <span>Puesta del sol:</span>
          {{ formatearHoraDesdeUnix(clima.sys.sunset) }}
        </p>
      </div>
      <div class="condiciones">
        <p><span>Humedad:</span> {{ clima.main.humidity }}%</p>

        <p><span>Viento:</span> {{ clima.wind.speed }} km/h</p>
      </div>
    </div>
  </div>
</template>
