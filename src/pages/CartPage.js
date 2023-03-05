import React from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/context/auth";
import { useCart } from "../components/context/cart";
import { toast } from "react-hot-toast";
const CartPage = () => {
  const [auth, seAuth] = useAuth();
  const [cart, setCart] = useCart();

  //handling remove from cart:
  const removeFromCart = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((Item) => Item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      toast.success("Item removed successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-md-12">
            <h1 className="text-center p-2 mb-2 mt-5">
              {`Hello ${auth?.token && auth?.user?.name}`}
            </h1>

            <h4 className="text-center p-2 mb-2 mt-5">
              {cart?.length > 0
                ? `You have ${cart.length} items in your cart
               ${auth?.token ? " " : "Please login to checkout"}`
                : "Your Cart is Empty !!"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 card mb-3 ">
            {cart?.map((p) => (
              <div className="row ">
                <div className="col-md-4 ">
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top h-80"
                    alt=""
                  />
                </div>
                <div className="col-md-8">
                  <h6 className="card-title mt-5">{p.name}</h6>
                  <h6 className="card-title mt-5">
                    {p.description.substring(0, 50)}...
                  </h6>
                  <h6 className="card-title mt-5">Price: {p.price} Taka</h6>
                  <div
                    className="btn btn-danger"
                    onClick={() => removeFromCart(p._id)}
                  >
                    Remove
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4 card">Checkout | Payment</div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
