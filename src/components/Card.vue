<template>
  <div class="card mb-2">
      <div class="card-body">
          <h5 class="text-center">{{pais.name}}</h5>
          <p class="text-center">
              <img :src="pais.flag" :alt="`bandera-${pais.name}`" class="img-fluid w-50">
          </p>
          <p class="card-text">
              <span class="badge badge-primary d-block mb-1">Nombre Nativo: {{pais.nativeName}}</span>
              <span class="badge badge-success p-3 d-block mb-1">Poblacion: {{numeroFormato(pais.population)}}</span>
              <span class="badge badge-primary d-block mb-1">Capital: {{pais.capital}}</span>
              <span class="badge badge-primary d-block mb-1">Region: {{pais.region}}</span>
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