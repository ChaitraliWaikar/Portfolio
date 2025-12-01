import './Aboutme.css'
import pfp from "../images/pfp6.png"
 

function Aboutme(props)
{
    const scrollToContact = () => {
        const contactSection = document.querySelector('.contact-section, .contact-section-dark');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
<div className={props.darkMode? "aboutme-dark" : "aboutme"}>
    <img className='image-container' src={pfp} alt="profile-pic" />
    <div className="text-content">
        <b style={{alignContent:'justify', fontSize:'30px'}}> Hello, I'm Chaitrali ! </b>
       <p className='intro'>
  Welcome! I'm <span className={props.darkMode? "highlight-dark" : "highlight"}> a web developer</span> passionate about creating 
  <span className={props.darkMode? "highlight-dark" : "highlight"}> clean, responsive, and user-focused applications</span>.  
  I've worked on <span className={props.darkMode? "highlight-dark" : "highlight"}>real hackathon projects, full-stack prototypes, and practical web apps</span> using HTML, CSS, JavaScript, React, Node.js, and SQL.  
  I'm constantly improving my skills and turning prototypes into polished solutions while learning 
  how to build truly <span className={props.darkMode? "highlight-dark" : "highlight"}>scalable, production-ready systems</span>.  
  I love collaborating, solving real-world problems, and growing with every project I build.
</p>
    </div>
    <button onClick={scrollToContact} className='contact-btns'>Get in Touch</button>
</div>
    )
}

export default Aboutme;