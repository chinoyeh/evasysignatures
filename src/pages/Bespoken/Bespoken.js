import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../utils/Navbar'
import './css/Bespoken.css'

const Bespoken = () => {
  return (
    <React.Fragment>
        <Navbar/>
 

    <div class="offcanvas-menu-overlay"></div>
 
 
 
    <div class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__links">
                        <Link to ='/' ><i class="fa fa-home"></i> Home</Link>
                        <span>Be Spoken </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="contact spad">
        <div className="container">
        <div className="categories__text">
                        <h1>Tailored to your Taste</h1>
         
                    </div>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div class="contact__content">
                 
                        <div className="contact__address">
                          
                            <ul>
                                <li>
                                    <h6><i className="fa fa-dot-circle-o"></i> Upload your Image  < i className ='fa fa-hand-o-right'></i></h6>
                                   
                                </li>
                                <li>
                                    <h6><i className="fa fa-dot-circle-o"></i> Fill in your details < i className ='fa fa-hand-o-down'></i> </h6>
                             
                                </li>
                                <li>
                                    <h6><i className="fa fa-dot-circle-o"></i> Place your Order</h6>
                                    <p> <span style={{color: '#ca1515', fontWeight: 'bold'}}>Please Note:</span> Prices are dependent on your design and preferred fabric. A mail would be sent to you confirming your order and billing details</p>
                                </li>
                            </ul>
                        </div>
                        <div class="contact__form">
                            <h5>Fill in your details accurately</h5>
                            <form >
                                <input type="text" placeholder="Full Name"/>
                                <input type="text" placeholder="Email"/>
                                <input type="text" placeholder="Phone Number"/>
                                <input type="text" placeholder="Address"/>

                                <textarea placeholder="Measurement"></textarea>
                                <button type="submit" class="site-btn">Order</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="contact__map">
                  
                </div>
            </div>
        </div>
    </div>
</section>



{/* 

<div class="search-model">
    <div class="h-100 d-flex align-items-center justify-content-center">
        <div class="search-close-switch">+</div>
        <form class="search-model-form">
            <input type="text" id="search-input" placeholder="Search here....."/>
        </form>
    </div>
</div> */}
</React.Fragment>
  )
}

export default Bespoken