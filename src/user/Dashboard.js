import React from "react";
import Layout from "../components/Layout";
import { useAuth } from "../components/context/auth";
import UserMenu from "../components/Layout/UserMenu";
const Dashboard = () => {
  //destructuring useAuth:
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard- User Profile"}>
      <div className="container-fluid p-3 ">
        <div className="row mt-5">
          <div className="col-md-3 mt-5">
            <UserMenu></UserMenu>
          </div>
          <div className="col-md-9 mt-5">
            <div className="card w-75 p-3 ">
              <h3>Name : {auth?.user?.name}</h3>
              <h3>Email : {auth?.user?.email}</h3>
              <h3>Address : {auth?.user?.address}</h3>
              <h3>Mobile : {auth?.user?.phone}</h3>

              {/* <h3>Contact : {auth?.user?.phone}</h3>
              <h3>Address : {auth?.user?.address}</h3> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
