import React from 'react';

const Sidebar = () => {
    return (
        <div>
            <div>
                <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                <aside id="colorlib-aside" className="border js-fullheight">
                    <div className="text-center">
                        <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
                        <h1 id="colorlib-logo"><a href="index.html">Siddharth Lodha</a></h1>
                        <span className="email"><i className="icon-mail"></i> siddharthlodha42@gmail.com</span>
                    </div>
                    <nav id="colorlib-main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                            <ul>
                                <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                                <li><a href="#about" data-nav-section="about">About</a></li>
                                {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                                <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                                <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                            </ul>
                        </div>
                    </nav>
                    <nav id="colorlib-main-menu">
                        <ul>
                        <li><a href="https://linkedin.com/in/siddharth-lodha-693418105/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                        <li><a href="https://medium.com/codebooklets" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
                            <li><a href="https://twitter.com/codebooklets" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                            <li><a href="https://www.instagram.com/codebooklets/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                            
                            <li><a href="https://github.com/sid4861" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                            <p><a className="btn btn-primary btn-learn" href="https://siddharth-resume.herokuapp.com/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume<i className="icon-download4" /></a></p>
                            
                        </ul>
                    </nav>
                 
                </aside>
            </div>
        </div>
    );
};


export default Sidebar;