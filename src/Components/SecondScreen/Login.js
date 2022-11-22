import React from 'react'
import {Link} from "react-router-dom"

function Login() {
  return (
    <>
    
    <div className="breadcrumb-main ">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="breadcrumb-contain">
            <div>
              <h2>Login</h2>
              <ul>
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <i className="fa fa-angle-double-right" />
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



  <section className="login-page section-big-py-space b-g-light">
    <div className="custom-container">
        <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-8 offset-xl-4 offset-lg-3 offset-md-2">
                <div className="theme-card">
                    <h3 className="text-center">Login</h3>
                    <form className="theme-form">
                        <div className="form-group">
                            <label >Email</label>
                            <input type="text" className="form-control"  placeholder="Email" required=""/>
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control"  placeholder="Enter your password" required=""/>
                        </div>
                        <a href="javascript:void(0)" class="btn btn-normal">Login</a>
                        <Link to="/forgatepassword" className="float-end txt-default mt-2" >Forgot your password?</Link>
                    </form>
                    <p className="mt-3">Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                    <Link to="/createaccount" className="txt-default pt-3 d-block">Create an Account</Link>
                </div>
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default Login
