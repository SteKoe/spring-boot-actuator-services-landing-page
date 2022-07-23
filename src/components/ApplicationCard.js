export const ApplicationCard = ({versions, title, logo, links}) => {
    return versions.sort().reverse().map(version => {
        return (
            <div className="card" key={version}>
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
                                <a href={link.href(version)} key={link.title} className="card-footer-item">{link.title}</a>
                            )
                        })}
                    </footer>
                )}
            </div>
        );
    })
}