import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout";

const UsersList = () => {
  return (
    <Layout title={"Dashboard- All Users"}>
      <div className="row p-5 m-5">
        <div className="col-md-3">

            <AdminMenu></AdminMenu>
        </div>
        <div className="col-md-9">
            <h5>All Users</h5>
        </div>
      </div>
    </Layout>
  );
};

export default UsersList;
