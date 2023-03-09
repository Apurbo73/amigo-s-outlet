import React from "react";
import Layout from "./../components/Layout";
import useCategory from "../hooks/useCategory";
import { Link } from "react-router-dom";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout className="mt-5" title={"All categories"}>
      <h1 className="mt-5 pt-5 text-center">All categories</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex flex-wrap ">
            {categories.map((c) => ( 
              <button className="btn  my-4 mx-4  button-animation" key={c._id}>
                <Link to={`/category/${c.slug}`} className="btn  p-3"> {c.name}</Link>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
