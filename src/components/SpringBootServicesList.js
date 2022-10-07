import {springBootVersions} from "../config";
import logo from "../logo-spring.png"
import "./SbaInstancesList.css";
import {ApplicationCards} from "./ApplicationCards";

export function SpringBootServicesList() {
    return (
        <div className={"mt-6"}>
            <h2 className={"title is-3"}>Spring Boot Applications</h2>
            <div className={"grid"}>
                {
                    ApplicationCards({
                        id: 'app',
                        title: 'Spring Boot Services',
                        logo: logo,
                        versions: springBootVersions,
                        links: [
                            {
                                title: 'Config',
                                href: (version) => `/app/${version}`
                            },
                            {
                                title: 'Actuators',
                                href: (version) => `/app/${version}/actuator`
                            }
                        ]
                    })
                }
            </div>
        </div>
    );
}
