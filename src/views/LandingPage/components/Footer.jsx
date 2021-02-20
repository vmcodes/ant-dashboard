import React from "react";
import { Row, Col } from "antd";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="landing-footer py-5">
        <Row justify="space-around" className="d-flex">
          <Col className="my-5">
            <h5 className="font-weight-bold text-light">SOCIAL</h5> <br />
            <a href="/" className="text-light h5">
              Facebook
            </a>{" "}
            <br /> <br />
            <a href="/" className="text-light h5">
              LinkedIn
            </a>{" "}
            <br /> <br />
            <a href="/" className="text-light h5">
              Twitter
            </a>{" "}
            <br /> <br />
            <a href="/" className="text-light h5">
              Google
            </a>
          </Col>
          <Col className="my-5">
            <h5 className="font-weight-bold text-light">COMPANY</h5>
            <br />
            <a href="/" className="text-light h5">
              About Us
            </a>{" "}
            <br /> <br />
            <a href="/" className="text-light h5">
              Blog
            </a>{" "}
            <br /> <br />
            <a href="/" className="text-light h5">
              Pricing
            </a>
          </Col>{" "}
          <Col className="my-5">
            <h5 className="font-weight-bold text-light">CONTACT</h5>
            <br />
            <a href="/" className="text-light h5">
              Email
            </a>
            <br /> <br />
            <a href="/" className="text-light h5">
              Location
            </a>{" "}
            <br /> <br />
            <a href="/" className="text-light h5">
              Fax
            </a>
          </Col>{" "}
          <Col className="my-5 text-center">
            <img
              src={require("assets/images/login-icon.png")}
              className="login-logo img-fluid"
              alt="Object Press"
            />{" "}
            <br />
            <a href="/" className="font-weight-bold h3 text-light">
              ObjectPress
            </a>{" "}
            <br /> <br />
            <p className="text-light">
              &copy; 2021 Object Press
              <br />
              All Rights Reserved
            </p>
          </Col>{" "}
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Footer;
