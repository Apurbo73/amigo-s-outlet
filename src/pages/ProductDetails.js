import React from "react";
import Layout from "./../components/Layout";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  //get product:
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProducts(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params?.slug) {
      getProduct();
    }
  }, [params?.slug]);

  //get similar products:
  const getSimilarProducts = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Amigo's Product Details"}>
      <h1>Product Details</h1>
      <div className="row container d-flex">
        <div className="col-md-6 m-5">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top w-full h-75"
            alt=""
          />
        </div>
        <div className="col-md-4 mt-5 border h-80">
          <h1 className="text-center">Product Details</h1>
          <h6>Name: {product.name}</h6>
          <h6>Description: {product.description}</h6>
          <h6>Category: {product.category?.name}</h6>
          <h6>Price: {product.price} Taka</h6>
          <button class="btn btn-primary w-100 mt-3">Add to cart</button>
        </div>
      </div>
      <hr />
      <div className="row container">
        <h1>Similar Products</h1>
    {/* checking if any similar product is available or not */}
        {relatedProducts.length < 1 && <p className="text-center">No Similar Product Available</p>}
        <div className="d-flex flex-wrap mb-5">
          {relatedProducts?.map((p) => (
            <div className="card m-2 text-dark" style={{ width: "18rem" }}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>

                <p className="card-text">{p.description.substring(0, 30)}...</p>
                <p className="card-text">{p.price} Taka</p>
              </div>
              <div className="">
                <button class="btn btn-primary m-3">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
