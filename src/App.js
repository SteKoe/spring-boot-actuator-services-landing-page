import {SbaInstancesList} from "./components/SbaInstancesList";
import {SpringBootServicesList} from "./components/SpringBootServicesList";
import {AppFooter} from "./components/AppFooter";

export function App() {
    return (
        <>
            <div className="container">
                <SbaInstancesList/>
                <SpringBootServicesList />
            </div>
            <AppFooter/>
        </>
    )
}