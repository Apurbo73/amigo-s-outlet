// import React from "react";
// import { useAuth } from "../components/context/auth";
// import Layout from "../components/Layout";
// import UserMenu from "../components/Layout/UserMenu"
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// const Profile = () => {
//   //Context:
//   const [auth, setAuth] = useAuth();

//   //States:
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [password, setPassword] = useState("");

//   //Getting user data:
//   useEffect(() => {
//     const { name, email, phone, address } = auth?.user;
//     setName(name);
//     setEmail(email);
//     setPhone(phone);
//     setAddress(address);
//     // setPassword(password);
//   }, [auth?.user]);
//   // Handling form default activities
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.put(`/api/v1/auth/profile`, {
//         name,
//         email,
//         phone,
//         password,
//         address
//       });

//       if (data?.error) {
//         toast.error(data?.error);
//       } else {
//         setAuth({ ...auth, user: data?.updatedUser });
//         let lS = localStorage.getItem("auth");
//         lS = JSON.parse(lS);
//         lS.user = data.updatedUser;
//         localStorage.setItem("auth", JSON.stringify(lS));
//         toast.success("Product Updated Successfully");
//       }

//       // if (res.data.success) {
//       //   toast.success(res.data.message);
//       // } else {
//       //   toast.error(res.data.message);
//       // }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something Wemt Wrong !!");
//     }
//   };
//   return (
//     <Layout title={"User Profile"}>
//       <div className="container-fluid  p-3 mt-5">
//         <div className="row">
//           <div className="col-md-3">
//             <UserMenu></UserMenu>
//           </div>
//           <div className="col-md-9">
//             <div className="register m-5">
//               <div>
//                 <div className="">
//                   <h1>Your Profile !!</h1>

//                   <form onSubmit={handleSubmit}>
//                     <div className="mb-3 w-full">
//                       <input
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         type="text"
//                         className="form-control"
//                         id="exampleInputEmail1"
//                         aria-describedby="emailHelp"
//                         placeholder="Enter your name"
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <input
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         type="email"
//                         className="form-control"
//                         id="exampleInputEmail1"
//                         aria-describedby="emailHelp"
//                         placeholder="Enter your email"
//                         disabled
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <input
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         type="password"
//                         className="form-control"
//                         id="exampleInputPassword1"
//                         placeholder="Enter your password"
//                       />
//                     </div>

//                     <div className="mb-3">
//                       <input
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                         type="text"
//                         className="form-control"
//                         id="exampleInputEmail1"
//                         aria-describedby="emailHelp"
//                         placeholder="Enter your phone number"
//                       />
//                     </div>
//                     <div className="mb-3">
//                       <input
//                         value={address}
//                         onChange={(e) => setAddress(e.target.value)}
//                         type="text"
//                         className="form-control"
//                         id="exampleInputEmail1"
//                         aria-describedby="emailHelp"
//                         placeholder="Enter your address"
//                       />
//                     </div>

//                     <div className="mb-3 form-check"></div>
//                     <button type="submit" className="btn btn-primary w-100">
//                       Update
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from "react";
import { useAuth } from "../components/context/auth";
import Layout from "../components/Layout";
import UserMenu from "../components/Layout/UserMenu";
import axios from "axios";
import { toast } from "react-hot-toast";
const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("/api/v1/auth/profile", {
        name,
        email,
        password,
        phone,
        address
      });
      if (data?.errro) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid m-3 p-3 dashboard mt-5">
        <div className="row mt-5">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-8">
            <div className="form-container mt-5" style={{ marginTop: "-40px" }}>
              <form onSubmit={handleSubmit}>
                <h4 className="title">USER PROFILE</h4>
                <div className="mb-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Name"
                    autoFocus
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Email "
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Phone"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Address"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
