import { useEffect, useState } from "react"
import "./hero.scss"


export default function hero ({langSelected}) {
  const txtAen = (<h1><i>Start</i> your Career <i>Become</i> a Professional </h1>)
  const txtAel = (<h1><i>Ξεκινήστε </i> την καριέρα σας <i>Γίνετε </i> επαγγελματίας </h1>)
  
  const textBen = <p>Find <b>the job</b> that fits your skills and needs</p>
  const textBel = <p>Βρείτε <b>τη δουλειά</b>  που ταιριάζει στις δεξιότητες και τις ανάγκες σας</p>

  return(

    <section className="hero">
      <div className="text-center">
        {langSelected === "en"? (txtAen):(txtAel)}
        <br />
        {langSelected === "en"? ( textBen ):(textBel)}
        
      </div>

    </section>
      
  )
}