import "./Navbar.css"
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

function Navbar(props)
{
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    
    return(
        <div>
            <div className={props.darkMode? "navbar-dark" : "navbar"}>
                <div className={props.darkMode? "logo-dark" : "logo"}>Chaitrali Waikar</div>
                <div className="items">   
                    <h2 
                        className={props.darkMode? "item-dark" : "item"}
                        onClick={() => scrollToSection('about-me')}
                    >
                        About me
                    </h2>
                    <h2 
                        className={props.darkMode? "item-dark" : "item"}
                        onClick={() => scrollToSection('projects')}
                    >
                        Projects
                    </h2>
                    <h2 
                        className={props.darkMode? "item-dark" : "item"}
                        onClick={() => scrollToSection('skills')}
                    >
                        Skills
                    </h2>
                    <h2 
                        className={props.darkMode? "item-dark" : "item"}
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact
                    </h2>
                    <button className="theme-toggle" onClick={props.change}>
                        {props.darkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
                    </button> 
                </div>
            </div>
        </div>
    )
}

export default Navbar;