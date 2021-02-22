import profile from '../../Media/Images/profile.png'
import './Aboutme.css'
function About() {
    return(
        <div className="outer" id="about">
            <div className="outerclass">
                <div className="outerclass-top">
                     <div className="profile-container">
                    <img className="profile" src={profile} alt="Profile"></img>
                    </div>
                    <div className="text-container">
                    <p1> <h1>About me</h1> <br></br><p>Hi there! I am<strong> Prakhar Chauhan,</strong></p>a passionate programmer and a gamer.
                     I am a Full Stack Web Developer with React.js,React-Native, Express.js, Node.js, and Designing 
                     as my tech stack.
                    <br></br>I'm currently studying at Indian Institute of Information Technology Vadodara.
                    <br></br><br></br></p1> 
                    </div>

                </div>
                <br></br>
                <p1>My ability to learn from mistakes is my greatest strength.
                  Along with that, I'm a competetive programmer. 
                  I love learning about new technologies, what problems are they solving and 
                  How can I use them to build better and scalable products.</p1>
                {/* <div className="bottom">
                <div><p1>Resume</p1></div>
                <div><p1>Resume</p1></div>
                <div><p1>Resume</p1></div>
                <div><p1>Resume</p1></div>
                </div> */}
            </div>
            
        </div>
    )
}
export default About;