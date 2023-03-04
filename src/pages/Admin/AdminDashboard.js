import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout";
import { useAuth } from "../../components/context/auth";
const AdminDashboard = () => {
  // destructuring useAuth:
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="div container-fluid mt-5 p-3">
        <div className="row mt-3">
          <div className="col-md-3">
            <AdminMenu></AdminMenu>
          </div>

          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h5>
                <span style={{ fontWeight: 700 }}> Name : </span>
                {auth?.user?.name}
              </h5>
              <h5>
                <span style={{ fontWeight: 700 }}> Contact : </span>
                {auth?.user?.phone}
              </h5>
              <h5>
                <span style={{ fontWeight: 700 }}> Email : </span>
                {auth?.user?.email}
              </h5>
              <h5>
                <span style={{ fontWeight: 700 }}> Address : </span>
                {auth?.user?.address}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
