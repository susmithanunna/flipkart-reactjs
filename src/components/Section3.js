import React from 'react'
import '../App'
import banner1 from '../images/section3image1.png'
import banner2 from '../images/section3image2.jpg'
import banner3 from '../images/section3image3.jpg'
import banner4 from '../images/section3image4.jpg'
import '../css/bootstrap.css';
function Section3() {
    return (
        <>
            <div id="carouselExampleControls" class="carousel slide section3" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={banner1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={banner2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={banner3} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={banner4} class="d-block w-100" alt="..."/>
                    </div>
                 
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
export default Section3;