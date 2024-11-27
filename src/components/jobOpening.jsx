import { useState } from "react"
import { Link } from "react-router-dom";


export default function jobOpening({job}){
    const [allDescription, setAllDescription] =  useState(false);
    // console.log("show the job or error",job);
    let description = job.description;

    if(!allDescription){
        description=description.substring(0, 150) + "..."
    }

    return(
        <>
            <div  className="jobOpeningContainer">

            <div className="jobOpeningTemplate ">
                    <div className="jobOpeningHeader">
                        <div  className="partOrFullTime ">{job.type}</div>
                        <h3  className="jobOpeningTitle ">{job.title}</h3>
                    </div>
                    <br />
                    <div className="jobOpeningMain">
                        <p  className="description ">  {description}                                 
                        </p>

                        <br />
                        <p onClick={()=>setAllDescription((prevState)=>!prevState)} >{allDescription? "Less":"More"}</p>
                        <br />

                        <h3  className="salary">{job.salary}</h3>

                    </div>

                    <br />
                    <hr />


                    <div className="jobOpeningFooter">
                        <div className="location ">
                            <img className="locationPin" src="../../public/images/locationPin.png" alt="location pin" />
                                 {job.location}
                        </div>

                        <Link to={`/job/${job.id}`}  className="btn" >
                        Read More
                        </Link>
                    </div>
            </div>   

        </div>
        


        </>
    )
}