import React from 'react'
import "../styles/Tiermembers.css"


const Tiermembers = () => {
  return (
    <div className="tiermembers" id='tiermembers'>

        <h1>TIER PARTNERS</h1>
        <hr className='break'/>
        <div className="tiercontainer">
            <p>Introducing the GC Trade partners, 
                whose invaluable support plays a crucial
                 role in helping us fulfill our mission. 
            </p>

            <div className="members">
                <img src="/members/gpc.jpg" alt="Global Pulses Association" />

                <div className="seperator">
                    
                </div>

                <img src="/members/gajta.jpg" alt="gajta" />

                <div className="seperator">

                </div>

                <img src="/members/agro.jpg" alt="Agro Paris Bourse" />
            </div>
        </div>

    </div>
  )
}

export default Tiermembers