<template>
  <div id="app" class="col col-lg-12">
    <LaunchCard
      :missionName="nextLaunch.missionName"
      :patchSmallImageUrl="nextLaunch.patchImageSmall"
      :flightNumber="nextLaunch.flightNumber"
      :missionId="nextLaunch.missionId"
      :launchDate="new Date(nextLaunch.launchDateUtc).toUTCString()"
      :rocketName="rocketInfo.name"
      :launchDetails="nextLaunch.details"
      :rocketImageUrl="rocketInfo.flickrImages[0]"
    ></LaunchCard>    
  </div>
</template>

<script>
import httpRequest from "@/services/httpRequest";
import launchResponse from "@/models/launchResponse";
import LaunchCard from "@/components/LaunchCard";

export default {
  name: "NextLaunch",
  mounted() {
    this.getnextLaunch();
  },
  components: {
    LaunchCard
  },
  data() {
    return {
      nextLaunch: {},
      rocketInfo: {},
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

<style>
.patch-image {
  max-width: 50px;
}
.rocket-image {
  max-width: 500px;
}
</style>