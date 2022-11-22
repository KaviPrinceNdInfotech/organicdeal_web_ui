import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SecondBigBanner from '../Screens/SecondBigBanner'

function BigBanner() {
  const [bigBanner, setBigBanner] = useState([])
  useEffect(() => {
    axios.get('https://testimonialapi.toolcarton.com/api')
      .then((response) => {
        
        setBigBanner(response.data);
      
      })
  }, [])
  return (
    <>
      <section className="collection-banner b-g-white section-py-space">
        <div className="custom-container">
          <div className="row collection-p5">
            <div className="col-12 ">
              <div className="row">
              {bigBanner.map((item, index) => {
                    console.log('data.item')
                    return (
                <div className="col-md-6 mt-2">
                  <div className="collection-banner-main p-left   banner-13 banner-style8 text-center">
                    <div className="collection-img">
                      <img
                        src="../assets/images/grocery/collection-banner/1.jpg"
                        className="img-fluid bg-img"
                        alt="banner"
                      />
                    </div>
                    <div className="collection-banner-contain ">
                      <div>
                        <h3>up to 60% off</h3>
                        <h4>healthy &amp; tasty</h4>
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-rounded btn-xs"
                        >
                          shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>   )
            })}
                
              
              </div>
           
            </div>
            <SecondBigBanner/>
          </div>
        </div>
      </section>

    </>
  )
}

export default BigBanner
