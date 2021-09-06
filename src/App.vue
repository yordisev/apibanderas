<template>
<div class="container">
  <h1 class="text-center">Paises Api</h1>
  <Continentes/>
  <Buscador/>
  <CardList/>
</div>
</template>

<script>
import Continentes from '../src/components/Continentes.vue'
import Buscador from '../src/components/Buscador.vue'
import CardList from '../src/components/CardList.vue'
export default {
  components:{
    CardList,
    Continentes,
    Buscador
  }
}
</script>
