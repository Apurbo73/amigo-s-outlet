import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../../../client/src/images/upay.jpg";
import image2 from "../../../../client/src/images/BKash.png";
import image3 from "../../../../client/src/images/master card.jpg";
import image4 from "../../../../client/src/images/Payoneer.png";
import image5 from "../../../../client/src/images/nogod.png";

const Footer = () => {
  return (
    <div
      style={{ minHeight: "40vh" }}
      className="footer  text-light p-3 text-center"
    >
      <div>
        <div className="row">
          <div className="col">
            <ul
              className="d-flex  flex-column"
              style={{ textAlign: "justify", lineHeight: 2.5 }}
            >
              <p
                style={{ color: "#F0C797", fontSize: 14 }}
                className="text-left"
              >
                ABOUT
              </p>

              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                About Us
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Careers
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Amigo's Stories
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Motivation
              </Link>
            </ul>
          </div>
          <div className="col">
            <ul
              className="d-flex  flex-column"
              style={{ textAlign: "justify", lineHeight: 2.5 }}
            >
              <p
                style={{ color: "#F0C797", fontSize: 16 }}
                className="text-left"
              >
                HELP
              </p>

              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Contact Us
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                About Us
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Careers
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Amigo's Stories
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Motivation
              </Link>
            </ul>
          </div>
          <div className="col">
            <ul
              className="d-flex  flex-column"
              style={{ textAlign: "justify", lineHeight: 2.5 }}
            >
              <p
                style={{ color: "#F0C797", fontSize: 16 }}
                className="text-left"
              >
                POLICY
              </p>

              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Contact Us
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                About Us
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Careers
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Amigo's Stories
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Motivation
              </Link>
            </ul>
          </div>
          <div className="col">
            <ul
              className="d-flex  flex-column"
              style={{ textAlign: "justify", lineHeight: 2.5 }}
            >
              <p
                style={{ color: "#F0C797", fontSize: 16 }}
                className="text-left"
              >
                SOCIAL
              </p>

              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Contact Us
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                About Us
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Careers
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Amigo's Stories
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Motivation
              </Link>
            </ul>
          </div>
          <div className="col">
            <ul
              className="d-flex  flex-column"
              style={{ textAlign: "justify", lineHeight: 2.5 }}
            >
              <p
                style={{ color: "#F0C797", fontSize: 16 }}
                className="text-left"
              >
                Mail Us
              </p>

              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Contact Us
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                About Us
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Careers
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Amigo's Stories
              </Link>
              <Link
                style={{ textDecoration: "none", color: "#fff", fontSize: 12 }}
              >
                Motivation
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <hr />

      <h5 style={{ marginBottom: 50 }}>
        All Right Reserved &copy; Amigo's Outlet Limited
      </h5>
      <hr />
      <div>
        <div className="row g-2 ">
          <div className="col">
            <img style={{ width: 200, height: 100 }} src={image1} alt="" />
          </div>
          <div className="col">
            <img style={{ width: 200, height: 100 }} src={image5} alt="" />
          </div>
          <div className="col">
            <img
              style={{ width: 200, height: 100, background: "#ffff" }}
              src={image2}
              alt=""
            />
          </div>
          <div className="col">
            <img style={{ width: 200, height: 100 }} src={image3} alt="" />
          </div>
          <div className="col">
            <img
              style={{ width: 200, height: 100, background: "#ffff" }}
              src={image4}
              alt=""
            />
          </div>
          <div className="col">
            <img
              style={{ width: 200, height: 100, background: "#ffff" }}
              src={image5}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* new gutter */}
      {/* <div className="">
        <div className="row row-cols-2 row-cols-md-3 g-2 row-cols-lg-6 g-0 g-lg-3">
          <div className="col">
            <div className="p-3  ">
              <img
                style={{ width: 200, height: 100, background: "#ffff" }}
                src={image5}
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div className="p-3  ">
             
              <img
                style={{ width: 200, height: 100, background: "#ffff" }}
                src={image4}
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div className="p-3  ">
         
              <img
                style={{ width: 200, height: 100, background: "#ffff" }}
                src={image3}
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div className="p-3  ">
            
              <img
                style={{ width: 200, height: 100, background: "#ffff" }}
                src={image2}
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div className="p-3  ">
              
              <img
                style={{ width: 200, height: 100, background: "#ffff" }}
                src={image1}
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div className="p-3  ">Row column</div>
          </div>
          <div className="col">
            <div className="p-3  ">Row column</div>
          </div>
          <div className="col">
            <div className="p-3  ">Row column</div>
          </div>
          <div className="col">
            <div className="p-3  ">Row column</div>
          </div>
          <div className="col">
            <div className="p-3  ">Row column</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
