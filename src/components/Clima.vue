<script setup>
import useFecha from "../composable/useFecha";
import useClima from "../composable/useClima";

const { fechaFormateada, horaFormateada, formatearHora } = useFecha();
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

const metar = {
  200: "Tormenta con lluvia ligera",
  201: "Tormenta con lluvia",
  202: "Tormenta con fuertes lluvias",
  210: "Tormenta ligera",
  211: "Tormenta",
  212: "Fuerte tormenta",
  221: "Tormenta irregular",
  230: "Tormenta con llovizna ligera",
  231: "Tormenta con llovizna",
  232: "Tormenta con llovizna intensa",

  300: "Llovizna de intensidad ligera",
  301: "Llovizna",
  302: "Llovizna intensa",
  310: "Llovizna de intensidad ligera",
  311: "Llovizna",
  312: "Llovizna de gran intensidad",
  313: "Lluvia y llovizna",
  314: "Fuertes lluvias y lloviznas",
  321: "Baño de llovizna",

  500: "Lluvia ligera",
  501: "Lluvia moderada",
  502: "Lluvia de gran intensidad",
  503: "Lluvias muy intensas",
  504: "Lluvia extrema",
  511: "Lluvia helada",
  520: "Lluvia de intensidad de luz",
  521: "Aguacero",
  522: "Lluvia intensa",
  531: "Lluvia irregular",

  600: "Nieve ligera",
  601: "Nieve",
  602: "Fuertes nevadas",
  611: "Aguanieve",
  612: "Aguanieve ligero",
  613: "Baño de aguanieve",
  615: "Lluvia ligera y nieve",
  616: "Lluvia y nieve",
  620: "Lluvia ligera nieve",
  621: "Baño de nieve",
  622: "Fuertes lluvias de nieve",

  701: "Neblina",
  711: "Smoke",
  721: "Bruma",
  731: "Remolinos de arena/polvo",
  741: "Niebla",
  751: "Arena",
  761: "Polvo",
  762: "Ceniza volcánica",
  771: "Chubascos",
  781: "Tornado",

  800: "Cielo despejado",

  801: "Nubes escasas",
  802: "Nubes dispersas",
  803: "Nubosidad abundante",
  804: "Nublado",
};
</script>

<template>
  <div class="sombra">
    <p class="fecha">{{ fechaFormateada + ", " + horaFormateada }}</p>

    <div class="tiempo">
      <div>
        <h2 class="ciudad">{{ clima.name }}, {{ clima.sys.country }}</h2>
        <p class="actual">{{ formatearTemperatura(clima.main.temp) }}&deg;C</p>
        <p>
          Sensación térmica de
          {{ formatearTemperatura(clima.main.feels_like) }}&deg;C
        </p>
      </div>
      <div>
        <img :src="urlImagen(clima.weather[0].icon)" alt="Icono'" />
        <p class="condicion">{{ metar[clima.weather[0].id] }}</p>
      </div>
    </div>
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
        <p><span>Amanecer:</span> {{ formatearHora(clima.sys.sunrise) }} h</p>
        <p><span>Humedad:</span> {{ clima.main.humidity }}%</p>
      </div>
      <div class="condiciones">
        <p>
          <span>Puesta del sol:</span> {{ formatearHora(clima.sys.sunset) }} h
        </p>
        <p><span>Viento:</span> {{ clima.wind.speed }} km/h</p>
      </div>
    </div>
  </div>
</template>
