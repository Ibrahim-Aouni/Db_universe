import React from "react";

const Footer = () => (
  <footer
    className="page-footer font-small  pt-4"
    style={{ backgroundColor: "black" }}
  >
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f82cc357-e354-4ef7-8b2d-647f6f756800/d8vx5uc-507852a3-35ce-46cd-8a58-60f31964a978.png/v1/fill/w_1024,h_494,strp/dragon_ball___logo_by_shikomt_by_shikomt_d8vx5uc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDk0IiwicGF0aCI6IlwvZlwvZjgyY2MzNTctZTM1NC00ZWY3LThiMmQtNjQ3ZjZmNzU2ODAwXC9kOHZ4NXVjLTUwNzg1MmEzLTM1Y2UtNDZjZC04YTU4LTYwZjMxOTY0YTk3OC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KKxzn5nHk0NC9bReCLq5xZWX3BOFDqLXsqsPH-DVeis"
            style={{ width: "300px" }}
          />
          <p>
            Here you can use rows and columns to organize your footer content.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Home</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#!">About us</a>
            </li>
            <li>
              <a href="#!">Services</a>
            </li>
            <li>
              <a href="#!">Privacy policy</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">OUR SERVICES</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Web Design</a>
            </li>
            <li>
              <a href="#!">Web Development</a>
            </li>
            <li>
              <a href="#!">Product Management</a>
            </li>
            <li>
              <a href="#!">Marketing</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="https://mdbootstrap.com/"> </a>
    </div>
  </footer>
);

export default Footer;
