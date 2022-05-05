import React, { useEffect,useState } from 'react'
// import { getStorage, ref } from "firebase/storage";
import Navbar from '../utils/Navbar'
import { useSelector, useDispatch } from "react-redux"
import {Link} from "react-router-dom";
import { db,storage} from'../../firebase'
import {set, ref,onValue} from 'firebase/database'
import EmptyCart from '../../assets/icons/emptycart.svg'
import { getdetails } from '../../actions';
// import {GownItem} from '../utils/Data'
import './css/Store.css'

const Gown = () => {

    const [gown_details, setGown_details] =useState([])
    const details  = useSelector(state => state.detailsReducer)
    const dispatch = useDispatch()
    console.log(details)



useEffect(()=>{
 
      
           dispatch(getdetails())
 
        
  
     
}, [])
  
  return (
  <React.Fragment>
      <Navbar/>

 {/* /* <!-- Header Section End -->
<
    <!-- Breadcrumb Begin --> */} 
    <button onClick={()=> dispatch(getdetails())}>
        click
    </button>
    <div class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__links">
                        <Link to ='/'><i class="fa fa-home"></i> Home</Link>
                        <span><Link to ='/store'>Store</Link></span>
                        <span>Gown </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb End -->

    <!-- Shop Section Begin --> */}
    <section class="shop spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3">
                    <div class="shop__sidebar">
                        <div class="sidebar__categories">
                            <div class="section-title">
                                <h4>Categories</h4>
                            </div>
                            <div class="categories__accordion">
                                <div class="accordion" id="accordionExample">
                                    <div class="card">
                                        <div class="card-heading active">
                                            <a data-toggle="collapse" data-target="#collapseOne">Shirts</a>
                                        </div>
                                        <div id="collapseOne" class="collapse show" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <ul>
                                                    <li><Link to='/shirt'>Adult</Link></li>
                                                    <li><a href="#">Kids</a></li>
                                                 
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseTwo">Gowns</a>
                                        </div>
                                        <div id="collapseTwo" class="collapse" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <ul>
                                                    <li><a href="#">Adult</a></li>
                                                    <li><a href="#">Kids</a></li>
                                        
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseThree">Two Piece</a>
                                        </div>
                                        <div id="collapseThree" class="collapse" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <ul>
                                                <li><a href="#">Adult</a></li>
                                                    <li><a href="#">Kids</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseFour">Skirts</a>
                                        </div>
                                        <div id="collapseFour" class="collapse" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <ul>
                                                <li><a href="#">Adult</a></li>
                                                    <li><a href="#">Kids</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
  
                                </div>
                            </div>
                        </div>
           
                  
                    </div>
                </div>
                <div class="col-lg-9 col-md-9">
               
                 
                      
                           {
                               details.length===1 &&
                               <div className ='no-item'>
                                   <img src ={EmptyCart} alt ="/"/>
                                   <h5>No Items Available</h5>
                                   </div>
                           }
                         {
                               details.length!==1 &&
                              
                               <div className="row-store ">
                                   {/* {details.map((datas)=>{
                                const {id, title, image, price,tag}= datas
                                return     <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="https://mockuptree.com/wp-content/uploads/edd/2018/11/Free-Modern-Girl-Dress-Mockup-PSD.jpg">
                                    <img className ='product-image'src={image} alt ='/'/>
                                  {tag ==='New'&&
                                    <div class="label new">New</div>
                                    }
                                       {tag ==='Sale'&&
                                      <div class="label sale">Sale</div>
                                }
                                    <ul class="product__hover">
                                        <li><a href={image} class="image-popup"><span class="arrow_expand"></span></a></li>
 
                                        <li><a href="#"><span><i className ='fa fa-cart-plus'></i></span></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href={image}>{title}</a></h6>
                             
                                    <div class="product__price">N{price}.0</div>
                                </div>
                            </div>
                            })} */}
                            </div>
                           }
                        
                   
                  
                    <div class="row">
                     
             
                    
       
                        <div class="col-lg-12 text-center">
                            <div class="pagination__option">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#"><i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Shop Section End -->

    <!-- Instagram Begin --> */}
   
    {/* <!-- Instagram End -->

    <!-- Footer Section Begin --> */}

    {/* <!-- Footer Section End -->

    <!-- Search Begin --> */}
    <div class="search-model">
        <div class="h-100 d-flex align-items-center justify-content-center">
            <div class="search-close-switch">+</div>
            <form class="search-model-form">
                <input type="text" id="search-input" placeholder="Search here....."/>
            </form>
        </div>
    </div>
</React.Fragment>
  )
}

export default Gown