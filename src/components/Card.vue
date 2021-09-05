<template>
  <div class="card">
      <div class="card-body">
          <h5>{{pais.name}}</h5>
          <p class="card-text">
              <span class="badge badge-primary d-block mb-1">Nombre Nativo: {{pais.nativeName}}</span>
              <span class="badge badge-success p-3 d-block mb-1">Poblacion: {{pais.population}}</span>
              <span class="badge badge-primary d-block mb-1">Capital: {{pais.capital}}</span>
              <span class="badge badge-primary d-block mb-1">Region: {{pais.region}}</span>
          </p>
      </div>
  </div>
</template>

<script>
export default {
props:['pais']
}
</script>

<style>

</style>