import {useEffect, useState} from "react";
import classNames from "classnames";

import "./ApplicationCard.css";
import axios from "../utils/axios";

axios.defaults.timeout = 1_500;

export function ApplicationCard({id, version, title, logo, links}) {
    const [isOffline, setIsOffline] = useState(false)

    let firstLink = links[0].href(version);
    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.head(firstLink);
                setIsOffline(false);
            } catch (e) {
                setIsOffline(true)
            }
        }

        fetch();
    }, [firstLink, setIsOffline]);

    return (
        <div
            id={`${id}-${version}`}
            key={`${id}-${version}`}
            className={classNames({
                'card': true,
                'card--disabled': isOffline
            })}
        >
            <div className={"card-content"}>
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-32x32">
                            <img src={logo} alt="Logo"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-5">Version {version}</p>
                        <p className="subtitle is-6">{title}</p>
                    </div>
                </div>
            </div>

            {links.length > 0 && (
                <footer className="card-footer">
                    {links.map(link => {
                        return (
                            <a href={link.href(version)} key={link.title}
                               className="card-footer-item">{link.title}</a>
                        )
                    })}
                </footer>
            )}
        </div>
    )
}