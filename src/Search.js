import React from "react";
import Layout from "./components/Layout";
import { useSearch } from "./components/context/search";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [values, setvalues] = useSearch();
  const navigate = useNavigate();
  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6 className="text-success ">
            {values?.results.length < 1
              ? "No Products Found"
              : ` ${values?.results.length} Products Found`}
          </h6>
          <div className="d-flex flex-wrap mb-5 mt-5">
            {values?.results.map((p) => (
              <div className="card m-2 text-dark" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>

                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text">{p.price} Taka</p>
                </div>
                <div className="d-flex ">
                  <button
                    onClick={() => navigate(`/product/${p.slug}`)}
                    class="btn btn-warning m-3"
                  >
                    See detail
                  </button>
                  <button to="" class="btn btn-primary m-3">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
