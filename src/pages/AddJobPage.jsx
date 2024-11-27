import AddJob from "../components/AddJob";

export default function AddJobPage({submitRetrieveData, langSelected}){

    return(
        <>
            <AddJob submitRetrieveData = {submitRetrieveData} langSelected={langSelected} />
        </>
    )
}