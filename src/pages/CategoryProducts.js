import React from "react";
import Layout from "./../components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CategoryProducts = () => {
    const navigate =useNavigate();
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      // products and category will be gotten from call back function
      //  we defined in call back function productCategoryController
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);
  return (
    <Layout>
      <div className="container mt-5 pt-5 text-center">
        <h4 className=" mt-5 mx-auto pt-2">Category - {category?.name}:</h4>
        <h6 className=" mt-1 mx-auto pt-5">{products?.length} results found</h6>

        <div className="row">
        <div className="d-flex flex-wrap mb-5 ">
                {products?.map((p) => (
                  <div
                    className="card m-2 text-dark"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top h-50 w-75"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>

                      <p className="card-text">
                        {p.description.substring(0, 30)}...
                      </p>
                      <p className="card-text">{p.price} Taka</p>
                    </div>
                    <div className="d-flex ">
                      <button
                        class="btn btn-dark m-3 text-light"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        See detail
                      </button>
                      {/* <button
                        class="btn btn-dark m-3 text-light"
                        onClick={() => {
                          setCart([...cart, p]);

                          //saving the cart state in local storage so that it does not go away after reload:
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart, p])
                          );
                          toast.success("item added to cart");
                        }}
                      >
                        Add to cart
                      </button> */}
                    </div>
                  </div>
                ))}
              </div>
        </div>

      </div>
    </Layout>
  );
};

export default CategoryProducts;
