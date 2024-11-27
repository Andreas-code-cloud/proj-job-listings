import { useOutletContext } from "react-router-dom";
import Hero from "../components/hero.jsx";
import HomeCards from "../components/HomeCards.jsx"
import JobListings from "../components/jobListings"
import ViewAll from "../components/ViewAll"

export default function HomePage ({langSelected}){
    return(
        <>
        <Hero langSelected={langSelected} />
        <HomeCards langSelected={langSelected} />
        <JobListings ifIsHomePage = {false} langSelected={langSelected} />    
        <ViewAll langSelected={langSelected}    /> 
      </>
        )
}


