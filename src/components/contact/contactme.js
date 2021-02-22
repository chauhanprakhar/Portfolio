import './contactme.css'
import github from '../../Media/Images/gihub.png'
import linkedin from '../../Media/Images/linkedin.png'
import twitter from '../../Media/Images/twitter.png'
import mail from '../../Media/Images/mail.png'

function Contactme(){
    return (
        <div id="contact">
            <div className="container">
                <div className="title" style={{color:'white',textAlign:'center',marginRight:'230px',marginBottom:'30px'}}>
                    <h1><u>Contact me</u></h1>
                </div>
                <div className="items">
                    <div className='block'>
                    
                    <div>
                    <a href="https://github.com/chauhanprakhar">
                        <img src={github} alt='Logo'/>
                    </a>
                    </div>
                    
                    </div>
                    <div className='block'>
                    
                    <div>
                    <a href="https://www.linkedin.com/in/prakhar-chauhan-8a8283199/">
                        <img src={linkedin} alt="LinkedIn" style={{width:'55px',height:'auto'}}/>
                    </a>
                    </div>
                    
                    </div>
                    <div className='block'>
                   
                    <div className="block">
                    <a href="https://twitter.com/Prakhar56782861">
                       <img src={twitter} alt="Twitter" style={{width:'65px',height:'auto'}}/>
                     </a>
                    </div>
                    
                    </div>
                    <div className='block'>
                    <a href="www.google.com">
                    <div className="block">
                        <img src={mail} alt="LinkedIn" style={{width:'55px',height:'auto',borderRadius:'30px'}}/>
                    </div>
                    </a>
                    </div>
                </div>

            </div>
            <div className="empty"></div>
        </div>
    )
}

export default Contactme;