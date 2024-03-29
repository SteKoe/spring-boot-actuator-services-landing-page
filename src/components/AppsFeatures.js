import {useEffect, useRef, useState} from "react";
import {LegacyEndpointChecker} from "../LegacyEndpointChecker";
import {ActuatorEndpointDiscoverer} from "../ActuatorEndpointDiscoverer";
import "./AppsFeatures.css";
import classNames from "classnames";

export function AppFeatures({version}) {
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const dropDown = useRef(null);

    useEffect(() => {
        async function fetch() {
            setService([]);

            try {
                if (+version < 2) {
                    let service = await LegacyEndpointChecker(version, `/app/${version}`);
                    setService(service);
                } else {
                    let service = await ActuatorEndpointDiscoverer(version, `/app/${version}/actuator`);
                    setService(service);
                }
            } catch (e) {
                setLoading(false)
            }

            setLoading(false);
        }

        window.addEventListener("click", (ev) => {
            let data = dropDown.current;
            data.classList.remove("is-active")
        })
        fetch();
    }, [])

    const toggle = (ev) => {
        ev.stopPropagation();
        let data = dropDown.current;
        data.classList.toggle("is-active")
    }

    const actuatorCount = service?.actuators?.length ?? 0;
    const isDisabled = !(actuatorCount > 0);

    return (
        <div className="card-footer-item">
            <div className="dropdown is-up" ref={dropDown}>
                <div className="dropdown-trigger">
                    <button
                        className={classNames({
                            'button': true,
                            'is-ghost': !loading,
                            'is-white': loading,
                            'is-loading': loading
                        })}
                        aria-haspopup="true"
                        aria-controls="dropdown-menu"
                        disabled={isDisabled}
                        onClick={toggle}>
                        <span>Actuators</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <a className="dropdown-item has-text-weight-bold"
                           href={`/app/${version}`}
                           target={"_blank"}>
                            Navigate to /actuator
                        </a>
                        <hr className="dropdown-divider"/>
                        {service?.actuators?.map(actuator => {
                            return (
                                <a key={actuator}
                                   className="dropdown-item"
                                   href={`/app/${version}/${actuator}`}
                                   target={"_blank"}>
                                    <small>/actuator/</small>
                                    <strong className="has-text-weight-semibold">{actuator}</strong>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}