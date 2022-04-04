import axios from "axios";

export async function ActuatorEndpointDiscoverer(version, url) {
    const response = await axios.get(url);
    let links = response.data?._links;
    let actuators = Object.keys(links)
        .filter(a => a !== "self")
        .filter(a => links[a].href.indexOf("{") === -1);

    return {
        version,
        actuators
    };
}
