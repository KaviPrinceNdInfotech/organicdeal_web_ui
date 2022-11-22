import React from 'react'

function HomeSlider() {
  return (
    <>
      <section className=" section-pb-space  grocery-slide  home-slide">
        <div className="custom-container">
      

            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="false"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={0}
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={1}
                  aria-label="Slide 2"
                />
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={2}
                  aria-label="Slide 3"
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://api.gyros.farm/Images/2..jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className='-mt-10 text-red-500'>First slide label</h5>
                    <p className='-mt-10 text-red-500'>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://api.gyros.farm/Images/banner%20gyros%204.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption ">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://api.gyros.farm/Images/banner%20gyros1.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>


            {/* <div className="col-md-12 ">
        <div className="slide-3 no-arrow">
        
          <div className='p-2'>
            <div className="slide-main ">
              <img
                src="../assets/images/grocery/slider/bg.jpg"
                className="img-fluid bg-img "
                alt="grocery-slider"
              />
              
              
            </div>
          </div>
        </div>
      </div> */}
          
        </div>
      </section>
    </>
  )
}

export default HomeSlider
