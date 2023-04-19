import React from 'react'
import './pix.css'

const Pix = () => {
  return (
    <div>
        <div class="images">
            <div className="img1">
                <img src="./images/feature_1.png"/>
                <br/><br/><br/>
                <h3> Development Course </h3>
                <br/>
                <p> Lorem ipsum dolor sit amet <br/>consectetur adipisicing. </p>
            </div>
            <div className="img1">
                <img src="./images/feature_2.png"/>
                <br/><br/><br/>
                <h3> Money Saving Services </h3>
                 <br/>
                <p> Lorem ipsum dolor sit amet <br/>consectetur adipisicing. </p>
            </div>
            <div className="img1">
                <img src="./images/feature_3.png"/>
                <br/><br/><br/>
                <h3> Usability Interface </h3>
                <br/>
                <p> Lorem ipsum dolor sit amet <br/>consectetur adipisicing. </p>
            </div>
        </div>
    </div>
  )
}

export default Pix