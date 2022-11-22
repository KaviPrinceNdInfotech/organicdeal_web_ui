import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios';

function Categorypage() {
    const [brand, setBrand] = useState(false)
    const [price, setPrice] = useState(false)
    const [categorycard, setCategorycard] = useState([])
    useEffect(() => {
        axios.get('https://testimonialapi.toolcarton.com/api')
            .then((response) => {
                setCategorycard(response.data);
            })
    }, [])
    return (
        <>
            <>
                {/* breadcrumb start */}
                <div className="breadcrumb-main ">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="breadcrumb-contain">
                                    <div>
                                        <h2>category</h2>
                                        <ul>
                                            <li>
                                                <Link to="/">home</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-angle-double-right" />
                                            </li>
                                            <li>
                                                <Link to="/categorypage">category</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* breadcrumb End */}
                {/* section start */}
                <section className="section-big-pt-space ratio_asos b-g-light">
                    <div className="collection-wrapper">
                        <div className="custom-container">
                            <div className="row">
                                <div className="col-sm-3 collection-filter category-page-side">
                                    {/* side-bar colleps block stat */}
                                    <div className="collection-filter-block creative-card creative-inner category-side">
                                        {/* brand filter start */}
                                        <div className="collection-mobile-back">
                                            <span className="filter-back">
                                                <i className="fa fa-angle-left" aria-hidden="true" /> back
                                            </span>
                                        </div>
                                        <div className="collection-collapse-block open">
                                            <h3 className="collapse-block-title mt-0" onClick={() => setBrand(!brand)}>brand</h3>
                                            <div className="collection-collapse-block-content">
                                                {brand && <div className="collection-brand-filter">
                                                    <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input form-check-input"
                                                            id="zara"
                                                        />
                                                        <label
                                                            className="custom-control-label form-check-label"
                                                            htmlFor="zara"
                                                        >
                                                            New Arrival
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input form-check-input"
                                                            id="vera-moda"
                                                        />
                                                        <label
                                                            className="custom-control-label form-check-label"
                                                            htmlFor="vera-moda"
                                                        >
                                                            Organic Product
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input form-check-input"
                                                            id="forever-21"
                                                        />
                                                        <label
                                                            className="custom-control-label form-check-label"
                                                            htmlFor="forever-21"
                                                        >
                                                            Reccomended product
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input form-check-input"
                                                            id="roadster"
                                                        />
                                                        <label
                                                            className="custom-control-label form-check-label"
                                                            htmlFor="roadster"
                                                        >
                                                            HOT Deal
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input form-check-input"
                                                            id="only"
                                                        />
                                                        <label
                                                            className="custom-control-label form-check-label"
                                                            htmlFor="only"
                                                        >
                                                            Special Product
                                                        </label>
                                                    </div>
                                                </div>}
                                            </div>
                                        </div>
                                        {/* color filter start here */}
                                        <div className="collection-collapse-block border-0 open">
                                            <h3 className="collapse-block-title">Offer</h3>
                                            <div className="collection-collapse-block-content">
                                                <div className="filter-slide">
                                                    <input
                                                        className="js-range-slider"
                                                        type="text"
                                                        name="my_range"
                                                        defaultValue=""
                                                        data-type="double"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* size filter start here */}
                                        <div className="collection-collapse-block open">
                                            <h3 className="collapse-block-title" onClick={() => setPrice(!price)}>PRICE</h3>
                                            <div className="collection-collapse-block-content">
                                                <div className="size-selector">
                                                    {price && <div className="collection-brand-filter">
                                                        <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input form-check-input"
                                                                id="small"
                                                            />
                                                            <label
                                                                className="custom-control-label form-check-label"
                                                                htmlFor="small"
                                                            >
                                                                RS.10-RS.50
                                                            </label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input form-check-input"
                                                                id="mediam"
                                                            />
                                                            <label
                                                                className="custom-control-label form-check-label"
                                                                htmlFor="mediam"
                                                            >
                                                                RS.500-RS.1000
                                                            </label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input form-check-input"
                                                                id="large"
                                                            />
                                                            <label
                                                                className="custom-control-label form-check-label"
                                                                htmlFor="large"
                                                            >
                                                                RS.1000-RS.2000
                                                            </label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input form-check-input"
                                                                id="extralarge"
                                                            />
                                                            <label
                                                                className="custom-control-label form-check-label"
                                                                htmlFor="extralarge"
                                                            >
                                                                RS.2000-RS.4000
                                                            </label>

                                                        </div>
                                                        <div className="custom-control custom-checkbox  form-check collection-filter-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input form-check-input"
                                                                id="extralarge"
                                                            />
                                                            <label
                                                                className="custom-control-label form-check-label"
                                                                htmlFor="extralarge"
                                                            >
                                                                RS.4000-ABOVE
                                                            </label>

                                                        </div>
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                        {/* price filter start here */}

                                    </div>
                                    {/* silde-bar colleps block end here */}
                                    {/* side-bar single product slider start */}
                                    <div className="theme-card creative-card creative-inner">
                                        <h5 className="title-border">new product</h5>
                                        <div className="slide-1">
                                            <div>
                                                <div className="media-banner plrb-0 b-g-white1 border-0">
                                                    <div className="media-banner-box">
                                                        <div className="media">
                                                            <a href="product-page(left-sidebar).html" tabIndex={0}>
                                                                <img
                                                                    src="../assets/images/layout-2/media-banner/3.jpg"
                                                                    className="img-fluid "
                                                                    alt="banner"
                                                                />
                                                            </a>
                                                            <div className="media-body">
                                                                <div className="media-contant">
                                                                    <div>
                                                                        <div className="product-detail">
                                                                            <ul className="rating">
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star-o" />
                                                                                </li>
                                                                            </ul>
                                                                            <a
                                                                                href="product-page(left-sidebar).html"
                                                                                tabIndex={0}
                                                                            >
                                                                                <p>sumsung galaxy</p>
                                                                            </a>
                                                                            <h6>
                                                                                $47.05 <span>$55.21</span>
                                                                            </h6>
                                                                        </div>
                                                                        <div className="cart-info">
                                                                            <button
                                                                                className="tooltip-top add-cartnoty"
                                                                                data-tippy-content="Add to cart"
                                                                            >
                                                                                {" "}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    className="feather feather-shopping-cart"
                                                                                >
                                                                                    <circle cx={9} cy={21} r={1} />
                                                                                    <circle cx={20} cy={21} r={1} />
                                                                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                                                                </svg>{" "}
                                                                            </button>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                className="add-to-wish tooltip-top"
                                                                                data-tippy-content="Add to Wishlist"
                                                                            >
                                                                                <i
                                                                                    data-feather="heart"
                                                                                    className="add-to-wish"
                                                                                />
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#quick-view"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Quick View"
                                                                            >
                                                                                <i data-feather="eye" />
                                                                            </a>
                                                                            <a
                                                                                href="compare.html"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Compare"
                                                                            >
                                                                                <i data-feather="refresh-cw" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="media-banner-box">
                                                        <div className="media">
                                                            <a href="product-page(left-sidebar).html" tabIndex={0}>
                                                                <img
                                                                    src="../assets/images/layout-2/media-banner/1.jpg"
                                                                    className="img-fluid "
                                                                    alt="banner"
                                                                />
                                                            </a>
                                                            <div className="media-body">
                                                                <div className="media-contant">
                                                                    <div>
                                                                        <div className="product-detail">
                                                                            <ul className="rating">
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star-o" />
                                                                                </li>
                                                                            </ul>
                                                                            <a
                                                                                href="product-page(left-sidebar).html"
                                                                                tabIndex={0}
                                                                            >
                                                                                <p>bajaj rex mixer</p>
                                                                            </a>
                                                                            <h6>
                                                                                $40.05 <span>$60.21</span>
                                                                            </h6>
                                                                        </div>
                                                                        <div className="cart-info">
                                                                            <button
                                                                                className="tooltip-top add-cartnoty"
                                                                                data-tippy-content="Add to cart"
                                                                            >
                                                                                {" "}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    className="feather feather-shopping-cart"
                                                                                >
                                                                                    <circle cx={9} cy={21} r={1} />
                                                                                    <circle cx={20} cy={21} r={1} />
                                                                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                                                                </svg>{" "}
                                                                            </button>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                className="add-to-wish tooltip-top"
                                                                                data-tippy-content="Add to Wishlist"
                                                                            >
                                                                                <i
                                                                                    data-feather="heart"
                                                                                    className="add-to-wish"
                                                                                />
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#quick-view"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Quick View"
                                                                            >
                                                                                <i data-feather="eye" />
                                                                            </a>
                                                                            <a
                                                                                href="compare.html"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Compare"
                                                                            >
                                                                                <i data-feather="refresh-cw" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="media-banner-box">
                                                        <div className="media">
                                                            <a href="product-page(left-sidebar).html" tabIndex={0}>
                                                                <img
                                                                    src="../assets/images/layout-2/media-banner/2.jpg"
                                                                    className="img-fluid "
                                                                    alt="banner"
                                                                />
                                                            </a>
                                                            <div className="media-body">
                                                                <div className="media-contant">
                                                                    <div>
                                                                        <div className="product-detail">
                                                                            <ul className="rating">
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star-o" />
                                                                                </li>
                                                                            </ul>
                                                                            <a
                                                                                href="product-page(left-sidebar).html"
                                                                                tabIndex={0}
                                                                            >
                                                                                <p>usha table fan</p>
                                                                            </a>
                                                                            <h6>
                                                                                $52.05 <span>$60.21</span>
                                                                            </h6>
                                                                        </div>
                                                                        <div className="cart-info">
                                                                            <button
                                                                                className="tooltip-top add-cartnoty"
                                                                                data-tippy-content="Add to cart"
                                                                            >
                                                                                {" "}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    className="feather feather-shopping-cart"
                                                                                >
                                                                                    <circle cx={9} cy={21} r={1} />
                                                                                    <circle cx={20} cy={21} r={1} />
                                                                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                                                                </svg>{" "}
                                                                            </button>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                className="add-to-wish tooltip-top"
                                                                                data-tippy-content="Add to Wishlist"
                                                                            >
                                                                                <i
                                                                                    data-feather="heart"
                                                                                    className="add-to-wish"
                                                                                />
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#quick-view"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Quick View"
                                                                            >
                                                                                <i data-feather="eye" />
                                                                            </a>
                                                                            <a
                                                                                href="compare.html"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Compare"
                                                                            >
                                                                                <i data-feather="refresh-cw" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="media-banner plrb-0 b-g-white1 border-0">
                                                    <div className="media-banner-box">
                                                        <div className="media">
                                                            <a href="product-page(left-sidebar).html" tabIndex={0}>
                                                                <img
                                                                    src="../assets/images/layout-2/media-banner/2.jpg"
                                                                    className="img-fluid "
                                                                    alt="banner"
                                                                />
                                                            </a>
                                                            <div className="media-body">
                                                                <div className="media-contant">
                                                                    <div>
                                                                        <div className="product-detail">
                                                                            <ul className="rating">
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star-o" />
                                                                                </li>
                                                                            </ul>
                                                                            <a
                                                                                href="product-page(left-sidebar).html"
                                                                                tabIndex={0}
                                                                            >
                                                                                <p>usha table fan</p>
                                                                            </a>
                                                                            <h6>
                                                                                $52.05 <span>$60.21</span>
                                                                            </h6>
                                                                        </div>
                                                                        <div className="cart-info">
                                                                            <button
                                                                                className="tooltip-top add-cartnoty"
                                                                                data-tippy-content="Add to cart"
                                                                            >
                                                                                {" "}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    className="feather feather-shopping-cart"
                                                                                >
                                                                                    <circle cx={9} cy={21} r={1} />
                                                                                    <circle cx={20} cy={21} r={1} />
                                                                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                                                                </svg>{" "}
                                                                            </button>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                className="add-to-wish tooltip-top"
                                                                                data-tippy-content="Add to Wishlist"
                                                                            >
                                                                                <i
                                                                                    data-feather="heart"
                                                                                    className="add-to-wish"
                                                                                />
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#quick-view"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Quick View"
                                                                            >
                                                                                <i data-feather="eye" />
                                                                            </a>
                                                                            <a
                                                                                href="compare.html"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Compare"
                                                                            >
                                                                                <i data-feather="refresh-cw" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="media-banner-box">
                                                        <div className="media">
                                                            <a href="product-page(left-sidebar).html" tabIndex={0}>
                                                                <img
                                                                    src="../assets/images/layout-2/media-banner/3.jpg"
                                                                    className="img-fluid "
                                                                    alt="banner"
                                                                />
                                                            </a>
                                                            <div className="media-body">
                                                                <div className="media-contant">
                                                                    <div>
                                                                        <div className="product-detail">
                                                                            <ul className="rating">
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star-o" />
                                                                                </li>
                                                                            </ul>
                                                                            <a
                                                                                href="product-page(left-sidebar).html"
                                                                                tabIndex={0}
                                                                            >
                                                                                <p>sumsung galaxy</p>
                                                                            </a>
                                                                            <h6>
                                                                                $47.05 <span>$55.21</span>
                                                                            </h6>
                                                                        </div>
                                                                        <div className="cart-info">
                                                                            <button
                                                                                className="tooltip-top add-cartnoty"
                                                                                data-tippy-content="Add to cart"
                                                                            >
                                                                                {" "}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    className="feather feather-shopping-cart"
                                                                                >
                                                                                    <circle cx={9} cy={21} r={1} />
                                                                                    <circle cx={20} cy={21} r={1} />
                                                                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                                                                </svg>{" "}
                                                                            </button>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                className="add-to-wish tooltip-top"
                                                                                data-tippy-content="Add to Wishlist"
                                                                            >
                                                                                <i
                                                                                    data-feather="heart"
                                                                                    className="add-to-wish"
                                                                                />
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#quick-view"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Quick View"
                                                                            >
                                                                                <i data-feather="eye" />
                                                                            </a>
                                                                            <a
                                                                                href="compare.html"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Compare"
                                                                            >
                                                                                <i data-feather="refresh-cw" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="media-banner-box">
                                                        <div className="media">
                                                            <a href="product-page(left-sidebar).html" tabIndex={0}>
                                                                <img
                                                                    src="../assets/images/layout-2/media-banner/1.jpg"
                                                                    className="img-fluid "
                                                                    alt="banner"
                                                                />
                                                            </a>
                                                            <div className="media-body">
                                                                <div className="media-contant">
                                                                    <div>
                                                                        <div className="product-detail">
                                                                            <ul className="rating">
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star-o" />
                                                                                </li>
                                                                            </ul>
                                                                            <a
                                                                                href="product-page(left-sidebar).html"
                                                                                tabIndex={0}
                                                                            >
                                                                                <p>bajaj rex mixer</p>
                                                                            </a>
                                                                            <h6>
                                                                                $40.05 <span>$60.21</span>
                                                                            </h6>
                                                                        </div>
                                                                        <div className="cart-info">
                                                                            <button
                                                                                className="tooltip-top add-cartnoty"
                                                                                data-tippy-content="Add to cart"
                                                                            >
                                                                                {" "}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    className="feather feather-shopping-cart"
                                                                                >
                                                                                    <circle cx={9} cy={21} r={1} />
                                                                                    <circle cx={20} cy={21} r={1} />
                                                                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                                                                </svg>{" "}
                                                                            </button>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                className="add-to-wish tooltip-top"
                                                                                data-tippy-content="Add to Wishlist"
                                                                            >
                                                                                <i
                                                                                    data-feather="heart"
                                                                                    className="add-to-wish"
                                                                                />
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#quick-view"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Quick View"
                                                                            >
                                                                                <i data-feather="eye" />
                                                                            </a>
                                                                            <a
                                                                                href="compare.html"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Compare"
                                                                            >
                                                                                <i data-feather="refresh-cw" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="media-banner plrb-0 b-g-white1 border-0">
                                                    <div className="media-banner-box">
                                                        <div className="media">
                                                            <a href="product-page(left-sidebar).html" tabIndex={0}>
                                                                <img
                                                                    src="../assets/images/layout-2/media-banner/1.jpg"
                                                                    className="img-fluid "
                                                                    alt="banner"
                                                                />
                                                            </a>
                                                            <div className="media-body">
                                                                <div className="media-contant">
                                                                    <div>
                                                                        <div className="product-detail">
                                                                            <ul className="rating">
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star-o" />
                                                                                </li>
                                                                            </ul>
                                                                            <a
                                                                                href="product-page(left-sidebar).html"
                                                                                tabIndex={0}
                                                                            >
                                                                                <p>bajaj rex mixer</p>
                                                                            </a>
                                                                            <h6>
                                                                                $40.05 <span>$60.21</span>
                                                                            </h6>
                                                                        </div>
                                                                        <div className="cart-info">
                                                                            <button
                                                                                className="tooltip-top add-cartnoty"
                                                                                data-tippy-content="Add to cart"
                                                                            >
                                                                                {" "}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    className="feather feather-shopping-cart"
                                                                                >
                                                                                    <circle cx={9} cy={21} r={1} />
                                                                                    <circle cx={20} cy={21} r={1} />
                                                                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                                                                </svg>{" "}
                                                                            </button>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                className="add-to-wish tooltip-top"
                                                                                data-tippy-content="Add to Wishlist"
                                                                            >
                                                                                <i
                                                                                    data-feather="heart"
                                                                                    className="add-to-wish"
                                                                                />
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#quick-view"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Quick View"
                                                                            >
                                                                                <i data-feather="eye" />
                                                                            </a>
                                                                            <a
                                                                                href="compare.html"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Compare"
                                                                            >
                                                                                <i data-feather="refresh-cw" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="media-banner-box">
                                                        <div className="media">
                                                            <a href="product-page(left-sidebar).html" tabIndex={0}>
                                                                <img
                                                                    src="../assets/images/layout-2/media-banner/2.jpg"
                                                                    className="img-fluid "
                                                                    alt="banner"
                                                                />
                                                            </a>
                                                            <div className="media-body">
                                                                <div className="media-contant">
                                                                    <div>
                                                                        <div className="product-detail">
                                                                            <ul className="rating">
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star-o" />
                                                                                </li>
                                                                            </ul>
                                                                            <a
                                                                                href="product-page(left-sidebar).html"
                                                                                tabIndex={0}
                                                                            >
                                                                                <p>usha table fan</p>
                                                                            </a>
                                                                            <h6>
                                                                                $52.05 <span>$60.21</span>
                                                                            </h6>
                                                                        </div>
                                                                        <div className="cart-info">
                                                                            <button
                                                                                className="tooltip-top add-cartnoty"
                                                                                data-tippy-content="Add to cart"
                                                                            >
                                                                                {" "}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    className="feather feather-shopping-cart"
                                                                                >
                                                                                    <circle cx={9} cy={21} r={1} />
                                                                                    <circle cx={20} cy={21} r={1} />
                                                                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                                                                </svg>{" "}
                                                                            </button>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                className="add-to-wish tooltip-top"
                                                                                data-tippy-content="Add to Wishlist"
                                                                            >
                                                                                <i
                                                                                    data-feather="heart"
                                                                                    className="add-to-wish"
                                                                                />
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#quick-view"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Quick View"
                                                                            >
                                                                                <i data-feather="eye" />
                                                                            </a>
                                                                            <a
                                                                                href="compare.html"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Compare"
                                                                            >
                                                                                <i data-feather="refresh-cw" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="media-banner-box">
                                                        <div className="media">
                                                            <a href="product-page(left-sidebar).html" tabIndex={0}>
                                                                <img
                                                                    src="../assets/images/layout-2/media-banner/3.jpg"
                                                                    className="img-fluid "
                                                                    alt="banner"
                                                                />
                                                            </a>
                                                            <div className="media-body">
                                                                <div className="media-contant">
                                                                    <div>
                                                                        <div className="product-detail">
                                                                            <ul className="rating">
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star" />
                                                                                </li>
                                                                                <li>
                                                                                    <i className="fa fa-star-o" />
                                                                                </li>
                                                                            </ul>
                                                                            <a
                                                                                href="product-page(left-sidebar).html"
                                                                                tabIndex={0}
                                                                            >
                                                                                <p>sumsung galaxy</p>
                                                                            </a>
                                                                            <h6>
                                                                                $47.05 <span>$55.21</span>
                                                                            </h6>
                                                                        </div>
                                                                        <div className="cart-info">
                                                                            <button
                                                                                className="tooltip-top add-cartnoty"
                                                                                data-tippy-content="Add to cart"
                                                                            >
                                                                                {" "}
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width={24}
                                                                                    height={24}
                                                                                    viewBox="0 0 24 24"
                                                                                    fill="none"
                                                                                    stroke="currentColor"
                                                                                    strokeWidth={2}
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    className="feather feather-shopping-cart"
                                                                                >
                                                                                    <circle cx={9} cy={21} r={1} />
                                                                                    <circle cx={20} cy={21} r={1} />
                                                                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                                                                </svg>{" "}
                                                                            </button>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                className="add-to-wish tooltip-top"
                                                                                data-tippy-content="Add to Wishlist"
                                                                            >
                                                                                <i
                                                                                    data-feather="heart"
                                                                                    className="add-to-wish"
                                                                                />
                                                                            </a>
                                                                            <a
                                                                                href="javascript:void(0)"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#quick-view"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Quick View"
                                                                            >
                                                                                <i data-feather="eye" />
                                                                            </a>
                                                                            <a
                                                                                href="compare.html"
                                                                                className="tooltip-top"
                                                                                data-tippy-content="Compare"
                                                                            >
                                                                                <i data-feather="refresh-cw" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* side-bar single product slider end */}
                                    {/* side-bar banner start here */}
                                    <div className="collection-sidebar-banner">
                                        <a href="javascript:void(0)">
                                            <img
                                                src="https://organicdeal.in/Images/2021116155456756754567567567545675675675.jpg"
                                                className="img-fluid "
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    {/* side-bar banner end here */}
                                </div>
                                <div className="collection-content col">
                                    <div className="page-main-content">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="top-banner-wrapper">
                                                    <a href="product-page(left-sidebar).html">
                                                        <img
                                                            src="https://organicdeal.in/Images/20217111644415315314153153153141531531531544b462a-c5ce-48ee-bbb8-5ebfa5edb681.jpg"
                                                            className="img-fluid "
                                                            alt=""
                                                        />
                                                    </a>
                                                    <div className="top-banner-content small-section">
                                                        <h4>Fruits & Vegetables</h4>

                                                    </div>
                                                </div>
                                                <div className="collection-product-wrapper">

                                                    <div className="product-wrapper-grid product">
                                                        <div className="row">
                                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                                                                {categorycard.map((item, index) => {
                                                                    console.log(item);
                                                                    return (
                                                                        <div className="product-box">
                                                                            <div className="product-imgbox">
                                                                                <div className="product-front">
                                                                                    <a href="product-page(left-sidebar).html">
                                                                                        {" "}
                                                                                        <img
                                                                                            src="../assets/images/layout-4/product/1.jpg"
                                                                                            className="img-fluid  "
                                                                                            alt="product"
                                                                                        />{" "}
                                                                                    </a>
                                                                                </div>
                                                                                <div className="product-back">
                                                                                    <a href="product-page(left-sidebar).html">
                                                                                        {" "}
                                                                                        <img
                                                                                            src="../assets/images/layout-4/product/a1.jpg"
                                                                                            className="img-fluid  "
                                                                                            alt="product"
                                                                                        />{" "}
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-detail detail-center detail-inverse">
                                                                                <div className="detail-title">
                                                                                    <div className="detail-left">
                                                                                        <div className="rating-star">
                                                                                            {" "}
                                                                                            <i className="fa fa-star" />{" "}
                                                                                            <i className="fa fa-star" />{" "}
                                                                                            <i className="fa fa-star" />{" "}
                                                                                            <i className="fa fa-star" />{" "}
                                                                                            <i className="fa fa-star" />{" "}
                                                                                        </div>
                                                                                        <p>
                                                                                            Lorem Ipsum is simply dummy text of the
                                                                                            printing and typesetting industry. Lorem
                                                                                            Ipsum has been the industry's standard dummy
                                                                                            text ever since the 1500s, when an unknown
                                                                                            printer took a galley of type and scrambled
                                                                                            it to make a type specimen book
                                                                                        </p>
                                                                                        <a href="product-page(left-sidebar).html">
                                                                                            <h6 className="price-title">
                                                                                                realme not 7
                                                                                            </h6>{" "}
                                                                                        </a>
                                                                                    </div>
                                                                                    <div className="detail-right">
                                                                                        <div className="check-price"> $60.21 </div>
                                                                                        <div className="price">
                                                                                            <div className="price"> $50.05 </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="icon-detail">
                                                                                    <button
                                                                                        className="tooltip-top add-cartnoty"
                                                                                        data-tippy-content="Add to cart"
                                                                                    >
                                                                                        {" "}
                                                                                        <i data-feather="shopping-cart" />{" "}
                                                                                    </button>
                                                                                    <a
                                                                                        href="javascript:void(0)"
                                                                                        className="add-to-wish tooltip-top"
                                                                                        data-tippy-content="Add to Wishlist"
                                                                                    >
                                                                                        {" "}
                                                                                        <i data-feather="heart" />{" "}
                                                                                    </a>
                                                                                    <a
                                                                                        href="javascript:void(0)"
                                                                                        data-bs-toggle="modal"
                                                                                        data-bs-target="#quick-view"
                                                                                        className="tooltip-top"
                                                                                        data-tippy-content="Quick View"
                                                                                    >
                                                                                        {" "}
                                                                                        <i data-feather="eye" />{" "}
                                                                                    </a>
                                                                                    <a
                                                                                        href="compare.html"
                                                                                        className="tooltip-top"
                                                                                        data-tippy-content="Compare"
                                                                                    >
                                                                                        {" "}
                                                                                        <i data-feather="refresh-cw" />{" "}
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>)
                                                                })}
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="product-pagination">
                                                        <div className="theme-paggination-block">
                                                            <div className="row">
                                                                <div className="col-xl-6 col-md-6 col-sm-12">
                                                                    <nav aria-label="Page navigation">
                                                                        <ul className="pagination">
                                                                            <li className="page-item">
                                                                                <a
                                                                                    className="page-link"
                                                                                    href="javascript:void(0)"
                                                                                    aria-label="Previous"
                                                                                >
                                                                                    <span aria-hidden="true">
                                                                                        <i
                                                                                            className="fa fa-chevron-left"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                    </span>{" "}
                                                                                    <span className="sr-only">Previous</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className="page-item ">
                                                                                <a
                                                                                    className="page-link"
                                                                                    href="javascript:void(0)"
                                                                                >
                                                                                    1
                                                                                </a>
                                                                            </li>
                                                                            <li className="page-item">
                                                                                <a
                                                                                    className="page-link"
                                                                                    href="javascript:void(0)"
                                                                                >
                                                                                    2
                                                                                </a>
                                                                            </li>
                                                                            <li className="page-item">
                                                                                <a
                                                                                    className="page-link"
                                                                                    href="javascript:void(0)"
                                                                                >
                                                                                    3
                                                                                </a>
                                                                            </li>
                                                                            <li className="page-item">
                                                                                <a
                                                                                    className="page-link"
                                                                                    href="javascript:void(0)"
                                                                                    aria-label="Next"
                                                                                >
                                                                                    <span aria-hidden="true">
                                                                                        <i
                                                                                            className="fa fa-chevron-right"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                    </span>{" "}
                                                                                    <span className="sr-only">Next</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </nav>
                                                                </div>
                                                                <div className="col-xl-6 col-md-6 col-sm-12">
                                                                    <div className="product-search-count-bottom">
                                                                        <h5>Showing Products 1-24 of 10 Result</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* section End */}
            </>

        </>
    )
}

export default Categorypage
