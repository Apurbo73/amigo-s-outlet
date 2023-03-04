import React, { useState } from "react";
import Layout from "../../components/Layout";
import image from "../../images/universe.jpg";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // Handling form default activities
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/register`, {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Wemt Wrong !!");
    }
  };

  return (
    <Layout title={"Register To Amigo's Outlet"}>
      <div className="register m-5">
        <div className="d-none d-sm-none  d-md-block m-5">
          <img src={image} alt="" />
        </div>

        <div>
          <div className="">
            <h1>Register Yourself !!</h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your name"
                  required
                />
              </div>
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
              <div className="mb-3">
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your address"
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
                  aria-describedbaty="emailHelp"
                  placeholder="What is your favourite place"
                  required
                />
              </div>

              <div className="mb-3 form-check"></div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
              <p style={{ textAlign: "center" }}>Or</p>
              <button type="submit" className="btn btn-danger w-100">
                Continue With Google
              </button>
              <Link
                to="/login"
                style={{ textDecoration: "none", textAlign: "center" }}
              >
                Already Registered? Log in here
              </Link>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
