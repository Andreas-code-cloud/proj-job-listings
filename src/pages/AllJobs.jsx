import JobListings from "../components/jobListings.jsx"

export default function AllJobs({langSelected}){


    return(
        <>
           <JobListings ifIsHomePage = {true} langSelected={langSelected}  /> 
        </>
    )
}