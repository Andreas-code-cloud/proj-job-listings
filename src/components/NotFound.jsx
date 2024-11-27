import { Link } from "react-router-dom"
import "./NotFound.scss"
import { FaExclamationTriangle } from "react-icons/fa";
export default function NotFound(){


    return(
        <>
            <section className="notFoundSection" >
                <div className="msgContainer">
                    <i className="ExclamationTriangle"><FaExclamationTriangle/></i>
                    <h1>404 Not Found</h1>
                    <p >This page does not exist</p>
                    <br />
                    <div className="noWorriesMsg">
                        <p ><span>OMG!!</span> There must be an error.</p>
                        <p > <span>No worries</span> we are working on it <span>!!</span></p>      
                    </div>

                    <Link
                        href="/index"
                        className="btn"
                        >Go Back
                    </Link>
                </div>
            </section>
        
        </>
    )
}