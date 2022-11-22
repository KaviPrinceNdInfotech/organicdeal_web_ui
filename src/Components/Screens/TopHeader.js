import React, { useState } from 'react'
import { Link } from "react-router-dom"


function TopHeader() {
    const [openNav, setOpenNav] = useState(false);
    return (
        <>
            <div className="top-header2 " style={{background: "linear-gradient(#205403, #e17200)"}}>
                <div className="custom-container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <div className="top-header-left">
                                <ul>
                                    <li>
                                        <a href="javascript:void(0)">
                                            Organic Deals
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="fa fa-phone" />
                                            Call Us: xxxxxxx378
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="top-header-right">
                                <ul>

                                    <li>
                                        <Link to="/wishlist">
                                            <i className="fa fa-heart" /> wishlist
                                        </Link>
                                    </li>
                                    <li onClick={() => setOpenNav(!openNav)}>
                                        <a href="/#">
                                            <i className="fa fa-user" /> my profile
                                        </a>

                                    </li>
                                </ul>
                                {openNav && <div className="profileBtns">
                                            <div className="avatarInfo profileTab">
                                               
                                                <p>Welcome Alien</p>
                                            </div>
                                            
                                            <div className="profileTabs">
                                                <div className="profileTab">
                                                    <span className='material-symbols-rounded'>
                                                        account_box
                                                    </span>
                                                    <p>Your Channel</p>
                                                </div>
                                                <div className="profileTab">
                                                    <span className='material-symbols-rounded'>
                                                        play_circle
                                                    </span>
                                                    <p>Alien Studio</p>
                                                </div>
                                                <div className="profileTab">
                                                    <span className='material-symbols-rounded'>
                                                        logout
                                                    </span>
                                                    <p>Sign Out</p>
                                                </div>
                                                </div>
                                            </div>}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default TopHeader
