import React from 'react'
import ProductItem from './ProductItem.js';
import {getData} from '../../../utils/LocalStore';
import {filter} from '../../../utils/LocalStore';

function Product() {
    const productIDs = getData().map(product => product.id) || [];
    
    const products=[];
    productIDs.forEach(id=>{
       products.push( Array.from(filter({id:id}))[0]);

    })
    console.log(products)
    const productComponents = products.map( product =>{
    return <ProductItem  id={product.id}  name={product.name} outPrice={product.outPrice} realPrice={product.realPrice} />
    })
    console.log(products)
    return (
        <div>
           {productComponents}
        </div>
    )
}

export default Product
