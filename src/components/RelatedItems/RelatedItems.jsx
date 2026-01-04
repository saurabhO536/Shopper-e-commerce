import React from 'react';
import men_products from '../../assets/datamen';
import women_products from '../../assets/datawomen';
import kid_products from '../../assets/datakid';
import Item from '../Item/Item';
import './RelatedItems.css';

const RelatedItems = ({ category, product }) => {
  let relatedProducts = [];

  if (category === 'men') {
    relatedProducts = men_products;
  } else if (category === 'women') {
    relatedProducts = women_products;
  } else if (category === 'kid') {
    relatedProducts = kid_products;
  }

  relatedProducts = relatedProducts.filter(item => item.id !== product);

  const displayedItems = relatedProducts.slice(0, 4);

  return (
    <div className='relatedItems'>
      <h2>Related Products</h2>
      <hr />
      <div className="related-item-product">
        {displayedItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}

      </div>
    </div>
  );
};

export default RelatedItems;
