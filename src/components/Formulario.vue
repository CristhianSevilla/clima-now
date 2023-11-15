<script setup>
import { reactive, ref } from "vue";
import Alerta from "./Alerta.vue";

const emit = defineEmits(["obtener-clima"]);

const ciudad = ref("");

const error = ref("");

const consultarClima = () => {
  if (!ciudad.value) {
    error.value = "Escribe el nombre de la ciudad";
    return;
  }

  error.value = "";

  emit("obtener-clima", ciudad.value);
};
</script>

<template>
  <form class="formulario" @submit.prevent="consultarClima">
    <div class="campo">
      <label for="ciudad">Ciudad</label>
      <input
        type="text"
        id="ciudad"
        placeholder="Ej. Las vegas"
        v-model="ciudad"
      />
    </div>

    <Alerta v-if="error">{{ error }}</Alerta>

    <input type="submit" value="Consultar Clima" />
  </form>
</template>
