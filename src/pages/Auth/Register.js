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
  const [comPass, setConPass] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();
  // Handling form default activities
  const fromHandler = (event) => {
    event.preventDefault();
    validationHandler();
  }

  const validationHandler = event => {
    // FrontEnd Validation
    const nameReg = /[a-zA-Z-.]/;
    const phoneReg = /((\+88)|(\+88-))?01[3-9][0-9]{8}/
    const passReg = /((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#,*,.,$,@])).{8,20}/


    if(password !== comPass){
      return toast.error("Password & confirm password are not matched");  
    }
    if(!name.match(nameReg)){
      return toast.error("only charchter is allowed in name");
    }
    if(!phone.match(phoneReg)){
      return toast.error("Invalid mobile number");
    }
    if(!password.match(passReg)){
      return toast.error("Atleast 1 digit, 1 character, 1 sepecial character & length 8-20 in password");
    }
    else{
      handleSubmit();
    }

  }


  const handleSubmit = async (e) => {
    

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
              <form onSubmit={fromHandler}>
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
                    id="exampleInputEmail2"
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
                    id="exampleInputPassword3"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div className="mb-1">
                  <input
                    value={comPass}
                    onChange={(e) => setConPass(e.target.value)}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword33"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                
                <div className="mb-1">
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    className="form-control"
                    id="exampleInputEmail5"
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
                    id="exampleInputEmail6"
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
                    id="exampleInputEmail7"
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
