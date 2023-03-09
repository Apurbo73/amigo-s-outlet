import React from "react";
import { useState } from "react";
import Layout from "../../components/Layout";
import image from "../../images/login.jpg";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../components/context/auth";
// import { set } from "mongoose";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // Handling form default activities e.g.: refresh on button clicks
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/login`, {
        email,
        password,
      });

      if (res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });

        //storing the data in local storage:
        localStorage.setItem("auth", JSON.stringify(res.data));
        //setting data for remember me session at local storage:
        localStorage.setItem("isloggedIn", true);
        const isloggedIN= localStorage.getItem('isloggedIn');
        console.log(isloggedIN);
        // j location e jaite chay tar state already thakle niye jabe
        //  na hole unauthorized user hole age login korte hobe then shei state e jete parbe
        navigate(isloggedIN ? location.state || "/" : "/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid Email or Password !!");
    }
  };
  return (
    <Layout title={"Login To Amigo's Outlet"}>



  <div style={{backgroundColor:'#FEF5E2'}} className="mt-5  h-full">
    hi
  <div className="register mt-5 mb-5 shadow-lg p-3 mb-5 bg-white rounded w-50 mx-auto border-rounded ">
        <div className="d-none d-sm-none mt-5 mb-5  d-md-block ">
          <img className="h-100 " src={image} alt="" />
        </div>

        <div>
          <div style={{backgroundColor:'#FFFFFF'}} className="m-1 mt-5 ">
            <h3 className="text-center mt-5">Sign In !!</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-1">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="mb-3 form-check"></div>
              <button type="submit" className="btn btn-primary w-100 mb-3">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-outline-success w-100"
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forgot Password?
              </button>
              <p style={{ textAlign: "center" }}>Or</p>
              <button type="submit" className="btn btn-warning w-100">
                Continue With Google
              </button>

              <Link
                to="/register"
                className="text-center"
                style={{ textDecoration: "none",  }}
              >
                New to Amigo's Outlet? Register here
              </Link>
            </form>
          </div>
        </div>
      </div>
  </div>
    </Layout>
  );
};

export default Login;
