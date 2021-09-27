import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';

// about me page just giving a little descriptiong
function AboutMe(){
    return(
   

        <div className="text-center text-lg-start bg-light text-muted">
             <Nav></Nav>
            <h1 id="contact"  className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"> About Me </h1>
            <p> Hi there my name is Juan and I recently started to love coding, its interesting to have such challenge where you can have so many possiblities on how to solve them! </p>
            <Footer></Footer>
        </div>


    )
}



export default AboutMe;