import React from 'react';
import Nav from '../Nav';


function Projects() {
    return(
        <section className="text-center text-lg-start bg-light text-muted">
             <Nav></Nav>
            <h1 id="contact"  className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"> Projects! </h1>
            
            <p><a href='https://github.com/JuanHernandez96/run-buddy'> Run Buddy </a>  </p>
            <p><a href='https://github.com/JuanHernandez96/taskinator'> Taskinator </a>  </p>
            <p><a href='https://github.com/JuanHernandez96/robot-gladiators'> Robot Gladiators </a>  </p>
        </section>
    )
}

export default Projects;