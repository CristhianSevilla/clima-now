<template>
  <div class="alerta">
    <slot></slot>
  </div>
</template>

<style>
.alerta {
  text-align: center;
  color: var(--primary);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.7rem;
  padding: 1.5rem 0rem 0 0rem;
}
</style>
