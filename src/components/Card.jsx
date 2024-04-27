import React from 'react'
import "../styles/Card.css"

const Card = ({productname, description, productimage}) => {
  return (
    <div className="card">
        <div className="cardcontainer">
            <img src={productimage} alt="product" />

            <div className="cardcontent">
                <h5 className="cardtitle">{productname}</h5>
                <p className="carddesc">
                    {description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card