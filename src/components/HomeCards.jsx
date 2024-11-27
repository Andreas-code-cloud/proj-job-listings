import "./HomeCards.scss"
import HomeCard from "./HomeCard.jsx"


export default function forHow({langSelected}){
/* <!-- Employees and Employers --> */
const cardDataEn = {
    Employees : [   {title : `For Employe`},
                    {span : "es" },
                    {subText: "Browse our jobs and start your career today"},
                    {href : "/jobs"},
                    {btnName : "Browse Jobs"},
                    {icon : true}
    ],
    Employers : [   {title : `For Employe`},
                    {span : "rs" },
                    {subText: "List your job to find the ideal employee"},
                    {href : "/add-Job"},
                    {btnName : "Add Job"},
                    {icon : false}

    ]
}
const cardDataEl = {
    Employees : [   {title : `Για Υπαλλήλο`},
                    {span : "υς" },
                    {subText: "Περιηγηθείτε στις δουλειές μας και ξεκινήστε την καριέρα σας σήμερα"},
                    {href : "/jobs"},
                    {btnName : "Browse Jobs"},
                    {icon : true}
    ],
    Employers : [   {title : `Για Εργοδότ`},
                    {span : "ες" },
                    {subText: "Aνάρτηστε τη δουλειά σας για να βρείτε τον ιδανικό υπάλληλο"},
                    {href : "/add-Job"},
                    {btnName : "Add Job"},
                    {icon : false}

    ]
}
{langSelected === "en"? (<HomeCard cardData = {cardDataEn.Employees}/>):(<HomeCard cardData = {cardDataEl.Employees}/>)}
    return(
        <>
            <section className="EmployeesAndEmployers">

                {langSelected === "en"? (<HomeCard cardData = {cardDataEn.Employees}/>):(<HomeCard cardData = {cardDataEl.Employees}/>)}
                {langSelected === "en"? (<HomeCard cardData = {cardDataEn.Employers}/>):(<HomeCard cardData = {cardDataEl.Employers}/>)}
 
            </section>
        </>
    )
}