import React from "react";
import Layout from "../components/Layout";
import image1 from "../../../client/src/images/newheadphone.jpg";
import image2 from "../../../client/src/images/watchbanner.png";
import image3 from "../../../client/src/images/pizzabannaer.png";
import image4 from "../../../client/src/images/fashion.png";
import image5 from "../../../client/src/images/sofa.png";
import image6 from "../../../client/src/images/gadget.jpg";
import image7 from "../../../client/src/images/clothing.png";
import image8 from "../../../client/src/images/watches.png";
import image9 from "../../../client/src/images/parlor.png";
import image10 from "../../../client/src/images/shopping.png";
import image11 from "../../../client/src/images/image11.png";
import image12 from "../../../client/src/images/iphone.png";
import image13 from "../../../client/src/images/sWatch.png";
import image14 from "../../../client/src/images/image11.png";
import image15 from "../../../client/src/images/image11.png";
import orange from "../../../client/src/images/orange.jpg";

import iphoneBanner from "../../../client/src/images/iphoneBanner.jpg"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "./../components/Prices";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/context/cart";
import { toast } from "react-hot-toast";
import Badge from "antd";
import useCategory from "../hooks/useCategory";
import FancyBanner from "./FancyBanner/FancyBanner";



const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [cart, setCart] = useCart();

  const url = "https://www.linkpicture.com/q/LPic64025723758b82099065225.jpg";
  const url1 = "https://www.linkpicture.com/q/nodata";
  const url2 =
    "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100";
  const url3 =
    "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100";

  const url4 =
    "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100";
  const url5 =
    "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100";
  const url6 =
    "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100";
  const url7 =
    "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100";
  const url8 =
    "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100";
  const url9 =
    "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100";
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
    <Layout className="mt-5" title={"All Products- Shop Now"}>
      <div className="mt-5 overflow-hidden" style={{ backgroundColor: "#FEF5E2" }}>
        {/* card designs for showing product category: */}
        <div className="d-flex justify-content-around mb-5 mt-5  text-dark ">
          <div className="d-none d-lg-block mt-4">
            <img src={url2} alt="" onClick={() => navigate("/categories")} />{" "}
            <br />
            <h6 style={{ fontWeight: 600 }} className="text-center ptag">
              Grocery
            </h6>
          </div>
          <div className="d-none d-lg-block mt-4">
            <img src={url3} alt="" onClick={() => navigate("/categories")} />{" "}
            <br />
            <h6 style={{ fontWeight: 600 }} className="text-center ptag">
              Mobiles
            </h6>
          </div>
          <div className="d-none d-lg-block mt-4">
            <img src={url4} alt="" onClick={() => navigate("/categories")} />{" "}
            <br />
            <h6 style={{ fontWeight: 600 }} className="text-center ptag">
              Fashion
            </h6>
          </div>
          <div className="d-none d-md-block d-lg-block mt-4">
            <img src={url5} alt="" onClick={() => navigate("/categories")} />{" "}
            <br />
            <h6 style={{ fontWeight: 600 }} className="text-center ptag">
              Electronics
            </h6>
          </div>
          <div className="d-none d-md-block d-lg-block mt-4">
            <img src={url6} alt="" onClick={() => navigate("/categories")} />{" "}
            <br />
            <h6 style={{ fontWeight: 600 }} className="text-center ptag">
              Appliances
            </h6>
          </div>
          <div className="d-none  d-lg-block mt-4">
            <img src={url7} alt="" onClick={() => navigate("/categories")} />{" "}
            <br />
            <h6 style={{ fontWeight: 600 }} className="text-center ptag">
              Travel
            </h6>
          </div>
          <div className="d-none d-md-block d-lg-block mt-4">
            <img src={url8} alt="" onClick={() => navigate("/categories")} />{" "}
            <br />
            <h6 style={{ fontWeight: 600 }} className="text-center ptag">
              Top Offers
            </h6>
          </div>
          <div className="d-none d-lg-block mt-4">
            <img src={url9} alt="" onClick={() => navigate("/categories")} />{" "}
            <br />
            <h6 style={{ fontWeight: 600 }} className="text-center ptag">
              Toys
            </h6>
          </div>
          <div className="d-none d-md-block d-lg-block mt-4">
            <img src={url9} alt="" onClick={() => navigate("/categories")} />{" "}
            <br />
            <h6 style={{ fontWeight: 600 }} className="text-center ptag">
              Brodcasting
            </h6>
          </div>
        </div>

        <div>
          {/*  banner carousel elements: */}
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

              <div className="carousel-item active">
                <img
                  style={{ height: 400 }}
                  src={image10}
                  className="d-block w-100 "
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{ height: 400 }}
                  src="http://cdn.shopify.com/s/files/1/0115/0272/collections/collection-banner_iPhone_Cases_Desktop.jpg?v=1625072679"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{ height: 400 }}
                  src={iphoneBanner}
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

          {/*Mainly home design for products starting here: */}
          <div className="row mt-4 ">
            <div className="col-md-2  shadow-lg ms-5 mb-5 bg-white">
              <h5 className="text-center mt-3">Search by Category</h5>

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
                className="btn btn-success w-100 mt-3 mb-5"
                onClick={() => window.location.reload()}
              >
                Reset Search
              </button>

              {/* Mini carousel elements: */}
              <h6 style={{ fontWeight: 600 }} className="text-center design ">
                Recommended Products
              </h6>
              <hr />
              <div
                id="carouselExampleControls"
                className="carousel slide mt-5"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active "
                    data-bs-interval="2000"
                  >
                    <img src={image4} className="d-block w-100" alt="..." />
                    <h6 className="text-center">Fashion</h6>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={image5} className="d-block w-100" alt="..." />
                    <h6 className="text-center">Home & decor</h6>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={image9} className="d-block w-100" alt="..." />
                    <h6 className="text-center">Beauty products</h6>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={image6} className="d-block w-100" alt="..." />
                    <h6 className="text-center">Gadgets</h6>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={image7} className="d-block w-100" alt="..." />
                    <h6 className="text-center">Cloth & butique</h6>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={image8} className="d-block w-100" alt="..." />
                    <h6 className="text-center">Smart watches</h6>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* addvartise component: */}
              <div>
                <p>
                  <button
                    className="btn btn-primary mt-3 w-100 d-none d-sm-block"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseWidthExample"
                    aria-expanded="false"
                    aria-controls="collapseWidthExample"
                  >
                    Call For support
                  </button>
                </p>
                <div style={{ minHeight: 120 }}>
                  <div
                    className="collapse collapse-horizontal"
                    id="collapseWidthExample"
                  >
                    <div
                      className="card card-body d-none d-sm-block"
                      style={{ width: 250, fontSize: 13, marginBottom: 20 }}
                    >
                      Amigo's Outlet Limited. <br />
                      <hr />
                      Majortila, Sylhet, Bangladesh. <br />
                      <hr />
                      Email: amigosoutlet1@gmail.com <br />
                      <hr />
                      Phone: 01774573076
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9 ">
             

              {/* Mapping and showing products: */}
              <div className="d-flex flex-wrap mb-5 ">
                {products?.map((p) => (
                  <div
                    className="card mx-3 mb-3 text-dark myProductCard"
                    style={{ width: "18rem" }}
                  >
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="mx-auto h-50 w-75"
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
                      <button
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
                      </button>
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
      </div>
    </Layout>
  );
};

export default HomePage;
