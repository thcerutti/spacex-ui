import axios from "axios";
import config from "@/environment/apiconfig";

export default {
    get(url) {
        return axios.get(`${config.launchesBaseURL}${url}`);
    }
}