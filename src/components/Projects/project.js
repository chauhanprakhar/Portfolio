import './project.css'
import github from '../../Media/Images/gihub.png'

function Projects() {
    return (
        <div id="projects">
           <div className="outer-container">
               <div style={{textAlign:'center'}}>
               <h1 style={{color:'brown'}}>Projects</h1>
               </div>
               <div className="column-container">
                   <div className="row-container">
                     <div className="project">
                     <div className="project-container">
                     <div className="flip-container">
	                 <div className="flipper" ontouchstart="this.classList.toggle('hover');">
                    <div className="front">
                      <h1>Instagram Clone</h1>
                      
                      <br></br>
                      <hr></hr>
                      <p>Libraries: React,Express,Mongoose On Javascript</p>
                      <br></br>
                      <p>Backend: NodeJS</p>
                    
                      <p>Database: MongoDB</p>
		            </div>
		            <div className="back">
                     <br></br>
                     <h3>Code:-</h3>
                     <br></br>
                     <img src={github} alt="Github" style={{height:'auto',width:'40px'}}/>
                     <br></br>
                     <h3>Link:-</h3>
                     <br></br>
                     <a href="#projects">Project</a> 
	            	</div>
	                </div>
                     </div>
                     </div>
                     </div>
                     <div className="project">
                     <div className="project-container">
                     <div className="flip-container">
	                 <div className="flipper" ontouchstart="this.classList.toggle('hover');">
                    <div className="front">
                      <h1>Video Player</h1>
                      <br></br>
                      <hr></hr>
                      <br></br>
                      <p>Library: React</p>
                      <br></br>
                      <p>API: YouTube </p>
                      <br></br>

		            </div>
		            <div className="back">
                     <h3>Code:-</h3>
                     <br></br>
                     <img src={github} alt="Github" style={{height:'auto',width:'40px'}}/>
                     <br></br>
                     <h3>Link:-</h3>
                     <br></br>
                     <a href="#projects">Project</a> 
	            	</div>
	                </div>
                     </div>
                     </div>
                     </div>
                     <div className="project">
                     <div className="project-container">
                     <div className="flip-container">
	                 <div className="flipper" ontouchstart="this.classList.toggle('hover');">
                    <div className="front">
                      <h1>Multiclient Application</h1>
                      <br></br>
                      <hr></hr>
                      <p>Language:- JAVA</p>
                      <br></br>
                      <p>Description:- Allow multiple users to chat on single platform based on threading</p>
		            </div>
		            <div className="back">
                     <h3>Code:-</h3>
                     <br></br>
                     <img src={github} alt="Github" style={{height:'auto',width:'40px'}}/>
                     <br></br>
                     <h3>Link:-</h3>
                     <br></br>
                     <a href="#projects">Project</a> 
	            	</div>
	                </div>
                    </div>
                     </div>
                     </div>
                    </div>
                    <div className="row-container">
                     <div className="project">
                     <div className="project-container">
                     <div className="flip-container">
	                 <div className="flipper" ontouchstart="this.classList.toggle('hover');">
                    <div className="front">
                      <h1>2048 Game</h1>
                      <br></br>
                      <hr></hr>
                      <br></br>
                      <p>Library: React</p>
                      <br></br>
                      <p>Description: It is a famous game built over Javascript,HTML and CSS.</p>
                      <br></br>
		            </div>
		            <div className="back">
                <h3>Code:-</h3>
                     <br></br>
                     <img src={github} alt="Github" style={{height:'auto',width:'40px'}}/>
                     <br></br>
                     <h3>Link:-</h3>
                     <br></br>
                     <a href="#projects">Project</a> 
	            	</div>
	                </div>
                    </div>
                     </div>
                     </div>
                     <div className="project">
                     <div className="project-container">
                     <div className="flip-container">
	                 <div className="flipper" ontouchstart="this.classList.toggle('hover');">
                    <div className="front">
                      <h1>Portfolio</h1>
                      <br></br>
                      <hr></hr>
                      <br></br>
                      <p>Library: React, Chart.js</p>
                      <br></br>
                      <p>Description: My portfolio built over HTML,CSS and Javascript.</p>
                      <br></br>
		            </div>
		            <div className="back">
                <h3>Code:-</h3>
                     <br></br>
                     <img src={github} alt="Github" style={{height:'auto',width:'40px'}}/>
                     <br></br>
                     <h3>Link:-</h3>
                     <br></br>
                     <a href="#projects">Project</a> 
	            	</div>
	                </div>
                     </div>
                     </div>
                     </div>
                     <div className="project">
                     <div className="project-container">
                     <div className="flip-container">
	                 <div className="flipper" ontouchstart="this.classList.toggle('hover');">
                    <div className="front">
                      <h1>Akhbaar</h1>
                      <br></br>
                      <hr></hr>
                      <br></br>
                      <p>Library: React Native</p>
                      <br></br>
                      <p>Description: It is currently in development phase.</p>
                      <br></br>
		            </div>
		            <div className="back">
                <h3>Code:-</h3>
                     <br></br>
                     <img src={github} alt="Github" style={{height:'auto',width:'40px'}}/>
                     <br></br>
                     <h3>Link:-</h3>
                     <br></br>
                     <a href="#projects">Project</a> 
	            	</div>
	                </div>
                     </div>
                     </div>
                     </div>
                    </div>

               </div>
           </div>
        </div>
    )
}

export default Projects;