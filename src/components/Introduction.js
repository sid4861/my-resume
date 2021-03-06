import React from 'react';

const Introduction = () => {
    return (
        <div>
            <section id="colorlib-hero" className="js-fullheight" data-section="home">
                <div className="flexslider js-fullheight">
                    <ul className="slides">
                        <li style={{ backgroundImage: 'url(images/bg1.jpg)', backgroundSize:'cover', backgroundPosition:'center' }}>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner js-fullheight">
                                            <div className="desc">
                                                <h1 style={{color:'white'}}>Hi! <br />I'm Siddharth</h1>
                                                <p><a className="btn btn-primary btn-learn btn-light" style={{color:'white'}} href="https://siddharth-resume.herokuapp.com/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume<i className="icon-download4" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                     
                        <li style={{ backgroundImage: 'url(images/bg2.jpg)', backgroundSize:'60% 50%', backgroundPosition:'right'  }}>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <h1>Check out my blog <br />on Medium </h1>
                                                <p><a className="btn btn-primary btn-learn" href="https://medium.com/codebooklets" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Introduction;