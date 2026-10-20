import {Routes, Route} from "react-router";
import Home from "./mains/Home.tsx";
import Education from "./mains/Education.tsx";
import Experience from "./mains/Experience.tsx";
import Projects from "./mains/Projects.tsx";
import Volunteer from "./mains/Volunteer.tsx";
import Certifications from "./mains/Certifications.tsx";
import Nav from "./Nav.tsx";

export default function App() {
    return(
        <>
            <Nav/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/education"} element={<Education/>}/>
                <Route path={"/experience"} element={<Experience/>}/>
                <Route path={"/certifications"} element={<Certifications/>}/>
                <Route path={"/volunteer"} element={<Volunteer/>}/>
                <Route path={"/projects"} element={<Projects/>}/>
            </Routes>
        </>
    )
}