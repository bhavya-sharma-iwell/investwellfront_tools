import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../media/css/main.css";
const Main = () => {
  return (
    <>
    <title>Tools</title>
      <nav>
        <ul className="buttoncontainer">
          <Link
            to="/invoiceGenerator"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <li className="button">Tax Invoice Generator </li>
          </Link>
          <Link
            to="/portfolioCorrelation"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
          
            <li className="button">Portfolio Correlation </li>
          </Link>
          <Link
            to="/portfolioOverlap"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            
            <li className="button">Portfolio Overlap </li>
          </Link>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Main;
