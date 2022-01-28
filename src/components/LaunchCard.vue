<template>
  <div id="app">
    <div class="card">
      <h5 class="card-header">
          <img
          v-if="patchSmallImageUrl"
          :src="patchSmallImageUrl"
          alt="mission patch"
          class="patch-image"
        />
          {{ missionName }} 
      </h5>
      <div class="card-body">
        <div class="row">
          <div class="col col-md-7">
            <div>
              <strong>Número do vôo: </strong>
              <p>{{ flightNumber }}</p>
            </div>
            <div v-if="missionId">
              <strong>Identificador da missão: </strong>
              <p>{{ missionId }}</p>
            </div>
            <div>
              <strong>Data de lançamento: </strong>
              <p>{{ launchDate }}</p>
            </div>
            <div>
              <strong>Foguete: </strong>
              <p>{{ rocketName }}</p>
            </div>
            <div v-if="launchDetails">
              <strong class="card-title">Detalhes da missão:</strong>
              <p class="card-text">
                {{ launchDetails }}
              </p>
            </div>
          </div>
          <div v-if="rocketImageUrl" class="col col-md-5">
            <img
              :src="rocketImageUrl"
              alt="imagem do foguete"
              class="rocket-image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LaunchCard",
  props: {
    patchSmallImageUrl: String,
    missionName: String,
    flightNumber: Number,
    missionId: String,
    launchDate: String,
    rocketName: String,
    launchDetails: String,
    rocketImageUrl: String,
  },
  methods: {},
};
</script>

<style>
.patch-image {
  max-width: 50px;
}
.rocket-image {
  max-width: 500px;
}
</style>