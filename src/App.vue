<script setup>
import Formulario from "./components/Formulario.vue";
</script>

<template>
  <div class="header">
    <img src="../public/favi.svg" alt="Logo" />
    <h1 class="titulo"><Span>ClimaNow </Span> Buscador de clima</h1>
  </div>
  <div class="contenedor buscador-clima">
    <Formulario />
  </div>
</template>
