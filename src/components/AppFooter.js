import "./AppFooter.css"

export function AppFooter() {
    return (
        <footer className="footer">
            <p>&copy; codecentric AG {new Date().getFullYear()}</p>
            <p className="has-text-grey-light">
                <small>
                Spring is a trademark of Pivotal Software, Inc. in the U.S. and other countries.
                </small>
            </p>
        </footer>
    );
}