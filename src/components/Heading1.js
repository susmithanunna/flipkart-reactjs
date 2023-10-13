import React from 'react';
import '../App';
import logo1 from '../images/headimage.png';
import {Link} from 'react-router-dom';
function Heading() {
  return (
    <>
      
      <div className='headingimage col-md-2'>
        <img src={logo1} width="160" />
      </div>
      <div className='search col-md-5'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input class="searchbar" type="text" value="Search for Products,Brands and More" />
      </div>
      <div class="col-md-5 user1">
        <div class="user">
          <Link to="Become_a_Seller_form" ><i class="fa-solid fa-house"></i>Become a Seller</Link>
          <i class="fa-solid fa-user"></i>Sign in
          <i class="fa-solid fa-cart-shopping"></i>Cart
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
    </>
  )
}
export default Heading;
