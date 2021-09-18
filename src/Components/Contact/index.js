import React from 'react'
import Nav from '../Nav';

function ContactMe() {
    return(
   

        <div className="text-center text-lg-start bg-light text-muted">
             <Nav></Nav>
            <h1 id="contact"  className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"> Contact Me here! </h1>
            <p> Email: juanh@Aol.com </p>
            <p> Phone: 555-555-5555 (hablamos español)</p>
            <p> GitHub:  <a href="https://github.com/JuanHernandez96">  https://github.com/JuanHernandez96</a></p>
        </div>


    )
}

export default ContactMe;