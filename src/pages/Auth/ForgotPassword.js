import React from "react";
import { useState } from "react";
import Layout from "../../components/Layout";
import image from "../../images/universe.jpg";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // Handling form default activities e.g.: refresh on button clicks
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/forgot-password`, {
        email,
        newPassword,
        answer,
      });

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !!");
    }
  };
  return (
    <Layout title={"Reset Your Password"}>
      <div className="register m-5">
        <div className="d-none d-sm-none  d-md-block m-5">
          <img src={image} alt="" />
        </div>

        <div>
          <div className="m-5">
            <h1>Reset Your Password !!</h1>

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
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter the place you used for register (case sensitive)"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your new password"
                  required
                />
              </div>

              <div className="mb-3 form-check"></div>
              <button type="submit" className="btn btn-primary w-100">
                Reset Password
              </button>

              <Link
                to="/login"
                style={{ textDecoration: "none", textAlign: "center" }}
              >
                Sign In
              </Link>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
