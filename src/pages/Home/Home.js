import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom'
import Navbar from '../utils/Navbar'
import styles from './css/Home.css'


const Home = () => {
  return (
<React.Fragment>
    
    <Navbar/>

    
   
    {/* <!-- Header Section End -->
    

    <!-- Categories Section Begin --> */}
    <section className="categories">
        <div className="container-fluid">
        * <Carousel>
                <div className='carousel-image'>
                    <img src="https://lh3.googleusercontent.com/J1UyFKA00g35soee_wxO7J_MbIq3h6xITe5ddsnHezVPoVKYbitfmFxzqBu1C-iWh7jr=w1024-h500" alt='' />
               
                </div>
                <div className='carousel-image'>
                    <img src="https://www.designersnexus.com/wp-content/uploads/fashion-sketches-bakcground.png" alt='' />
                  
                </div>
                <div className='carousel-image'>
                    <img src="https://chicsketch.com/wp-content/uploads/2017/01/sketch-landscape-1080x496-1.jpg" alt='' />
                  
                </div>
            </Carousel>
            <div className="categories__text">
                        <h1>Welcome to Evasy Signatures</h1>
                        <p>Home of ready to wear fashion wears and bespoken outfits. </p>
                        <Link to ='/store'>Shop with us Today</Link>
                     
                    </div>
        
             
              
          
            <section className='category'>
           <div className='category-card'>
               <img src='https://pixelbuddha.net/storage/12298/2.jpg' alt =''/>
               <button>Shirt</button>

           </div>
           <div className='category-card'>
               <img src='https://pixelbuddha.net/storage/12298/2.jpg' alt =''/>
               <button>Shirt</button>

           </div>
           <div className='category-card'>
               <img src='https://pixelbuddha.net/storage/12298/2.jpg' alt =''/>
               <button>Shirt</button>

           </div>
       </section>
        {/* </div> */}
    </div>
</section>





<section className="discount">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 p-0">
                <div className="discount__pic">
                    <img src="img/discount.jpg" alt=""/>
                </div>
            </div>
            <div className="col-lg-6 p-0">
                <div className="discount__text">
                    <div className="discount__text__title">
                       
                        <h2>Style Inspiration of the Week</h2>
               
                    </div>
                    <div cclassName="discount__countdown" id="countdown-time">
                   
                    </div>
                    <a href="#">Order Today</a>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- Discount Section End -->




<!-- Footer Section Begin --> */}
<footer className="footer">
    <div className="container">
    <div className="footer__about">
                    <div className="categories__text">
                        <h1>About us</h1>
                    </div>
                    <p> Evasy Signatures is leading fashion brand in Ughelli Delta State. We are tasked with providing beautiful tailored outfits to suit all events.</p>
   
                </div>
                <div className="footer__social">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-youtube-play"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-pinterest"></i></a>
                    </div>

        <div className="row">
            <div className="col-lg-12">
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                <div className="footer__copyright__text">
                    <p>Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved </p>
                </div>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            </div>
        </div>
    </div>
</footer>
</React.Fragment>
  )
}

export default Home