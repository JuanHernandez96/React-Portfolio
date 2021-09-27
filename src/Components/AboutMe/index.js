import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import lol from '../Images/LoL.PNG'
import csgo from '../Images/cs-go.PNG'

// about me page just giving a little descriptiong
function AboutMe(){
    return(
   
        
        <div className="text-center text-lg-start bg-light text-muted">
            {/* bring all things from nav to every page so you can go back and forth */}
             <Nav></Nav>
            <h1 id="contact"  className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"> About Me </h1>
            <p> Hi there my name is Juan and I recently started to love coding, its interesting to have such challenge where you can have so many possiblities on how to solve them! </p>
            <p> Love playing games like League of Legends, Apex legends, CS:GO, and Dead by daylight </p>
            <img src={lol} width='500' height='300' alt='League of Legends' /> <img src={csgo} width='500' alt='csgo' />
            <footer>
                {/* footer page items imported */}
                <Footer></Footer>
            </footer>
        </div>
        

    )
}



export default AboutMe;