<template>
  <div id="app" class="col col-lg-12">
    <div class="card">
      <h5 class="card-header">
        <img
          v-if="lastLaunch.patchImageSmall"
          :src="lastLaunch.patchImageSmall"
          alt="mission patch"
          class="patch-image"
        />
        Último lançamento: "{{ lastLaunch.missionName }}"
      </h5>
      <div class="card-body">
        <div class="row">
          <div class="col col-md-7">
            <div>
              <strong>Número do vôo: </strong>
              <p>{{ lastLaunch.flightNumber }}</p>
            </div>
            <div v-if="lastLaunch.missionId">
              <strong>Identificador da missão: </strong>
              <p>{{ lastLaunch.missionId }}</p>
            </div>
            <div>
              <strong>Data de lançamento: </strong>
              <p>{{ new Date(lastLaunch.launchDateUtc).toUTCString() }}</p>
            </div>
            <div>
              <strong>Foguete: </strong>
              <p>{{ rocketInfo.name }}</p>
            </div>
            <div v-if="lastLaunch.details">
              <strong class="card-title">Detalhes da missão:</strong>
              <p class="card-text">
                {{ lastLaunch.details }}
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div v-if="rocketInfo.flickrImages" class="col col-md-5">
            <img
              :src="rocketInfo.flickrImages[0]"
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
import httpRequest from "@/services/httpRequest";
import launchResponse from "@/models/launchResponse";

export default {
  name: "LastLaunch",
  mounted() {
    this.getLastLaunch();
  },
  data() {
    return {
      lastLaunch: {},
      rocketInfo: {},
    };
  },
  methods: {
    async getLastLaunch() {
      await httpRequest
        .get("/latest-launch")
        .then(async (response) => {
          this.lastLaunch = launchResponse.parse(response.data);
          let rocketInfoResponse = await httpRequest.get(
            `/rocket/${this.lastLaunch.rocketId}`
          );
          this.rocketInfo = rocketInfoResponse.data;
          console.log(this.rocketInfo);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
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