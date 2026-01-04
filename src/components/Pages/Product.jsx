import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrum from '../Breadcrum/Breadcrum'
import ProductDisplay from '../ProductDisplay/ProductDisplay'
import RelatedItems from '../RelatedItems/RelatedItems'
import DescriptionBox from '../DescriptionBox/DescriptionBox'

const Product = () => {

  let {all_product}= useContext(ShopContext);

  let {productId} = useParams();

  let product =all_product.find((e)=>e.id === Number(productId))
  
  return (
   <>
    <Breadcrum product={product}/>
    <ProductDisplay product={product}/>
    <DescriptionBox/>
    <RelatedItems category={product.category} product={product.id} />

    </>
  )
}

export default Product