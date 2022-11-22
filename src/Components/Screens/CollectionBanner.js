import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CollectionBanner() {
  const [collection, setCollection] = useState([])
  useEffect(() => {
    axios.get('https://testimonialapi.toolcarton.com/api')
      .then((response) => {
        setCollection(response.data);
      })
  }, [])
  return (
   <>
 <section className="category2 section-mt-space">
  <div className="custom-container">
    <div className="row">
      <div className="col-12 pr-0">
        <div className="category-slide6 no-arrow">
        <div className=" flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
         {collection.map((item, index) => {
                    console.log(item);
                    return (
          <div >
            <a href="category-page(left-sidebar).html" >
              <div className="category-box" style={{background: "linear-gradient(to right,#205403, #e17200)"}}>
                <div>
                  <div className="icon-wrapper" >
                    <svg
                      enableBackground="new 0 0 64 64"
                      viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="m12.853 8c0 12.806 5.126 25.087 14.252 34.142l.274.272c.378.375.89.586 1.425.586h6.392c.535 0 1.047-.211 1.425-.586l.274-.272c9.126-9.055 14.252-21.336 14.252-34.142"
                          fill="#976947"
                        />
                        <path
                          d="m39.606 13.5c0-1.877-.174-3.713-.488-5.5h-26.265c0 11.832 4.385 23.21 12.248 32.016 8.721-5.602 14.505-15.381 14.505-26.516z"
                          fill="#c18e59"
                        />
                        <ellipse
                          cx={32}
                          cy={8}
                          fill="#db9b7c"
                          rx="19.147"
                          ry={6}
                        />
                        <path
                          d="m12.853 8c0 3.314 8.573 6 19.147 6 2.704 0 5.273-.178 7.606-.495 0-.002 0-.004 0-.005 0-3.962-.739-7.75-2.074-11.243-1.753-.166-3.608-.257-5.532-.257-10.575 0-19.147 2.686-19.147 6z"
                          fill="#efbe9a"
                        />
                        <path
                          d="m19.005 31.501c-.659 3.178-.998 6.436-.998 9.73v.385c0 .53.212 1.039.59 1.414l4.52 4.485c.378.375.891.586 1.425.586h.388c1.356 0 2.705-.056 4.046-.167l6.047-.883c9.141-1.923 17.606-6.436 24.314-13.092-1.86 1.845-7.202-.316-13.041-4.942-2.349 4.822-5.512 9.267-9.401 13.126l-.274.272c-.378.374-.89.585-1.425.585h-6.392c-.535 0-1.047-.211-1.425-.586l-.274-.272c-3.212-3.187-5.928-6.773-8.1-10.641z"
                          fill="#442518"
                        />
                        <path
                          d="m50.373 16.58c7.288 7.332 11.294 15.067 8.964 17.378-1.86 1.845-7.202-.316-13.041-4.942 1.916-3.932 3.291-8.116 4.077-12.436z"
                          fill="#db9b7c"
                        />
                        <path
                          d="m47.94 25.239c.505-1.312.953-2.647 1.342-4 3.55 3.832 5.733 7.109 5.066 7.77-.582.578-3.181-1.007-6.408-3.77z"
                          fill="#c66b60"
                        />
                        <ellipse
                          cx={32}
                          cy={8}
                          fill="#c66b60"
                          rx="12.093"
                          ry={2}
                        />
                        <path
                          d="m38.938 57.026c-.232-.976-.867-1.837-1.715-2.383-.011-.007-.023-.015-.034-.022-1.404-.885-2.166-2.499-2.166-4.15v-7.471h-6.046v7.471c0 1.65-.763 3.265-2.166 4.15-.011.007-.023.014-.034.022-.848.546-1.482 1.406-1.715 2.383-.626 2.631 1.369 4.974 3.915 4.974.711 0 1.375-.187 1.952-.511.674-.379 1.469-.379 2.143 0 .576.324 1.24.511 1.951.511 2.546 0 4.541-2.343 3.915-4.974z"
                          fill="#f5cf88"
                        />
                        <path
                          d="m15.769 60.058c.531-.853.696-1.907.485-2.888-.003-.013-.006-.026-.009-.039-.362-1.611.249-3.287 1.425-4.454l5.324-5.283-4.276-4.243-5.324 5.283c-1.176 1.167-2.865 1.773-4.489 1.414-.013-.003-.026-.006-.04-.009-.989-.209-2.05-.046-2.91.482-2.318 1.422-2.577 4.478-.776 6.264.503.499 1.105.833 1.744 1.008.747.205 1.309.763 1.515 1.504.177.634.513 1.231 1.016 1.73 1.803 1.788 4.882 1.531 6.315-.769z"
                          fill="#f5cf88"
                        />
                        <g>
                          <path
                            d="m27.163 36.608c-4.546-4.51-7.753-10.171-9.275-16.37l1.942-.477c1.435 5.842 4.458 11.177 8.742 15.428z"
                            fill="#976947"
                          />
                        </g>
                        <path
                          d="m39.355 9.585c-.136-1.099-.329-2.18-.576-3.241-1.933-.217-4.266-.344-6.779-.344-6.679 0-12.093.895-12.093 2s5.414 2 12.093 2c2.771 0 5.316-.156 7.355-.415z"
                          fill="#e47c6e"
                        />
                        <g fill="#674025">
                          <path d="" />
                          <path d="m19.005 31.501c-.659 3.178-.998 6.436-.998 9.73v.385c0 .53.212 1.039.59 1.414l.131.13c2.257-.808 4.391-1.87 6.376-3.145-2.348-2.631-4.396-5.482-6.099-8.514z" />
                        </g>
                        <path
                          d="m26.811 54.621c-.011.007-.023.014-.034.022-.848.546-1.482 1.406-1.715 2.383-.255 1.073-.07 2.094.406 2.932 4.616-3.553 7.603-9.118 7.603-15.394 0-.528-.038-1.046-.079-1.563h-4.015v7.471c0 1.65-.763 3.264-2.166 4.149z"
                          fill="#fadfb2"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="category-details">
                    <h6>meat</h6>
                  </div>
                </div>
              </div>
            </a>
          </div>
          )
        })}
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>


   </>
  )
}

export default CollectionBanner
