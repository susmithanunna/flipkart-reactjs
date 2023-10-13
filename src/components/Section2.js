import React from 'react'
import '../App'
import logo2 from '../images/section2image1.png';
import logo3 from '../images/section2image2.png';
import logo4 from '../images/section2image3.png';
import logo5 from '../images/section2image4.png';
import logo6 from '../images/section2image5.png';
import logo7 from '../images/section2image6.png';
import logo8 from '../images/section2image7.png';
import logo9 from '../images/section2image8.png';
import logo10 from '../images/section2image9.png';
import logo11 from '../images/section2image10.png';
import { Link } from 'react-router-dom';

function Section2() {
    return (
        <>
            <div class="section2 row" >
                <div class="col-md-1"></div>
                <div className="col-md-1 sal"><Link to="Topoffers"><img className="image2" src={logo2} />Top Offers</Link></div>
                    <div className="col-md-1 sal"><img className="image2" src={logo3} />Mobiles&Tablets</div>
                    <div className="col-md-1 sal"><img className="image" src={logo4} />Electronics</div>
                    <div className="col-md-1 sal"><img className="image2 " src={logo5} />TV&Appliances</div>
                    <div className="col-md-1 sal"><img className="image2 " src={logo6} />Fashion</div>
                    <div className="col-md-1 sal"><img className="image2 " src={logo7} />Beauty</div>
                    <div className="col-md-1 sal"><img className="image2 " src={logo8} />Home&Kitchen</div>
                    <div className="col-md-1 sal"><img className="image2 " src={logo9} />Furniture</div>
                    <div className="col-md-1 sal"><img className="image2-" src={logo10} />Flights</div>
                    <div className="col-md-1 sal"><img className="image2" src={logo11} />Grocery</div>

                {/* <div className="section2names">
                    <ul>
                        <a className="name1">Top Offers</a>
                        <a className="name2">Mobiles&Tablets</a>
                        <a className="name3">Electronics</a>
                        <a className="name4">TV&Appliances</a>
                        <a className="name5">Fashion</a>
                        <a className="name6">Beauty</a>
                        <a className="name7">Home&Kitchen</a>
                        <a className="name8">Furniture</a>
                        <a className="name9">Flights</a>
                        <a className="name10">Grocery</a>
                    </ul>
                </div> */}
                </div>

        </>
    )
}
export default Section2;