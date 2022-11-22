import React from 'react'
import {Link} from "react-router-dom"

function Checkout() {
  return (
   <>
   <div className="breadcrumb-main ">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="breadcrumb-contain">
          <div>
            <h2>checkout</h2>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <i className="fa fa-angle-double-right" />
              </li>
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<section className="section-big-py-space b-g-light">
  <div className="custom-container">
    <div className="checkout-page contact-page">
      <div className="checkout-form">
        <form>
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="checkout-title">
                <h3>Billing Details</h3>
              </div>
              <div className="theme-form">
                <div className="row check-out ">
                  <div className="form-group col-md-6 col-sm-6 col-xs-12">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="field-name"
                      defaultValue=""
                      placeholder=""
                    />
                  </div>
                  <div className="form-group col-md-6 col-sm-6 col-xs-12">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="field-name"
                      defaultValue=""
                      placeholder=""
                    />
                  </div>
                  <div className="form-group col-md-6 col-sm-6 col-xs-12">
                    <label className="field-label">Phone</label>
                    <input
                      type="text"
                      name="field-name"
                      defaultValue=""
                      placeholder=""
                    />
                  </div>
                  <div className="form-group col-md-6 col-sm-6 col-xs-12">
                    <label className="field-label">Email Address</label>
                    <input
                      type="text"
                      name="field-name"
                      defaultValue=""
                      placeholder=""
                    />
                  </div>
                  <div className="form-group col-md-12 col-sm-12 col-xs-12">
                    <label className="field-label">Country</label>
                    <select>
                      <option>India</option>
                      <option>South Africa</option>
                      <option>United State</option>
                      <option>Australia</option>
                    </select>
                  </div>
                  <div className="form-group col-md-12 col-sm-12 col-xs-12">
                    <label className="field-label">Address</label>
                    <input
                      type="text"
                      name="field-name"
                      defaultValue=""
                      placeholder="Street address"
                    />
                  </div>
                  <div className="form-group col-md-12 col-sm-12 col-xs-12">
                    <label className="field-label">Town/City</label>
                    <input
                      type="text"
                      name="field-name"
                      defaultValue=""
                      placeholder=""
                    />
                  </div>
                  <div className="form-group col-md-12 col-sm-6 col-xs-12">
                    <label className="field-label">State / County</label>
                    <input
                      type="text"
                      name="field-name"
                      defaultValue=""
                      placeholder=""
                    />
                  </div>
                  <div className="form-group col-md-12 col-sm-6 col-xs-12">
                    <label className="field-label">Postal Code</label>
                    <input
                      type="text"
                      name="field-name"
                      defaultValue=""
                      placeholder=""
                    />
                  </div>
                  <Link to="/createaccount">
                  <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <input
                      type="checkbox"
                      name="shipping-option"
                      id="account-option"
                    />{" "}
                     <label htmlFor="account-option">Create An Account?</label>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div className="checkout-details theme-form  section-big-mt-space">
                <div className="order-box">
                  <div className="title-box">
                    <div>
                      Product <span>Total</span>
                    </div>
                  </div>
                  <ul className="qty">
                    <li>
                      Pink Slim Shirt × 1 <span>$25.10</span>
                    </li>
                    <li>
                      SLim Fit Jeans × 1 <span>$555.00</span>
                    </li>
                  </ul>
                  <ul className="sub-total">
                    <li>
                      Subtotal <span className="count">$380.10</span>
                    </li>
                    <li>
                      Shipping
                      <div className="shipping">
                        <div className="shopping-option">
                          <input
                            type="checkbox"
                            name="free-shipping"
                            id="free-shipping"
                          />
                          <label htmlFor="free-shipping">Free Shipping</label>
                        </div>
                        <div className="shopping-option">
                          <input
                            type="checkbox"
                            name="local-pickup"
                            id="local-pickup"
                          />
                          <label htmlFor="local-pickup">Local Pickup</label>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="total">
                    <li>
                      Total <span className="count">$620.00</span>
                    </li>
                  </ul>
                </div>
                <div className="payment-box">
                  <div className="upper-box">
                    <div className="payment-options">
                      <ul>
                        <li>
                          <div className="radio-option">
                            <input
                              type="radio"
                              name="payment-group"
                              id="payment-1"
                              defaultChecked="checked"
                            />
                            <label htmlFor="payment-1">
                              Check Payments
                              <span className="small-text">
                                Please send a check to Store Name, Store Street,
                                Store Town, Store State / County, Store
                                Postcode.
                              </span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="radio-option">
                            <input
                              type="radio"
                              name="payment-group"
                              id="payment-2"
                            />
                            <label htmlFor="payment-2">
                              Cash On Delivery
                              <span className="small-text">
                                Please send a check to Store Name, Store Street,
                                Store Town, Store State / County, Store
                                Postcode.
                              </span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="radio-option paypal">
                            <input
                              type="radio"
                              name="payment-group"
                              id="payment-3"
                            />
                            <label htmlFor="payment-3">PayPal</label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-right">
                    <a href="javascript:void(0)" className="btn-normal btn">
                      Place Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default Checkout
