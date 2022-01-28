<template>
  <div id="app">
    <table class="table table-striped">
      <thead>
        <td>
          <strong>Vôo</strong>
        </td>
        <td>
          <strong>Missão</strong>
        </td>
        <td>
          <strong>Data de Lançamento</strong>
        </td>
        <td>
          <strong>Patch</strong>
        </td>
      </thead>
      <tbody>
        <tr v-for="launch in launches" :key="launch.flightNumber">
          <td>{{ launch.flightNumber }}</td>
          <td>{{ launch.missionName }}</td>
          <td>{{ new Date(launch.launchDateUtc).toUTCString() }}</td>
          <td>
            <a
              :href="launch.patchImageLarge"
              v-if="launch.patchImageLarge"
              target="_blank"
            >
              <img :src="launch.patchImageSmall" alt="Patch" class="patch" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import httpRequest from "@/services/httpRequest";
import launchResponse from "@/models/launchResponse";

export default {
  name: "PastLaunches",
  data() {
    return {
      launches: [],
    };
  },
  mounted() {
    this.getPastLaunches();
  },
  methods: {
    async getPastLaunches() {
      await httpRequest
        .get("/past-launches")
        .then((response) => {
          this.launches = launchResponse.parseList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.patch {
  max-width: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>