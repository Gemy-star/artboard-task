import React from "react";
import intro from '../assets/images/intro.png';


const Intro = () => {
    return (
        <div className="row">
            <div className="col-7">
                <img src={intro} className="intro-img" alt="intro-img" />
            </div>
            {/* <div className="col-5 d-flex align-items-center flex-column intro-div">
                <p style={{
                    fontSize: '36px',
                    fontWeight: '400',
                    lineHeight: '54px',
                    textAlign: 'left'
                }}>Get personalised home interiors</p>
            </div> */}
        </div>
    )
}


export default Intro;