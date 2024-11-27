import { Link } from "react-router-dom"
import { GiMagnifyingGlass } from "react-icons/gi";
import { PiOfficeChairBold } from "react-icons/pi";

export default function HomeCard({cardData}){
    const cardId = cardData[5].icon;
    const icon = (!cardId) ? (<PiOfficeChairBold/>) : (<GiMagnifyingGlass/>);
    
    // console.log("cardId" , cardId)

    return(
        <>
            <div className="containerPosition">
                <div className="containerBg">
                    <div className="iconFormat">
                        {icon}
                    </div>

                    <div className="containerFormat">
                        <h2 >{cardData[0].title}<span>{cardData[1].span}</span></h2>
                        <p >{cardData[2].subText}</p>
                        <Link className="btn"
                            to= {cardData[3].href}>
                                {cardData[4].btnName}
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

