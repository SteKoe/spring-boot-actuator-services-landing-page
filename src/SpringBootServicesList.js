import {springBootVersions} from "./config";
import logo from "./logo-spring.png"
import "./SbaInstancesList.css";
import {ApplicationCard} from "./components/ApplicationCard";

export function SpringBootServicesList() {
    return (
        <div className={"mt-6"}>
            <h2 className={"title is-3"}>Spring Boot Applications</h2>
            <p className={"grid"}>
                {
                    ApplicationCard({
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
            </p>
        </div>
    );
}
