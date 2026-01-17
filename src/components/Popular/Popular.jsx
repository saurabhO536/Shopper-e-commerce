import React from 'react'
import data_product from '../../assets/data'
import Item from '../Item/Item'
import './Popular.css'
import '../Item/Item.css'

const Popular = () => {
  return (
    <div className="popular">
      <h2>Popular In Women</h2>
      <hr />
      <div className="collection-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Popular
