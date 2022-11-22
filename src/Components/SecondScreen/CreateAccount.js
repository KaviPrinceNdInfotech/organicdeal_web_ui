import React from 'react'
import {Link} from "react-router-dom"

function CreateAccount() {
  return (
   <>
   <>
  <div className="breadcrumb-main ">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="breadcrumb-contain">
            <div>
              <h2>register</h2>
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <i className="fa fa-angle-double-right" />
                </li>
                <li>
                  <Link to="/createaccount">register</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* breadcrumb End */}
  {/*section start*/}
  <section className="login-page section-big-py-space b-g-light">
    <div className="custom-container">
      <div className="row">
        <div className="col-lg-4 offset-lg-4">
          <div className="theme-card">
            <h3 className="text-center">Create account</h3>
            <form className="theme-form">
              <div className="row g-3">
                <div className="col-md-12 form-group">
                  <label htmlFor="email">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fname"
                    placeholder="First Name"
                    required=""
                  />
                </div>
                <div className="col-md-12 form-group">
                  <label htmlFor="review">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lname"
                    placeholder="Last Name"
                    required=""
                  />
                </div>
              </div>
              <div className="row g-3">
                <div className="col-md-12 form-group">
                  <label>email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="col-md-12 form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required=""
                  />
                </div>
                <div className="col-md-12 form-group">
                  <a href="javascript:void(0)" className="btn btn-normal">
                    create Account
                  </a>
                </div>
              </div>
              <div className="row g-3">
                <div className="col-md-12 ">
                  <p>
                    Have you already account?{" "}
                    <Link to="/login" className="txt-default">
                      click
                    </Link>{" "}
                    here to &nbsp;
                    <Link to="/login" className="txt-default">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Section ends*/}
</>

   </>
  )
}

export default CreateAccount
