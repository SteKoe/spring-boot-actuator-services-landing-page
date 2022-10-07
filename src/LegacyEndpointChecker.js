import {springBootDefinedActuators} from "./config";
import axios from "./utils/axios";

export async function LegacyEndpointChecker(version, url) {
    let promises = springBootDefinedActuators.map(actuator => {
        return axios.get(`${url}/${actuator}`).then(() => actuator);
    });

    const actuators = (await Promise.allSettled(promises)).filter(p => p.status === 'fulfilled').map(p => p.value);

    return {
        version,
        actuators
    }
}

