import React from "react";
import Layout from "../components/Layout";
import UserMenu from "../components/Layout/UserMenu";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../components/context/auth";
import moment from "moment";
const Orders = () => {
  const [auth, setAuth] = useAuth();
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <Layout title={"Your Orders"}>
      <div className=" container container-fluid p-3 mt-5 pt-5">
        <div className="row mt-5">
          <div className="col-md-3 mt-5 pt-5">
            <UserMenu></UserMenu>
          </div>
          <div className="col-md-9 mt-5">
            <h1 className=" mt-5"> All Orders</h1>

            {orders?.map((o, i) => {
              return (
                <div className="border shadow">
                  <table className="table ">
                    <thead>
                      <tr>
                        <th scope="col">Serial No</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="">{i + 1}</td>
                        <td className="">{o?.status}</td>
                        <td className="">{o?.buyer?.name}</td>
                        <td className="">{moment(o?.createAt).fromNow()}</td>
                        <td className="">
                          {o?.payment?.success ? "Success" : "Failed"}
                        </td>
                        <td className="">{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="container rounded">
                    {o?.products?.map((p, i) => (
                      <div className="row shadow-lg p-3 w-75 mb-5 mx-auto rounded">
                        <div className="col-md-4 ">
                          <img
                            src={`/api/v1/product/product-photo/${p._id}`}
                            className="card-img-top h-80"
                            alt=""
                          />
                 
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
                         
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
