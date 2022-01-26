export default {
    parse(response) {
        return {
            flightNumber: response.flight_number,
            missionName: response.name,
            missionId: response.mission_id,
            launchDateUtc: response.date_utc,
            rocketId: response.rocket,
            details: response.details,
            patchImageSmall: response.links.patch.small,
            patchImageLarge: response.links.patch.large
        }
    },
    parseList(response) {
        let launches = [];
        response.forEach((element) => {
            launches.push({
                flightNumber: element.flight_number,
                missionName: element.name,
                missionId: element.mission_id,
                launchDateUtc: element.date_utc,
                rocketId: element.rocket,
                details: element.details,
                patchImageSmall: element.links.patch.small,
                patchImageLarge: element.links.patch.large
            });
        });
        return launches;
    }
}