import BarLoader from "react-spinners/BarLoader"


export default function Spinner({spinner}){


    return(
        <>
            <BarLoader
                color="#0012ff"
                cssOverride={null}
                loading = {spinner}
                height={4}
                
                speedMultiplier={0.7}
                width={200}
            />
        
        </>
    )
}