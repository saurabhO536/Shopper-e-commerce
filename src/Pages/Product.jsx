import React, { useContext } from 'react'
import { ShopContext } from '../components/context/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrum from '../components/product/Breadcrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import RelatedItems from '../components/RelatedItems/RelatedItems'
import DescriptionBox from '../components/product/DescriptionBox'

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