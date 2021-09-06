<template>
  <input type="text" 
  placeholder="Ingrese Nombre de Pais"
  class="form-control my-3"
  v-model="nombrepais"
  @keyup="procesarinput"
  >
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
setup(){
    const nombrepais = ref('')
    const store = useStore()
    const procesarinput = () => {
        store.dispatch('buscarpornombre', nombrepais.value)
    }
    return {nombrepais, procesarinput}
}
}
</script>

<style>

</style>