import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
        {/*     <!-- Offcanvas Menu Begin --> */}
    <div class="offcanvas-menu-overlay"></div>
    <div class="offcanvas-menu-wrapper">
        <div class="offcanvas__close">+</div>
        <ul class="offcanvas__widget">
            <li><span class="icon_search search-switch"></span></li>
            <li><a href="#"><span class="icon_heart_alt"></span>
        
                <div class="tip">2</div>
            </a></li>
            <li><a href="#"><span class="icon_bag_alt"></span>
                <div class="tip">2</div>
            </a></li>
        </ul>
        <div class="offcanvas__logo">
            <a href="./index.html"><img src="img/logo.png" alt=""/></a>
        </div>
        <div id="mobile-menu-wrap"></div>
  
    </div>
    {/* <!-- Offcanvas Menu End -->

    <!-- Header Section Begin --> */}
    <header class="header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-3 col-lg-2">
                    <div class="header__logo">
                        <a href="./index.html"><img src="img/logo.png" alt=""/></a>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-7">
                    <nav class="header__menu">
                        <ul>
                            <li className="active"><Link to= '/'>Home</Link></li>
                            <li><Link to ='/store'>Be Spoken</Link></li>
                            <li><Link to ='/store'>Fashion Store</Link></li>
                      
                       
                        </ul>
                    </nav>
                    
                </div>
                <div class="col-lg-3">
                    <div class="header__right">
                        <div class="header__right__auth">
                        <i className='fa fa-shopping-cart'></i>
                        </div>
                   
                    </div>
                </div>
            </div>
            <div class="canvas__open">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </header>

    </React.Fragment>
  )
}

export default Navbar