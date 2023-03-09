import React, { useState } from "react";
import Layout from "../../components/Layout";
import signup from "../../images/signup.jpg";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import image from "../../images/login.jpg";

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
        answer
      });

      if (res.data.success) {
        toast.success(
          "SuccessFully Registered. Please check You Mail To Verify"
        );
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
      <div className="mt-5 " style={{ backgroundColor: "#FEF5E2" }}>
        hi
        <div className="register mt-5 w-75 mx-auto shadow-lg p-3 mb-5 bg-white rounded h-100 ">
          <div className="d-none d-sm-none  d-md-block  mt-5">
            <img className="h-100 " src={image} alt="" />
          </div>

          <div>
            <div style={{ backgroundColor: "#ffff" }} className="mt-5 p-1 ">
              <h4 className="text-center">Create Account !!</h4>

              <form onSubmit={handleSubmit}>
                <div className="mb-1 h-100">
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
                <div className="mb-1">
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
                <div className="mb-1">
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
                <div className="mb-1">
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
                <div className="">
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

                <div className=" form-check"></div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
                <p style={{fontSize:12}}>By clicking submit you are agree to Amigo's Terms and  Policy</p>

                <p style={{ textAlign: "center" }}>Or</p>
                <button type="submit" className="btn btn-outline-danger w-100">
                  Continue With Google
                </button>
                <Link
                  to="/login"
                  className="text-center"
                  style={{ textDecoration: "none", textAlign: "center" }}
                >
                  Already Registered? Log in here
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
