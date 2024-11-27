import { useEffect, useState } from "react";
import ReturnBtn from "./ReturnBtn.jsx";
import "./SingleJob.scss";
import {Link, useParams} from "react-router-dom";
import Spinner from "../components/Spinner.jsx"
import { useNavigate } from "react-router-dom";

export default function SingleJob({deleteData, langSelected}){

    const [jobData, setJobData] = useState(null)
    const [spinner, setSpiner] = useState(true);

    const {id} = useParams();
    // console.log(id);

    useEffect(()=>{
        const fetchingData = async function(){
        try {
            const res = await fetch(`http://localhost:8000/jobs/${id}`);
            const data = await res.json();
            setJobData(data); 
            // console.log("setJobData", setJobData)
                        
        } catch (error) {
            console.log("featching error", error);
        }finally{
            setSpiner(false);
        }            
    

    }

    fetchingData();


    },[id])
    // console.log("jobData",jobData);
    const navigate = useNavigate();

    const deleteClickHandler = ()=>{
        deleteData(jobData?.id);
        navigate("/");
        
    }


    return(
        <>
            <ReturnBtn/>
            <br />
            {spinner ? <div  style={{ margin: "auto" }}><Spinner spinner={spinner}  /></div>
 :   

                <section>
                    <div className="singleJobSection" >
                    
                        <div className="centeringCont">
                            
                            <div className="SingleJobTemplate">

                                {/* <!-- Company Info --> */}
                                <div className="companyInfo">
                                    
                                    <div className="companyDescription">

                                        <div className="headings">
                                            <h3 >{langSelected === "en"? "Company Info":"Πληροφορίες Εταιρείας"}</h3>
                                            <h2 className="title">{jobData?.company?.name}</h2>
                                            </div>

                                        <p className="info"> {jobData?.company?.description} </p>
                                    </div>

                                    <br />
                                    <hr />
                                    <br />

                                    <div className="companyContact">
                                    

                                        <h3 >
                                            {langSelected === "en"? "Contact Email:":"Ηλεκτρονικό Ταχυδρομείο:"}
                                        </h3>
                                        <p >{jobData?.company?.contactEmail}</p>

                                        <h3>
                                            {langSelected === "en"? "Contact Phone:":"Τηλέφωνο Επικοινωνίας:"}
                                        </h3>
                                        <p >{jobData?.company?.contactPhone}</p>
                                    </div>
                                </div>

                                <div className="emt"></div>

                                {/* <!-- editListing --> */}
                                <div className="editListing">
                                    <div className="centeringContB">
                                        <h3>Edit Listing</h3>
                                        <Link className="btn"
                                            to={`/edit-job/${jobData?.id}`}
                                            
                                            >Edit Job
                                        </Link >
                                        <p onClick={deleteClickHandler } 
                                        className="btn" > Delete Job </p>
                                    </div>
                                </div>

                                {/* <!-- jobListingHeading --> */}
                                <div className="jobListingHeading">
                                    <div className="jobOpeningHeader">
                                        <p className="partOrFullTime ">{jobData?.type}</p>

                                        <br />
                                        <h3  className="jobOpeningTitle ">{jobData?.title}</h3>
                                        <br />
                                    </div>
                                    <div className="location ">
                                        <img className="locationPin" src="../../public/images/locationPin.png" alt="location pin" />
                                        <p >{jobData?.location}</p>
                                    </div>

                                </div>

                                {/* <!-- jobListingBody --> */}
                                <div className="jobListingBody">

                                    <div>
                                        <h3 className="title"> {langSelected === "en"? "Description":"Περιγραφή"} </h3>
                                        <br />
                                        <p className="description">{jobData?.description}</p>
                                    </div>

                                    <br />
                                    <div className="splitHr">
                                        <hr />
                                    </div>
                                    <br />

                                    <div >
                                        <h3 className="title">{langSelected === "en"? "Salary":"Απολαβές"}</h3>
                                        <br />

                                        <p className="description">{jobData?.salary} / {langSelected === "en"? "Year":"Ετος"}</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                
                }

        
        </>
    )
}