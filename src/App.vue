<template>
  <div id="app" class="container">
    <ul class="nav justify-content-center main-nav">
      <li class="nav-item">
        <router-link to="/" class="btn btn-outline-dark">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/last-launch" class="btn btn-outline-dark">Último lançamento</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/next-launch" class="btn btn-outline-dark">Próximo lançamento</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/next-launches" class="btn btn-outline-dark">Próximos lançamentos</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/past-launches" class="btn btn-outline-dark">Lançamentos Anteriores</router-link>
      </li>
    </ul>
    <router-view />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </div>
</template>

<style>
  .main-nav .btn {
      margin: 10px;
    }
</style>