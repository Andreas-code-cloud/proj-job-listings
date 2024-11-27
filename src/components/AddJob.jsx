import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


import "./AddJob.scss";

export default function AddJob({submitRetrieveData, langSelected  }){


    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [salary, setSalary] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [companyDescription, setCompanyDescription] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactPhone, setContactPhone] = useState("");

    const navigate = useNavigate();

    const submitForm = (event)=>{
        event.preventDefault();
  
        const newJob ={
            type: type,
            title: title,
            location: location,
            description: description,
            salary: salary,
            company:{
                name:companyName,
                description:companyDescription,
                email:contactEmail,
                phone:contactPhone
            }
        }
        // console.log(newJob)

        submitRetrieveData(newJob);

       return navigate("/jobs");
    }

    return(
        <>
            <section >
                <div className="addJobBackground ">
                    <div className="addJobContainer bg-white " >
                        
                        <form onSubmit={submitForm} className="formContainer" >
                            <h2 className="formContainerTitle ">
                                {langSelected === "en"? "Add Job":"Προσθέστε νέα Αγγελία"}
                            </h2>

                            <div className="allFormElements">
                                <label htmlFor="type" 
                                    >{langSelected === "en"? "Job Type":"Είδος Εργασίας"}
                                </label>
                                <select
                                    id="type"
                                    name="type"
                                    className="allFormInputs "
                                    required

                                    value={type}
                                    onChange={(event)=> setType(event.target.value)}
                                >
                                    <option value="">{langSelected === "en"? "Select an option":" Eνεργοποιήστε μια επιλογή"}
                                    </option>                                    <option  value="Full-Time">Full-Time</option>
                                    <option  value="Part-Time">Part-Time</option>
                                    <option  value="Remote">Remote</option>
                                    <option  value="Internship">Internship</option>
                                </select>
                            </div>

                            <div className="allFormElements">
                                <label > {langSelected === "en"? "Job Listing Name":"Όνομα για Καταχώρηση Εργασίας"}
                                </label >
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="allFormInputs "
                                    placeholder={langSelected === "en"? "eg. Senior React Developer":"Πχ. Ζητείται μηχανικός εργοταξίου "}

                                    required

                                    value = {title}
                                    onChange={(event)=>setTitle(event.target.value)}
                                />
                            </div>

                            <div className="allFormElements">
                                <label
                                    htmlFor="description"
                                    className="allFormElements"
                                    > 
                                    {langSelected === "en"? "Description":"Περιγραφή"}
                                    </label>
                                <textarea
                                    className="allFormTxtArea"

                                    id="description"
                                    name="description"
                                    rows="4"
                                    placeholder={langSelected === "en"? "Add any job duties, expectations, requirements, etc":"Προσθέστε τυχόν καθήκοντα εργασίας, προσδοκίες, απαιτήσεις κ.λπ."}

                                    value={description}
                                    onChange={(event)=> setDescription(event.target.value)}
         
                                ></textarea>
                            </div>

                            <div className="allFormElements">
                                <label htmlFor="type" 
                                     className="allFormElements">
                                         {langSelected === "en"? "Salary":"Απολαβές"}
                                </label>
                                <select
                                    id="salary"
                                    name="salary"
                                    className="allFormInputs"
                                    required
                                    value = {salary}
                                    onChange={(event)=> setSalary(event.target.value)}
                                >
                                    <option value="">{langSelected === "en"? "Select an option":" Eνεργοποιήστε μια επιλογή"}
                                    </option>
                                    <option value={langSelected === "en"? "Under $50K":"Kάτω από $50K"} >{langSelected === "en"? "Under $50K":"Kάτω από $50K"}</option>

                                    <option value="$50K - 60K">$50K - $60K</option>
                                    <option value="$60K - 70K">$60K - $70K</option>
                                    <option value="$70K - 80K">$70K - $80K</option>
                                    <option value="$80K - 90K">$80K - $90K</option>
                                    <option value="$90K - 100K">$90K - $100K</option>
                                    <option value="$100K - 125K">$100K - $125K</option>
                                    <option value="$125K - 150K">$125K - $150K</option>
                                    <option value="$150K - 175K">$150K - $175K</option>
                                    <option value="$175K - 200K">$175K - $200K</option>
                                    <option value={langSelected === "en"? "Over $200K":"Πέρα κάτω από $200K"} >{langSelected === "en"? "Over":"Πέρα κάτω από"} $200K</option>
                                </select>
                            </div>

                            <div className='allFormElements'>
                                <label >
                                {langSelected === "en"? "Location":"Διεύθυνση "}
                                    
                                </label>
                                <input
                                    type='text'
                                    id='location'
                                    name='location'
                                    className="allFormInputs "
                                    placeholder={langSelected === "en"? "Company Location":"Διεύθυνση Εταιρείας"}
                                    
                                    required    
                                    value = {location}
                                    onChange={(event) => setLocation(event.target.value)}        
                                />
                            </div>

                            <br />

                            <h3 >
                                {langSelected === "en"? "Company Info":"Πληροφορίες Εταιρείας"}
                            </h3>

                            <div className="allFormElements">
                                <label htmlFor="company" >{langSelected === "en"? "Company Name":"Όνομα εταιρείας"} </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="allFormInputs "
                                    placeholder={langSelected === "en"? "Company Name":"Όνομα εταιρείας"}

                                    value={companyName}
                                    onChange={(event) => setCompanyName(event.target.value)}
                                    
                                />
                            </div>

                            <div className="allFormElements">
                                <label
                                    htmlFor="company_description"
                                    >{langSelected === "en"? "Company Description":"Περιγραφή εταιρείας "}
                                         
                                </label >
                                <textarea
                                    id="company_description"
                                    name="company_description"
                                    className="allFormTxtArea"
                                    rows="4"
                                    placeholder={langSelected === "en"? "What does your company do?":"Με τι ασχολείται η εταιρεία σας;"}

                                    value={companyDescription}
                                    onChange={(event)=>setCompanyDescription(event.target.value)}
                                ></textarea>
                            </div>

                            <div className="allFormElements">
                                <label
                                    htmlFor="contact_email"
                                    >{langSelected === "en"? "Contact Email":"Ηλεκτρονικό Ταχυδρομείο"}
                                </label>
                                <input
                                    type="email"
                                    id="contact_email"
                                    name="contact_email"
                                    className="allFormInputs "
                                    placeholder={langSelected === "en"? "Email address For applicants":"Ηλεκτρονικό Ταχυδρομείο για τους αιτητές εργασίας"}

                                    required
                                    value = {contactEmail}
                                    onChange={(event)=>setContactEmail(event.target.value)}

                                />
                            </div>
                            <div className="allFormElements">
                                <label
                                    htmlFor="contact_phone"
                                    >{langSelected === "en"? "Contact Phone":"Τηλέφωνο Επικοινωνίας"}
                                    </label >
                                <input
                                    type="tel"
                                    pattern="[0-9]{2}[0-9]{3}[0-9]{3}"
                                    id="contact_phone"
                                    name="contact_phone"
                                    className="allFormInputs "
                                    placeholder={langSelected === "en"? "Optional phone for applicants":"Προαιρετικό τηλέφωνο επικοινωνίας για τους αιτητές εργασίας"}
                                    value = {contactPhone}
                                    onChange={(event)=>setContactPhone(event.target.value)}
                                    
                                />
                            </div>

                            <button className="btn modifyBtn "
                                type="submit"
                            > {langSelected === "en"? "Add Job":"Προσθήκη Αγγελίας"} 
                             </button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}