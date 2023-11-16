<template>
  <div class="alerta">
    <slot></slot>
  </div>
</template>

<style>
.alerta {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #000000a0;
  border-radius: 1rem;
  color: var(--primary);
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.7rem;
  line-height: 150%;
}
</style>
