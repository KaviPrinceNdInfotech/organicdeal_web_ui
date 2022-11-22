import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
  return (
   <>
   <footer>
  <div className="footer1">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer-main">
            <div className="footer-box">
              <div className="footer-title mobile-title">
                <h5>about</h5>
              </div>
              <div className="footer-contant">
                <div className="footer-logo">
                  <Link to="/">
                    <img
                      src="../assets/images/grocery/logo1.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </Link>
                </div>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <ul className="sosiyal">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-rss" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-box">
              <div className="footer-title">
                <h5>my account</h5>
              </div>
              <div className="footer-contant">
                <ul>
                  <li>
                    <Link to="/about">about us</Link>
                  </li>
                  <li>
                    <Link to="/contactus">contact us</Link>
                  </li>
                  <li>
                    <a href="javascript:void(0)">terms &amp; conditions</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">returns &amp; exchanges</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">shipping &amp; delivery</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-box">
              <div className="footer-title">
                <h5>quick link</h5>
              </div>
              <div className="footer-contant">
                <ul>
                  <li>
                    <a href="javascript:void(0)">store location</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"> my account</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"> orders tracking</a>
                  </li>
                  <li>
                    <Link to="/faq">FAQ </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-box">
              <div className="footer-title">
                <h5>contact us</h5>
              </div>
              <div className="footer-contant">
                <ul className="contact-list">
                  <li>
                    <i className="fa fa-map-marker" />
                    Organic Deal Kisan ki Apni Dukan <br /> india-<span>xxxxxxx378</span>
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    call us: <span>xxxxxxx378</span>
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" />
                    email us: ndinfotech@gmail.com
                  </li>
                  <li>
                    <i className="fa fa-fax" />
                    fax <span>xxxxxxx378</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="subfooter footer-border">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-md-8 col-sm-12">
          <div className="footer-left">
            <p>2022-23  Powered by Nd infotech</p>
          </div>
        </div>
        <div className="col-xl-6 col-md-4 col-sm-12">
          <div className="footer-right">
            <ul className="payment">
              <li>
                <a href="javascript:void(0)">
                  <img
                    src="../assets/images/layout-1/pay/1.png"
                    className="img-fluid"
                    alt="pay"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    src="../assets/images/layout-1/pay/2.png"
                    className="img-fluid"
                    alt="pay"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    src="../assets/images/layout-1/pay/3.png"
                    className="img-fluid"
                    alt="pay"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    src="../assets/images/layout-1/pay/4.png"
                    className="img-fluid"
                    alt="pay"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    src="../assets/images/layout-1/pay/5.png"
                    className="img-fluid"
                    alt="pay"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

   </>
  )
}

export default Footer
