import {ApplicationCard} from "./ApplicationCard";

export const ApplicationCards = ({id, versions, title, logo, links, showActuators}) => {
    return versions.sort()
        .reverse()
        .map(version => ApplicationCard({id, links, logo, title, version, showActuators}))
}

