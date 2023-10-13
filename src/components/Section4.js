import React from 'react'
import '../App'
import logo13 from '../images/section4image1.png';
import logo14 from '../images/section4image2.png';
import logo15 from '../images/section4image3.png';
import logo16 from '../images/section4image4.png';
import logo17 from '../images/section4image5.png';
import logo18 from '../images/section4image6.png';
function Section4() {
    return (
        <>
        <div className='row bestmobiles'>
            <div className='col-md-10 section4'>
                <div className="section4heading"><bold>Best Mobiles</bold></div>
                <div className="section4images1">
                    <img className="image1" src={logo13} />
                    <img className="image2" src={logo14} />
                    <img className="image3" src={logo15} />
                    <img className="image4" src={logo16} />
                    <img className="image5" src={logo17} />
                </div>
            </div>
            <div className='col-md-2 section4images2 float-end text-right bg-info'>
                <img  className="image6" src={logo18} />
            </div>
            </div>
        </>
    )
}
export default Section4;
