import './Skills.css'

function Skills(props)
{
    return(
        <div className={props.darkMode ? "skills-section-dark" : "skills-section"}>
            <h2 className="skills-main-title">Skills & Expertise</h2>
            
            <div className="skills-cards">
                <div className="container">
                    <h2 className="category-title">Frontend</h2>
                    <div className="cards-wrapper">
                        <div className="card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                            <h3>HTML</h3>
                        </div>
                        <div className="card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                            <h3>CSS</h3>
                        </div>
                        <div className="card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                            <h3>JavaScript</h3>
                        </div>
                        <div className="card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                            <h3>React</h3>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h2 className="category-title">Backend & Languages</h2>
                    <div className="cards-wrapper">
                        <div className="card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                            <h3>Node.js</h3>
                        </div>
                        <div className="card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" />
                            <h3>Express.js</h3>
                        </div>
                        <div className="card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                            <h3>Python</h3>
                        </div>
                        <div className="card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                            <h3>Java</h3>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h2 className="category-title">Database & Tools</h2>
                    <div className="cards-wrapper">
                        <div className="card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />
                            <h3>SQL</h3>
                        </div>
                        <div className="card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                            <h3>MongoDB</h3>
                        </div>
                        <div className="card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />
                            <h3>Firebase</h3>
                        </div>
                        <div className="card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                            <h3>Git</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;