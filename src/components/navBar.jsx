
import "./navBar.scss";
import { NavLink,Link } from "react-router-dom";
import {FaGlobe} from "react-icons/fa"
import { useEffect, useState } from "react";

export default function NavBar({langFunc}){

    const [lang, setLang] = useState("en")

    const langHandlerEl = ()=>{
        setLang((prevState)=> prevState? "el":"")
    }
    const langHandlerEn = ()=>{
        setLang((prevState)=> prevState? "en": "")
    }
    useEffect(()=>{
        langFunc(lang)
    },[lang])


    const navClass = ({isActive})=> isActive? "navBarBtn blackBtn": "navBarBtn"

    return(
        <>
            <nav className="navBar ">
                <div className="centering">
                    {/* <!-- Logo --> */}
                    
                    <NavLink className="favIconLogo" to="/">
                        <img
                            src="./public/images/logo.png"
                            alt="Real Jobs"
                        />
                        { /* this span have set to display None */}     
                        <span className="favIconTxt"
                            >Real Jobs
                        </span>
                    </NavLink>

                    <div className="navBarBtns">
                        <NavLink
                        to="/"
                        className={navClass}
                        >Home</NavLink>

                        <NavLink
                        to="/jobs"
                        className={navClass}
                        >Jobs</NavLink>

                        <NavLink
                        to="/add-job"
                        className={navClass}
                        >Add Job</NavLink>

                        <div className="Lang">
                            <FaGlobe/>
                            <span onClick={langHandlerEl} className="navBarBtn" >  ΕΛ</span>
                            <span> / </span>
                            <span onClick={langHandlerEn} className="navBarBtn" > EΝ</span>
                        </div>

                    </div>

                </div>           
                
            </nav>
        </>
    )
}