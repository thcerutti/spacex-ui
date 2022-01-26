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
                <strong>Foguete</strong>
            </td>
        </thead>
        <tbody>
            <tr v-for="launch in launches" :key="launch.flightNumber">
                <td>{{ launch.flightNumber }}</td>
                <td>{{ launch.missionName }}</td>
                <td>{{ new Date(launch.launchDateUtc).toUTCString() }}</td>
                <td>{{ launch.rocketId }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import httpRequest from "@/services/httpRequest";
import launchResponse from "@/models/launchResponse";

export default {
  name: "NextLaunches",
  data() {
    return {
      launches: [],
    };
  },
  mounted() {
    this.getUpcomingLaunches();
  },
  methods: {
    async getUpcomingLaunches() {
      await httpRequest.get("/upcoming-launches")
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