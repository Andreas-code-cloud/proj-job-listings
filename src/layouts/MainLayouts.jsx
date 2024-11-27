import { Outlet } from "react-router-dom"

import NavBar from "../components/navBar"

// import Hero from "../components/hero.jsx";
// import HomeCards from "../components/HomeCards.jsx"
// import JobListings from "../components/jobListings.jsx"
// import ViewAll from "../components/ViewAll.jsx"


export default function MainLayouts({langFunc}) {

    return(
        <>
            <NavBar langFunc={langFunc} />
            <Outlet/>
        </>
    )
}