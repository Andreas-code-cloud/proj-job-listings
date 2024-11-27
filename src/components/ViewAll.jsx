import "./ViewAll.scss"
import {Link} from  "react-router-dom"

export default function ViewAll ({langSelected} ){

    return (
        <>
        <section className="ViewAllContainer ">
            <Link
                to="/jobs"
                className=" btn "
                > {langSelected === "en"? ("View All Jobs"):("Δες Όλες Τες Αγγελίες")} 
            </Link>
        </section>
        
        </>
    )
}

