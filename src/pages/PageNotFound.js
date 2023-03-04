import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import image from "../images/universe.jpg";

const PageNotFound = () => {
  return (
    <Layout title={"Go back- Page not found"}>
      <div className="mt-5 mb-5">
        <div className="card text-center mx-auto " style={{ width: "30rem" }}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              You are out of the Amigo's Outlet universe! <br />
              Search something Releavent!
            </p>
            <Link to="/" className="btn btn-primary">
              Explore Our Mega Collection!!
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
