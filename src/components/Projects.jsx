/* eslint-disable no-unused-vars */
import "./Projects.css"
import proj1 from "../images/proj1.png"
import proj2 from "../images/proj2.png"
import VBS  from "../images/Home.png"
import MoneyWise from "../images/MONEYWISE.png"
import tweetAgent from "../images/Tweetgen.png"
import skillduels from "../images/skillduels.png"

function Projects(props)
{
    console.log("Projects darkMode:", props.darkMode); // Debug line
    
    return(
        <div className={props.darkMode ? "projects-section-dark" : "projects-section"}>
            <h2 className="title">Projects</h2>
            <div className="cards-container">

                <a href="https://github.com/ChaitraliWaikar/Meal-Bridge" target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <img src={proj2} className="img-container" alt="proj-img" />
                        <h3 className="proj-title">Meal Bridge</h3>
                        <p className="desc">A web app connecting home cooks with communities to share surplus meals,
                             reducing food waste. Built with <span className="highlight">HTML, CSS, JavaScript </span>
                        </p>
                        <button className="view-btn">View Project details</button>
                    </div>
                </a>

                <a href="https://github.com/ChaitraliWaikar/Virtual-Banking-System" target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <img src={VBS} className="img-container" alt="proj-img" />
                        <h3 className="proj-title">Virtual Banking System</h3>
                        <p className="desc">A secure banking application with transaction management, 
                            account handling, and real-time updates. Built with <span className="highlight"> Java Swing, JDBC, and SQL.</span>
                        </p>
                        <button className="view-btn">View Project details</button>
                    </div>
                </a>

                <a href="https://github.com/ChaitraliWaikar/Aarambh" target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop" className="img-container" alt="proj-img" />
                        <h3 className="proj-title">Aarambh</h3>
                        <p className="desc">A habit tracking application with Firebase authentication 
                            and real-time data sync. 
                            Built with <span className="highlight"> HTML, CSS, JavaScript, and Firebase.</span>
                        </p>
                        <button className="view-btn">View Project details</button>
                    </div>
                </a>

                <a href="https://github.com/ChaitraliWaikar/MoneyWise" target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <img src={MoneyWise} className="img-container" alt="proj-img" />
                        <h3 className="proj-title">Money Wise</h3>
                        <p className="desc">AI-powered multi-agent web app that helps users improve financial literacy and manage budgets. Built with <span className="highlight"> Flask and Google Generative AI API.</span>
                        </p>
                        <button className="view-btn">View Project details</button>
                    </div>
                </a>

                <a href="https://github.com/ChaitraliWaikar/Python_AI_Projects" target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <img src={tweetAgent} className="img-container" alt="proj-img" />
                        <h3 className="proj-title">AIML Projects</h3>
                        <p className="desc">AI and Machine Learning Projects repository containing various AI and ML projects, including image recognition,
                             natural language processing, and predictive analytics. Built with <span className="highlight">Python, TensorFlow, and scikit-learn.</span>
                        </p>
                        <button className="view-btn">View Project details</button>
                    </div>
                </a>

                 <a href="https://github.com/ChaitraliWaikar/SkillDuels" target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <img src={skillduels} className="img-container" alt="proj-img" />
                        <h3 className="proj-title">SkillDuels (Ongoing)</h3>
                        <p className="desc">A  gamified web platform that promotes competitive learning by allowing students 
                        to challenge each other in quizzes and skill-based games.
                        <span className="highlight"> MERN stack app with real-time multiplayer functionality using Socket.io. </span>
                        </p> 
                        <button className="view-btn">View Project details</button>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default Projects;