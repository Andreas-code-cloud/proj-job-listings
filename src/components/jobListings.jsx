import "./jobListings.scss"
import JobOpening from "./jobOpening"
import Jobs from "../assets/jobs.json"
import { useState, useEffect } from "react"
import Spinner from "../components/Spinner.jsx"

export default function jobListings({ifIsHomePage, langSelected} ){

    const [jobs, setJobs] = useState([]);
    const [spinner, setSpiner] = useState(true);

    useEffect(()=>{
        const fetchData = async function(){
            try{
                const theUrl = (ifIsHomePage)? "/api/jobs" : "/api/jobs?_limit=3" 
                const res = await fetch(theUrl);
                const data = await res.json();
                setJobs(data);
            } catch(error){
                console.log("error during fetching data", error)
            } finally{
                setSpiner(false);
            }

        }
        fetchData()
    },[])
  
    const showJobs = jobs.map((job)=> <JobOpening key={job.id} job = {job} />)

    let titleEN = ""
    let titleEl = ""



    if (ifIsHomePage ) {
         titleEl = "Διαθέσιμες θέσεις εργασίας"; 
         titleEN =  "Job Openings" ;
    }
    if (!ifIsHomePage) {
        titleEl = "Όλες οι διαθέσιμες θέσεις εργασίας ";
        titleEN = "All the available job listings";
    }
    
    return (
        <>
            {/* // Browse Jobs -- */}

            <section className="jobListingSection">
              
                <div className="container">
                    <h2 className="title">{langSelected === "en"? (titleEN):(titleEl) }
                    </h2>
                </div>

                <div className="containersPlacement">
                    {/* {vacancies} */}
                    {spinner ? <Spinner spinner={spinner}  /> : showJobs  }
                </div>

            </section>

        </>
    )
}