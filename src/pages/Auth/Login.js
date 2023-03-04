import React from "react";
import { useState } from "react";
import Layout from "../../components/Layout";
import image from "../../images/universe.jpg";
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
        // j location e jaite chay tar state already thakle niye jabe
        //  na hole unauthorized user hole age login korte hobe then shei state e jete parbe
        navigate(location.state || "/");
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
      <div className="register m-5">
        <div className="d-none d-sm-none  d-md-block m-5">
          <img src={image} alt="" />
        </div>

        <div>
          <div className="m-5">
            <h1>Login To Amigo's Outlet !!</h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
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

              <div className="mb-3">
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
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-warning w-100"
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forgot Password?
              </button>
              <p style={{ textAlign: "center" }}>Or</p>
              <button type="submit" className="btn btn-danger w-100">
                Continue With Google
              </button>

              <Link
                to="/register"
                style={{ textDecoration: "none", textAlign: "center" }}
              >
                New to Amigo's Outlet? Register here
              </Link>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
