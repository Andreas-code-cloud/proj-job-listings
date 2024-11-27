import "./ReturnBtn.scss"
import { Link } from "react-router-dom"
import { MdOutlineSubdirectoryArrowLeft } from "react-icons/md";

export default function ReturnBtn(){

    return(
        <> <section>

            <div className="returnBtnContainer">
                    <Link to="/jobs" className="returnBtn ">
                        <i className="arrowImg">
                            <MdOutlineSubdirectoryArrowLeft className="faIconArrow"/>
                        </i> Back to Job Listings
                    </Link>
            </div>
            
        </section>

        </>
    )
}