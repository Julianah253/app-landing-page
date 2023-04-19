import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div>
        <footer>
            <h2> Send Me Mail </h2>

            <div class="mailme">

            {/* <h2> Send Me Mail </h2> */}
            <br/>
                <form>
                    <input type="text" name="Email" id="mail" placeholder="example@gmail.com"/>
                    <br/>
                    <input type="submit" name="Submit" value="Contact"/>
                </form>
            </div>
        </footer>
    </div>
  )
}

export default Footer