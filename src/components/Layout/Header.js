import React from "react";
import { NavLink, Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../context/cart";
import { Badge } from "antd";
const Header = () => {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const [cart] = useCart();
  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: ""
    });
    localStorage.removeItem("auth");
    toast.success("LogOut Successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div style={{ display: "flex" }}>
              <Link to="/" className="navbar-brand" href="#"> 
                <HiShoppingCart /> Amigo's
                <span style={{ color: "orange", marginLeft:10 }}>Outlet</span>
              </Link>
              <Link to="/" className="navbar-brand sylheti-brand" href="#">
                <span style={{ color: "teal" }}>Sylheti</span> Brand
                <HiShoppingCart />
              </Link>
            </div>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="m-1">
                <SearchInput></SearchInput>
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>

              {/* setting categories dropdown button: */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </Link>

                {categories?.map((c) => (
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="#">
                        {c.name}
                      </Link>
                      <Link>Other categories not coming</Link>
                    </li>
                  </ul>
                ))}
              </li>

              <li className="nav-item"></li>

              {
                // Checking if there is a user to handle showing register, sign in and logging out button
                !auth.user ? (
                  <>
                    <li className="nav-item">
                      <NavLink to="/register" className="nav-link">
                        Register
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link">
                        SignIn
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {auth?.user?.name}
                      </NavLink>
                      <ul
                        style={{ backgroundColor: "orange", color: "#ffff" }}
                        className="dropdown-menu"
                      >
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to={`/dashboard/${
                              auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                          >
                            Dashboard
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            className="dropdown-item"
                            onClick={handleLogOut}
                            to="/login"
                          >
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </>
                )
              }

              <li className="nav-item mx-2">
                <Badge count={cart?.length} showZero>
                  <NavLink to="/cart" className="nav-link">
                    <HiShoppingCart /> Cart 
                  </NavLink>
                </Badge>
              </li>

              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
