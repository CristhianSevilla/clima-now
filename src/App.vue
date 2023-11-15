<script setup>
import Formulario from "./components/Formulario.vue";
import useClima from "./composable/useClima";

const { obtenerClima } = useClima();
</script>

<template>
  <div class="header">
    <img src="../public/favi.svg" alt="Logo" />
    <h1 class="titulo"><span>ClimaNow </span> Buscador de clima</h1>
  </div>
  <div class="contenedor buscador-clima">
    <Formulario @obtener-clima="obtenerClima" />
  </div>
</template>
