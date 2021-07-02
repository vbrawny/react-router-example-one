import React from "react";
//param routes
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  //this gets multiple dynamic segments
  // /product-detail/:productId/:anotherId/:anotherId1
  const params = useParams();
  //we can access the params as
  //params.productId,params.anotherId,params.anotherId1 etc.
  return (
    <section>
      <h2>Product Detail</h2>
      <p>params: {params.productId}</p>
    </section>
  );
};

export default ProductDetail;
