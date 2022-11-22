import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrandingProduct() {
  const [tarndingproduct, setTrandingProduct] = useState([])
  useEffect(() => {
    axios.get('https://testimonialapi.toolcarton.com/api')
      .then((response) => {
        setTrandingProduct(response.data);
      })
  }, [])
  return (
    <>
      <div className="title8  section-big-pt-space">
        <h4>trending Products</h4>
      </div>
      <section className="product section-big-mb-space  p-10">
        <div className="custom-container addtocart_count">
          <div className="row">
            <div className="col-12 pr-0">
              <div className="product-slide-5 product-m no-arrow">
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                  {tarndingproduct.map((item, index) => {
                    console.log(item);
                    return (

                      <div>
                        <div className="product-box ">
                          <div className="product-imgbox">
                            <div className="product-front">
                              <a href="product-page(left-sidebar).html">
                                <img
                                  src="../assets/images/grocery/product/6.jpg"
                                  className="img-fluid  "
                                  alt="product"
                                />
                              </a>
                            </div>
                            <div className="counter-cart">
                              <div className="addtocart_btn">
                                <button
                                  type="button"
                                  className="btn btn-outline btn-cart tooltip-top add-cartnoty"
                                  data-tippy-content="Add to cart"
                                  style={{background: "linear-gradient(to right, #e17200 , #205403)"}}
                                >
                                  {" "}
                                  add to cart{" "}
                                </button>
                                <div className="qty-box cart_qty">
                                  <div className="input-group">
                                    <button
                                      type="button"
                                      className="btn quantity-left-minus"
                                      data-type="minus"
                                      data-field=""
                                    >
                                      <i className="fa fa-minus" aria-hidden="true" />
                                    </button>
                                    <input
                                      type="text"
                                      name="quantity"
                                      className="form-control input-number qty-input"
                                      defaultValue={1}
                                    />
                                    <button
                                      type="button"
                                      className="btn quantity-right-plus"
                                      data-type="plus"
                                      data-field=""
                                    >
                                      <i className="fa fa-plus" aria-hidden="true" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-icon icon-top">
                              <a
                                href="/#"
                                className="add-to-wish tooltip-left"
                                data-tippy-content="Add to Wishlist"
                              >
                                <i data-feather="heart" />
                              </a>
                              <a
                                href="/#"
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view"
                                className="tooltip-left"
                                data-tippy-content="Quick View"
                              >
                                <i data-feather="eye" />
                              </a>
                              <a
                                href="compare.html"
                                className="tooltip-left"
                                data-tippy-content="Compare"
                              >
                                <i data-feather="refresh-cw" />
                              </a>
                            </div>
                            <div className="new-label2">
                              <div>new</div>
                            </div>
                          </div>
                          <div className="product-detail product-detail2 ">
                            <a href="product-page(left-sidebar).html">
                              <h3>White Pepper Powder</h3>
                            </a>
                            <h5>
                              $90
                              <span>$110</span>
                            </h5>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default TrandingProduct
