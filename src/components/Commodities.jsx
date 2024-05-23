import React from 'react';
import Card from './Card';
import { Products } from '../Commodities';
import "../styles/commodity.css"

const Commodities = () => {

  return (
    <div className="commoditycontainer" id='commoditycontainer' >
      <h5 className="commodityheader">
        COMMODITIES
      </h5>

      <p className="commoditydescription">
      GC Trade is dealing with various commodities such as wheat,
       edible oils, oilseeds, milk products, feedstuff, peas, 
       sugar, fertilizers, organic products like soyabean, soyabean meal, lecithin and other by products.
      List of our products are increasing as we are constantly 
      looking to expand our offers in order to meet our 
      partners’ demand. New opportunities are always 
      explored to help our clients expanding their business.
      
      </p>

      <div className="cardholder"
        style={{display: 'flex', flexWrap :'wrap'}}
      >
        {Products.map(product =>(
          <Card 
            key={product.id}
            productname={product.productname}
            description={product.description}
            productimage={product.productimage}
          />
        ))}
      </div>
      
    </div>
  )
}

export default Commodities