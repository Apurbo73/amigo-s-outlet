import React from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Header></Header>
      {/* Basic SEO */}

      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />

        <title>{title}</title>
      </Helmet>
      <main style={{ minHeight: "70vh" }}>
        <Toaster />

        {children}
      </main>
      <Footer></Footer>
    </div>
  );
};

//Basic SEO
Layout.defaultProps = {
  title: "Amigo's Outlet- Shop Now",
  description: "The Best E-Commerce Platform Near You!!!",
  keywords: "laptop, shirt,macbook,shop, ecommerce,shopping",
  author: "Team Amigos",
};

export default Layout;
