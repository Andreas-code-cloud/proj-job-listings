import SingleJob from "../components/SingleJob.jsx"


export default function SingleJobPage({deleteData, langSelected}){


    return(
        <>
            <SingleJob deleteData={deleteData} langSelected={langSelected}/>
            {/* <!-- Go Back --> */}

        </>
    )
}