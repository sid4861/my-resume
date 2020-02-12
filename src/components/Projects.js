import React from 'react';

const Projects = () => {
    return(
        <div>
        <section className="colorlib-work" data-section="projects">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">My Work</span>
                        <h2 className="colorlib-heading animate-box">Recent Projects</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                        <div className="project" style={{backgroundImage: 'url(images/project-1.jpg)'}}>
                            <div className="desc">
                                <div className="con">
                                    <h3><a href="https://todolistbysid.netlify.com/">To do list</a></h3>
                                    <span>A todo list based on Bootstrap and Javascript</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                        <div className="project" style={{backgroundImage: 'url(images/project-2.jpg)'}}>
                            <div className="desc">
                                <div className="con">
                                    <h3><a href="https://landingpagebysid.netlify.com/">Landing Page</a></h3>
                                    <span>A sample landing page using HTML, CSS and Bootstrap</span>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                        <div className="project" style={{backgroundImage: 'url(images/project-3.jpg)'}}>
                            <div className="desc">
                                <div className="con">
                                    <h3><a href="https://dry-thicket-35252.herokuapp.com/"> A Web app using Express</a></h3>
                                    <span>Technologies used - HTML, CSS, Bootstrap, Node JS, express, MongoDB Atlas</span>
                                  
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                        <div className="project" style={{backgroundImage: 'url(images/project-4.jpg)'}}>
                            <div className="desc">
                                <div className="con">
                                    <h3><a href="https://museumofcandybysid.netlify.com/"> A Landing Page</a></h3>
                                    <span>Technologies used - HTML, CSS, Bootstrap</span>
                                  
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            
            </div>
        </section>
</div>
    );
};

export default Projects;