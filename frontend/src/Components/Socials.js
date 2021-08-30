// Importing Helpers
import React from "react";

// Functional Component
const Socials = () => {
  return (
    <div className="d-flex flex-row justify-content-between bg-dark my-3">
      <div className="p-2">
        <h3 className="text-white">Follow us on social media!</h3>
      </div>
      <div className="p-2">
        <span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com"
            style={{ fontSize: "42px", color: "white", margin: "10px" }}
          >
            <i className="fab fa-facebook-square"></i>
          </a>
        </span>
        <span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.twitter.com"
            style={{ fontSize: "42px", color: "white", margin: "10px" }}
          >
            <i className="fab fa-twitter-square"></i>
          </a>
        </span>
        <span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com"
            style={{ fontSize: "42px", color: "white", margin: "10px" }}
          >
            <i className="fab fa-instagram-square"></i>
          </a>
        </span>
        <span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.pinterest.com"
            style={{ fontSize: "42px", color: "white", margin: "10px" }}
          >
            <i className="fab fa-pinterest-square"></i>
          </a>
        </span>
        <span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.unsplash.com"
            style={{ fontSize: "42px", color: "white", margin: "10px" }}
          >
            <i className="fab fa-unsplash"></i>
          </a>
        </span>
      </div>
    </div>
  );
};

// Default Export
export default Socials;
