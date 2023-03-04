import React from "react";
import UserMenu from "../components/Layout/UserMenu";
import Layout from "./../components/Layout";

const Profile = () => {
  return (
    <Layout title={"User Profile"}>
      <div className="container-fluid p-3 mt-5">
        <div className="row">
          <div className="col-md-3">
            <UserMenu></UserMenu>
          </div>
          <div className="col-md-9">
            <h1> Your Profile</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
