<script setup>
import { reactive, ref } from "vue";
import Alerta from "./Alerta.vue";

const busqueda = reactive({
  ciudad: "",
  pais: "",
});

const paises = [
  { codigo: "US", nombre: "Estados Unidos" },
  { codigo: "MX", nombre: "México" },
  { codigo: "EC", nombre: "Ecuador" },
  { codigo: "CA", nombre: "Canada" },
  { codigo: "AR", nombre: "Argentina" },
  { codigo: "CO", nombre: "Colombia" },
  { codigo: "CR", nombre: "Costa Rica" },
  { codigo: "ES", nombre: "España" },
];

const error = ref("");

const consultarClima = () => {
  if (Object.values(busqueda).includes("")) {
    error.value = "Todos los campos son obligatorios";
  }

  error.value = "";
};
</script>

<template>
  <form class="formulario" @submit.prevent="consultarClima">
    <div class="campo">
      <label for="ciudad">Ciudad</label>
      <input
        type="text"
        id="ciudad"
        placeholder="Ciudad"
        v-model="busqueda.ciudad"
      />
    </div>
    <div class="campo">
      <label for="pais">País</label>
      <select id="pais" v-model="busqueda.pais">
        <option value="">Seleccione un país</option>
        <option v-for="pais in paises" :value="pais.codigo">
          {{ pais.nombre }}
        </option>
      </select>
    </div>

    <Alerta v-if="error">{{ error }}</Alerta>

    <input type="submit" value="Consultar Clima" />
  </form>
</template>
