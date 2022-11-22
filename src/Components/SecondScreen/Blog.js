import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"

function Blog() {
  const [blog, setBlog] = useState([])
  useEffect(() => {
    axios.get('https://testimonialapi.toolcarton.com/api')
      .then((response) => {
        setBlog(response.data);
      })
  }, [])
  return (
    <>
    <div className="breadcrumb-main ">
  <div className="container">
    <div className="row">
      <div className="col">
        <div className="breadcrumb-contain">
          <div>
            <h2>blog</h2>
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <i className="fa fa-angle-double-right" />
              </li>
              <li>
                <Link to="/blog">blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<section className="section-big-py-space blog-page ratio2_3">
  <div className="custom-container">
    <div className="row">
      <div className="col-12">
      {blog.map((item, index) => {
                    console.log(item);
                    return (
        <div className="row blog-media">
          <div className="col-xl-6 ">
            <div className="blog-left">
              <a href="javascript:void(0)">
                <img
                  src="../assets/images/blog/1.jpg"
                  className="img-fluid  "
                  alt="blog"
                />
              </a>
              <div className="date-label"  style={{background: "linear-gradient(#205403, #e17200)"}}>26 nov 2019</div>
            </div>
          </div>
          <div className="col-xl-6 ">
            <div className="blog-right">
              <div>
                <a href="javascript:void(0)">
                  <h4>
                    you how all this mistaken idea of denouncing pleasure and
                    praising pain was born.
                  </h4>{" "}
                </a>
                <ul className="post-social">
                  <li>Posted By : Admin Admin</li>
                  <li>
                    <i className="fa fa-heart" /> 5 Hits
                  </li>
                  <li>
                    <i className="fa fa-comments" /> 10 Comment
                  </li>
                </ul>
                <p>
                  Consequences that are extremely painful. Nor again is there
                  anyone who loves or pursues or desires to obtain pain of
                  itself, because it is pain, but because occasionally
                  circumstances occur in which toil and pain can procure him
                  some great pleasure.
                </p>
              </div>
            </div>
          </div>
        </div>
        )
      })}
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Blog
