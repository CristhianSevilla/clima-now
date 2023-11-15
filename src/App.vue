<script setup>
import Formulario from "./components/Formulario.vue";
import Clima from "./components/Clima.vue";
import Spinner from "./components/Spinner.vue";
import useClima from "./composable/useClima";

const { obtenerClima, clima, mostrarClima, cargando } = useClima();
</script>

<template>
  <div class="header">
    <img src="../public/favi.svg" alt="Logo" />
    <h1 class="titulo"><span>ClimaNow </span> Buscador de clima</h1>
  </div>
  <div class="contenedor buscador-clima">
    <Formulario @obtener-clima="obtenerClima" />
    <Spinner v-if="cargando" />
    <Clima v-if="mostrarClima" :clima="clima" />
  </div>
</template>
