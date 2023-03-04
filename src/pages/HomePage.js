import React from "react";
import Layout from "../components/Layout";
import image1 from "../../../client/src/images/newheadphone.jpg";
import image2 from "../../../client/src/images/watchbanner.png";
import image3 from "../../../client/src/images/pizzabannaer.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "./../components/Prices";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const url = "https://www.linkpicture.com/q/LPic64025723758b82099065225.jpg";
  const url1 = "https://www.linkpicture.com/q/nodata";

  // get all categories:
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      // toast.error("Something Went Wrong IN Getting All Categories");
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  //getting all products by defining how much products a page will show:
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);

      setProducts(data.products);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  useEffect(() => {
    //if no filtering is called then display all products:
    if (!checked.length || !radio.length) getAllProducts();
    //eslint-disable-next-line
  }, []);

  //handling filtering by category:
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }

    setChecked(all);
  };
  // Get filtered products:
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  //use effect for calling filtering products:
  //if filtering is called then display all filtered products

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get total product count for pagination :
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTotal();
  }, []);

  //load more function:

  const loadmore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (page === 1) return;
    loadmore();
  }, [page]);
  return (
    <Layout title={"All Products- Shop Now"}>
      <div>
        {/* carousel elements: */}
        <div
          id="carouselExampleControls"
          className="carousel slide mt-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                style={{ height: 400 }}
                src={url}
                className="d-block w-100 "
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                style={{ height: 400 }}
                src={image2}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                style={{ height: 400 }}
                src={image3}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* home design for products starting here: */}
        <div className="row mt-4 ">
          <div className="col-md-2 container">
            <h5 className="text-center">Search by Category</h5>

            <div className="d-flex flex-column border p-2">
              {categories?.map((c) => (
                <Checkbox
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  {c.name}
                </Checkbox>
              ))}
            </div>

            <h5 className="text-center mt-3 ">Search by Price</h5>
            {/* price filtering operation: */}
            <div className="d-flex flex-column border p-2 ">
              <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                {Prices?.map((p) => (
                  <div key={p._id}>
                    <Radio value={p.array}>{p.name}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
            <button
              className="btn btn-success w-100 mt-3"
              onClick={() => window.location.reload()}
            >
              Reset Search
            </button>
          </div>

          <div className="col-md-9">
            {/* {JSON.stringify(radio, null, 4)} */}
            <h1 className="text-center">All Products</h1>
            <div className="d-flex flex-wrap mb-5">
              {products?.map((p) => (
                <div className="card m-2 text-dark" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
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
                      class="btn btn-warning m-3"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      See detail
                    </button>
                    <button class="btn btn-primary m-3">Add to cart</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="m-2 p-3">
              {products && products.length < total && (
                <button
                  className="btn btn-warning"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? "Loading ...." : "Load more.."}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
