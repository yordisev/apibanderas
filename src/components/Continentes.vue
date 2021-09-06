<template>
<div class="text-center">
  <h3>Filtrar por Continentes</h3>
  <div class="btn-group mb-3">
      <button class="btn btn-primary" @click="filtro('Americas')">AM</button>
      <button class="btn btn-primary" @click="filtro('Europe')">EU</button>
      <button class="btn btn-primary" @click="filtro('Asia')">AS</button>
      <button class="btn btn-primary" @click="filtro('Oceania')">OC</button>
      <button class="btn btn-primary" @click="filtro('Africa')">AF</button>
      <button class="btn btn-primary" @click="filtro('')">ALL</button>
  </div>
</div>
</template>

<script>
import { useStore } from 'vuex'
export default {
setup(){
    const store = useStore()
    const filtro = (region) =>{
        store.dispatch('filtrarRegion', region)
    }
    return {filtro}
}
}
</script>

<style>

</style>