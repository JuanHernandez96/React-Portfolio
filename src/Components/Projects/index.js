import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import taskinator from '../Images/taskinator.PNG'
import runBuddy from '../Images/RunBuddy.PNG'


// Projects page showing previous lessons and linking them to their respective github pages
function Projects() {
    return(
        <section className="text-center text-lg-start bg-light text-muted">
            {/* bring all things from nav to every page so you can go back and forth */}
             <Nav></Nav>
            <h1 id="contact"  className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"> Projects! </h1>
            
            <p><a href='https://github.com/JuanHernandez96/run-buddy'> Run Buddy </a> </p>
            <img src={runBuddy} width='700' height='250' alt='showing run buddy website'/>
            <p><a href='https://github.com/JuanHernandez96/taskinator'> Taskinator </a>  </p>
            <img src={taskinator} width='700' height='250' alt='showing taskinator website'/>
            <p><a href='https://github.com/JuanHernandez96/robot-gladiators'> Robot Gladiators </a>  </p>

            <footer>
                {/* footer page items imported */}
                <Footer></Footer>
            </footer>
        </section>
    )
}

export default Projects;