import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
const Spinner = ({path= "login"}) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((previousValue) => --previousValue);
    }, 1000);
    count === 0 && navigate(`/${path}`,{
        state: location.pathname,
    })
    return () => clearInterval(interval)
  }, [count, navigate,location,path])
  return (
    <>
      <div className="m-5 d-flex flex-column">
        <div
          className="justify-content-center mx-auto align-items-center p-5 m-5"
          style={{ height: "100vh" }} >
        <div className="text-center"><h1>Redirecting to you in {count} seconds </h1></div>

          <div className="spinner-grow text-primary m-4" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary m-4" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success m-4" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger m-4" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning m-4" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-info m-4" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          {/* <div className="spinner-grow text-light m-4" role="status">
            <span className="visually-hidden">Loading...</span>
          </div> */}
          <div className="spinner-grow text-dark m-4" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>



      </div>
    </>
  );
};

export default Spinner;
