<template>
  <div id="app" class="col col-lg-8">
    <div class="card">
      <h5 class="card-header">
        Próximo lançamento: "{{ lastLaunch.missionName }}"
      </h5>
      <div class="card-body">
        <div class="row">
          <div class="col col-md-6">
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
              <strong>Identificador do foguete: </strong>
              <p>{{ lastLaunch.rocketId }}</p>
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
          <div class="col col-md-6">
            <img
              v-if="lastLaunch.patchImageSmall"
              :src="lastLaunch.patchImageSmall"
              alt="mission patch"
              class="patch-image"
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
  name: "NextLaunch",
  mounted() {
    this.getLastLaunch();
  },
  data() {
    return {
      lastLaunch: {},
    };
  },
  methods: {
    async getLastLaunch() {
      await httpRequest
        .get("/next-launch")
        .then((response) => {
          this.lastLaunch = launchResponse.parse(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>