import React from "react";
import Layout from "../components/Layout";
import UserMenu from "../components/Layout/UserMenu";

const Orders = () => {
  return (
    <Layout title={"Your Orders"}>
      <div className=" container container-fluid p-3 mt-5">
        <div className="row mt-5">
          <div className="col-md-3 mt-3 ">
            <UserMenu></UserMenu>
          </div>
          <div className="col-md-9 mt-3">
            <h1> All Orders</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
