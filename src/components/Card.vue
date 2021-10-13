<template>
  <div class="card mb-2">
      <div class="card-body">
          <h5 class="text-center">{{pais.name.common}}</h5>
          <p class="text-center">
              <img :src="pais.flags.svg" :alt="`bandera-${pais.name.common}`" class="img-fluid w-50">
          </p>
          <p class="card-text">
              <span class="badge badge-primary d-block mb-1">Nombre Nativo: {{pais.name.official}}</span>
              <span class="badge badge-success p-3 d-block mb-1">Poblacion: {{numeroFormato(pais.population)}}</span>
              <span class="badge badge-primary d-block mb-1">Capital: {{pais.capital}}</span>
              <span class="badge badge-primary d-block mb-1">Region: {{pais.region}}</span>
              <span class="badge badge-primary d-block mb-1">Lenguaje: {{pais.languages}}</span>
          </p>
      </div>
  </div>
</template>

<script>
export default {
props:['pais'],
setup(){
    const numeroFormato = (numero) =>{
        return new Intl.NumberFormat("de-DE").format(numero)
    }
    return {numeroFormato}
}
}
</script>

<style>

</style>