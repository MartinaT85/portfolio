import * as React from "react";
import { Link } from "gatsby";
import Seo from "./Seo";

const Layout = ({
  children,
  title = false,
  desc = false,
  img = false,
  path = false,
}) => {
  return (
    <>
      <Seo title={title} description={desc} image={img} path={path} />
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
