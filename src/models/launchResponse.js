function createElement(info) {
    return {
        flightNumber: info.flightNumber,
        missionName: info.missionName,
        missionId: info.missionId,
        launchDateUtc: info.fireDateUtc,
        rocketId: info.rocketId,
        details: info.missionDetails,
        patchImageSmall: info.patchLinkSmall,
        patchImageLarge: info.patchLinkLarge
    }
}

export default {

    parse(response) {
        return createElement(response);
    },
    parseList(response) {
        let launches = [];
        response.forEach((element) => {
            launches.push(createElement(element));
        });
        return launches;
    },
}