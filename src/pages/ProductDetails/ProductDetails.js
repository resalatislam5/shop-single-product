import React from 'react';
import CommentSection from './CommentSection';
import Customized from './Customized';
import Details from './Details';
import Electric_Adventure from './Electric_Adventure';
import ProductDetail from './ProductDetail';

const ProductDetails = () => {
  return (
    <div>
      <ProductDetail />
      <Customized />
      <Details />
      <Electric_Adventure />
      <CommentSection />
    </div>
  );
};

export default ProductDetails;