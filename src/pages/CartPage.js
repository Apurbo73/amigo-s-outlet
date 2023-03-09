import React from "react";
import Layout from "../components/Layout";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../components/context/auth";
import { useCart } from "../components/context/cart";
import { toast } from "react-hot-toast";
import image from "../../src/images/buy.png";
import DropIn from "braintree-web-drop-in-react";
import { useState, useEffect } from "react";
import axios from "axios";

const CartPage = () => {
  const [auth, seAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //Total price counting:
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total;
    } catch (error) {
      console.log(error);
    }
  };
  //handling remove from cart:
  const removeFromCart = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((Item) => Item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      //Removing from Local Storage too:
      localStorage.setItem("cart", JSON.stringify(myCart));
      toast.success("Item removed successfully");
    } catch (error) {
      console.log(error);
    }
  };

  // get payment gateway token:

  const getToken = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/braintree/token");
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  // handle make payment button:
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post("/api/v1/product/braintree/payment", {
        nonce,
        cart
      });
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // handling plus button of adding products:

  // const plus = document.querySelector(".plus"),
  //   minus = document.querySelector(".minus"),
  //   num = document.querySelector(".num");

  // let a = 1;
  // plus.addEventListener("click", () => {
  //   a++;
  //   console.log(a);
  // });

  return (
    <Layout>
      <div style={{ backgroundColor: "#FEF5E2" }}>
        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col-md-12">
              <h1 className="text-center p-2 mb-2 mt-5 hrtag">
                {`Hi.. ${auth?.token && auth?.user?.name}`}
              </h1>
              {/* checking cart state */}
              <h4 className="text-center p-2 mb-2 mt-5">
                {cart?.length > 0 ? (
                  `You have ${cart.length} items in your cart
               ${auth?.token ? " " : "Please login to checkout"}`
                ) : (
                  <div>
                    <div className="card w-50  " style={{ width: "18rem" }}>
                      {/* <img
                      style={{ height: 400 }}
                      src={image}
                      className="card-img-top "
                      alt="..."
                    /> */}
                      <div className="card-body">
                        <p className="card-text">
                          Your Cart is Empty. Add Something!! <br />
                          Amigo's Outlet Limited
                        </p>
                        <Link to="/" className="btn btn-primary">
                          Explore the best for you...
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </h4>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-8  mb-5 ">
              {cart?.map((p) => (
                <div className="row shadow-lg p-3 w-75 mb-5 bg-white rounded">
                  <div className="col-md-4 ">
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top h-80"
                      alt=""
                    />
                    <div className="mb-1 mt-1 text-center">
                      <div className="btn btn-outline-primary m-1 minus">-</div>
                      <div className="btn btn-outline-primary m-1 num">0</div>
                      <div className="btn btn-outline-primary m-1 plus">+</div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h6 className="card-title mt-5">{p.name}</h6>
                    <h6
                      className="card-title mt-3
                  "
                    >
                      {p.description.substring(0, 50)}...
                    </h6>
                    <h6 className="card-title mt-1 mb-3">
                      Price: {p.price} Taka
                    </h6>
                    <div className="">
                      <div
                        className="btn btn-warning "
                        onClick={() => removeFromCart(p._id)}
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-4  p-4">
              <h2 className="cart-summary text-center">Cart Summary</h2>
              <p className="text-center">Total | Checkout | Payment</p>
              <hr />
              <h4 className="text-center">Total : {totalPrice()} Taka</h4>
              <div className="mb-3">
                {auth?.token ? (
                  <button className="btn btn-outline-success w-100">
                    You are ready to proceed
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-warning w-100"
                    onClick={() =>
                      navigate("/login", {
                        state: "/cart"
                      })
                    }
                  >
                    Please Log In
                  </button>
                )}
              </div>

              <div className="mt-2">
                {!clientToken || !auth?.token || !cart?.length ? (
                  " "
                ) : (
                  <>
                    <DropIn
                      options={{
                        authorization: clientToken,
                        paypal: {
                          flow: "vault"
                        }
                      }}
                      onInstance={(instance) => setInstance(instance)}
                    ></DropIn>
                    {/* <button
                    className="btn btn-primary w-100"
                    onClick={handlePayment}
                    disabled={loading || !instance}
                  >
                    {loading ? "Processing....." : "Make payment!!"}
                  </button> */}
                    <button
                      className="btn btn-primary w-100"
                      onClick={handlePayment}
                      disabled={loading || !instance || !auth?.user?.address}
                    >
                      {loading ? "Processing ...." : "Make Payment"}
                    </button>
                  </>
                )}
              </div>

              <button className="w-100 btn btn-danger mx-auto mt-2">
                {`Thanks  for your interest ${
                  auth?.token && auth?.user?.name
                } `}
                <p> Amigo's Outlet Limited!</p>
                <hr />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
