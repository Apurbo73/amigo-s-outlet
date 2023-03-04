import React from "react";
import Layout from "../../components/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  //Get all products:

  const geAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  //life cycle method:
  useEffect(() => {
    geAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row container mt-5">
        <div className="col-md-3 mt-5">
          <AdminMenu></AdminMenu>
        </div>
        <div className="col-md-9 mt-5 "> 
          <h3 className="text-ceneter">All Products List</h3>
          <div className=" d-flex flex-wrap mb-5">
            {products?.map((p) => (
              <Link
                style={{ textDecoration: "none" }}
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
              >
                <div className="card m-2 text-dark" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
