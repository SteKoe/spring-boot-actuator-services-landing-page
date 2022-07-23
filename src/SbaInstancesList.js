import {springBootAdminVersions} from "./config";
import logoSba from "./logo-sba.png"
import "./SbaInstancesList.css";
import {ApplicationCard} from "./components/ApplicationCard";

export function SbaInstancesList() {
    return (
        <div className={"mt-6"}>
            <h2 className={"title is-3"}>Spring Boot Admin Instances</h2>
            <p className={"grid"}>
                {
                    ApplicationCard({
                        title: 'Spring Boot Admin',
                        logo: logoSba,
                        versions: springBootAdminVersions,
                        links: [
                            {
                                title: 'Open',
                                href: (version) => `/sba/${version}`
                            },
                            {
                                title: 'Docs',
                                href: (version) => `https://codecentric.github.io/spring-boot-admin/${version}`
                            },
                            {
                                title: 'GitHub',
                                href: (version) => `https://github.com/codecentric/spring-boot-admin/releases/tag/${version}`
                            },
                        ]
                    })
                }
            </p>
        </div>
    );
}
