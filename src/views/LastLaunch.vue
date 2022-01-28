<template>
  <div id="app" class="col col-lg-12">
    <LaunchCard
      :missionName="lastLaunch.missionName"
      :patchSmallImageUrl="lastLaunch.patchImageSmall"
      :flightNumber="lastLaunch.flightNumber"
      :missionId="lastLaunch.missionId"
      :launchDate="new Date(lastLaunch.launchDateUtc).toUTCString()"
      :rocketName="rocketInfo.name"
      :launchDetails="lastLaunch.details"
      :rocketImageUrl="rocketInfo.flickrImages[0]"
    ></LaunchCard>
  </div>
</template>

<script>
import httpRequest from "@/services/httpRequest";
import launchResponse from "@/models/launchResponse";
import LaunchCard from "@/components/LaunchCard";

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
  components: {
    LaunchCard,
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