<template>
  <div id="app" class="col col-lg-12">
    <div class="card">
      <h5 class="card-header">
        Próximo lançamento: "{{ nextLaunch.missionName }}"
      </h5>
      <div class="card-body">
        <div class="row">
          <div class="col col-md-6">
            <div>
              <strong>Número do vôo: </strong>
              <p>{{ nextLaunch.flightNumber }}</p>
            </div>
            <div v-if="nextLaunch.missionId">
              <strong>Identificador da missão: </strong>
              <p>{{ nextLaunch.missionId }}</p>
            </div>
            <div>
              <strong>Data de lançamento: </strong>
              <p>{{ new Date(nextLaunch.launchDateUtc).toUTCString() }}</p>
            </div>
            <div>
              <strong>Identificador do foguete: </strong>
              <p>{{ rocketInfo.name }}</p>
            </div>
            <div v-if="nextLaunch.details">
              <strong class="card-title">Detalhes da missão:</strong>
              <p class="card-text">
                {{ nextLaunch.details }}
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
          <div class="col col-md-6">
            <img
              v-if="nextLaunch.patchImageSmall"
              :src="nextLaunch.patchImageSmall"
              alt="mission patch"
              class="patch-image"
            />
          </div>
          <div v-if="rocketInfo.flickrImages">
            <h3>Imagem do foguete</h3>
            <img :src="rocketInfo.flickrImages[0]" alt="">
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
  name: "NextLaunch",
  mounted() {
    this.getnextLaunch();
  },
  data() {
    return {
      nextLaunch: {},
      rocketInfo: {}
    };
  },
  methods: {
    async getnextLaunch() {
      await httpRequest
        .get("/next-launch")
        .then(async (response) => {
          this.nextLaunch = launchResponse.parse(response.data);
          let rocketInfoResponse = await httpRequest.get(
            `/rocket/${this.nextLaunch.rocketId}`
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