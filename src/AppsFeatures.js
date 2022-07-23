import {useEffect, useState} from "react";
import {springBootDefinedActuators, springBootVersions} from "./config";
import {LegacyEndpointChecker} from "./LegacyEndpointChecker";
import {ActuatorEndpointDiscoverer} from "./ActuatorEndpointDiscoverer";

export function AppFeatures() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetch() {
            setServices([]);
            const loadedServices = [];

            for (const version of springBootVersions) {
                try {
                    if (+version < 2) {
                        let service = await LegacyEndpointChecker(version, `/app/${version}`);
                        loadedServices.push(service)
                    } else {
                        let service = await ActuatorEndpointDiscoverer(version, `/app/${version}/actuator`);
                        loadedServices.push(service);
                    }
                } catch (e) {
                    console.info(`No application found for version ${version}`, e);
                }
            }

            setServices([...loadedServices]);
            setLoading(false);
        }

        fetch();
    }, [])

    return loading ? (<span>Loading data...</span>) : (
        <>
            <table className="table is-striped is-narrow">
                <thead>
                <tr>
                    <th rowSpan={2} className="is-vertical-bottom">Actuator</th>
                    <th colSpan={services.length} className="has-text-centered has-no-borders">Spring Boot
                        Version
                    </th>
                </tr>
                <tr>
                    {services.map(service => (
                        <th key={`${service.version}-header`} align="center">
                            <a href={`/app/${service.version}`} target="_blank">
                                {service.version}
                            </a>
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {[...springBootDefinedActuators].sort().map((actuator, row) => (
                    <tr key={`${actuator}-${row}`}>
                        <td>{actuator}</td>
                        {services.map(service => (
                            <th key={service.version + "-" + actuator} align="center">
                                {service.actuators.includes(actuator) ?
                                    <i className="far fa-check-circle"/> :
                                    <i className="far fa-times-circle"/>}
                            </th>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}