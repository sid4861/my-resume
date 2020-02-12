import React from 'react';

const Timeline = () => {
    return(<div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-clock" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Support Engineer at Amdocs <span>2019-present</span></h2>
                        <p>I am working as a software support engineer in DevOps model. My major part of the work has been into the field of creating sustainable and flexible CI/CD (Continuous Integration & Continuous Development) pipelines which enables production scale deployment. I am also exploring Docker and Kubernetes to create industry standard production environments.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-clock" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduation at Sinhgad College of Engineering, Pune, India <span>2013-2017</span></h2>
                        <p>I have completed my under-graduation studies with major in Computer Engineering. I have taken courses like Data Structures and Algorithms, Database management systems, Object oriented programming over the years. Object Oriented Programming is what fascinated me the most.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-clock" />
                      </div>
                      <div className="timeline-label">
                        <h2>Seocndary and Senior School Education <span>2010-2013</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics,Chemistry & Maths with 10 CGPA in Class 10th and  95.4 % in class 12th. Since school, I have always been interested in Maths and Computer Science </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>);
};

export default Timeline;