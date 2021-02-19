import React from "react";
import profilepic from '../../assets/images/profile_pic.jpg';

import './cv.component.scss'

const CvComponent = () => {
  return (
    
    <div className="cv">
      <div className="cv-page h-resume canvas_div_pdf">
    <div className="cv-page-inner">
      <div className="cv-section cv-header p-contact h-card">
        <div className="cv-header-avatar">
          <img src={profilepic} alt="profile" />
        </div>
        <div className="cv-header-text">
          <h1 className="cv-header-name p-name">
            Abhijith Sugunan
          </h1>
          <h2 className="cv-header-subname p-title">Full-stack Software Engineer</h2>
          <div className="cv-header-lead p-note">
            4 years of experience in front-end and back-end engineering.<br />
            Ambitious and communicative. Good mentor and team player<br />

          </div>
        </div>
        <div className="cv-header-meta">
          <div className="cv-header-meta-right">

            <div className="cv-header-meta-row">
              <a href="https://abhijithsugunan.com/" rel="me" className="u-url">www.abhijithsugunan.com</a>
            </div>
            <div className="cv-header-meta-row">
              <a href="mailto:abijeeth@live.com" className="u-email">abijeeth@live.com</a>
            </div>
            <div className="cv-header-meta-row">
              +91 906 142 2004
            </div>
            <div className="cv-header-meta-row">
              <a href="https://www.linkedin.com/in/abhijithsugunan/">linkedin.com/in/abhijithsugunan/</a>
            </div>

          </div>
        </div>
      </div>

      <div className="cv-section">
        <h3 className="cv-section-title">Skills</h3>
        <div className="cv-section-content cv-section-content--indented">
          <ul >
            <li>
              Back-end: .Net Core Web API, SQL databases, RabbitMQ
              .Designed and maintained several web app
              backends with ~100k LoC.
            </li>
            <li>
              Front-end: JavaScript, TypeScript, Angular, React (Beginner).
            </li>
            <li>
              Attentive to UI/UX details and high code quality. Fan of unit tests,
              functional programming, typed interfaces, and DDD.
            </li>
            <li>
              Can help in or take over: project management, estimation and
              ownership, tech recruitment, client negotiations.
            </li>
            <li>Used to participate in algorithm programming competitions.</li>
            <li>
              Open to evolving in: Go, nodejs, python, Docker, Kubernetes, and much more.
            </li>
          </ul>
        </div>
      </div>

      <div className="cv-section">
        <h3 className="cv-section-title">Experience</h3>
        <div className="cv-section-content">
          <div className="cv-timeline">
            <div className="cv-timeline-row p-experience h-event">
              <div className="cv-timeline-side">
                <div className="cv-timeline-company">Vofox Solutions</div>
                <div className="cv-timeline-date">Dec 2018 - Present</div>
                <a href="https://vofoxsolutions.com/" rel="noreferrer" target="_blank" className="cv-timeline-website">vofoxsolutions.com</a>
              </div>
              <div className="cv-timeline-body p-summary">
                <h4 className="cv-timeline-position p-name">
                  Software Engineer
                </h4>
                <p>
                  Involved in development of multiple project for various clients in .Net Core, Angular and Asp.Net.
                </p>
                <ul>
                  <li>
                    Created a third party schedule bidding PWA application for SouthWest Airline employees,
                    using angular 7 and .net core 2.2.
                  </li>
                  <li>
                    Created clear architecture APIs in .Net Core
                  </li>
                  <li>
                    Worked with Dexie.js for handling IndexDB for PWA applications.
                  </li>
                  <li>
                    Experience in implementing ngsx library on a project for handling the state.
                  </li>
                  <li>
                    Created CI/CD pipeline for angular application in GitLab.
                  </li>
                  <li>
                    Lead a team for 4 Developers and QA for an offshore project for a major US based Education portal.
                  </li>
                  <li>
                    Contributed to building a solid process around PR reviews that focused on providing
                    more detailed feedback to new developers
                  </li>
                  <li>
                    Mentoring Junior developers with various technologies including .Net WebAPI, Angular, Design
                    Patterns, and modern JavaScript.
                  </li>
                  <li>
                    Creating In-house Support Ticket Application using React, .Net5 WebAPI
                  </li>
                </ul>
              </div>
            </div>

            <div className="cv-timeline-row p-experience h-event">
              <div className="cv-timeline-side">
                <div className="cv-timeline-company">Reply Valorem</div>
                <div className="cv-timeline-date">Apr 2018 - Dec 2018</div>
                <a href="https://www.valoremreply.com/" rel="noreferrer" target="_blank" className="cv-timeline-website">valoremreply.com</a>
              </div>
              <div className="cv-timeline-body p-summary">
                <h4 className="cv-timeline-position p-name">
                  Software Engineer I
                </h4>
                <p>
                  Worked on a SaaS ATS platform that helps recruiters manage their
                  job offers and candidates.
                </p>
                <ul>
                  <li>
                    Worked with Azure Service Bus for implementing a project-specific purpose.
                  </li>
                  <li>
                    Created various API endpoints in support of Exchange Migration for O365 in .Net Web API.
                  </li>
                  <li>
                    Developed a Utility application in WinForm creating SQL queries from .xlxs files for a process
                    improvement in the project.
                  </li>
                  <li>
                    Also got many opportunities to interact with the global developers since they consist of developers
                    in different regions.
                  </li>
                  <li>
                    Developed unit back-end for every task that worked on.
                  </li>
                </ul>
              </div>
            </div>

            <div className="cv-timeline-row p-experience h-event">
              <div className="cv-timeline-side">
                <div className="cv-timeline-company">Reply Valorem</div>
                <div className="cv-timeline-date">Apr 2017 - Dec 2018</div>
                <a href="https://www.valoremreply.com/" target="_blank" rel="noreferrer" className="cv-timeline-website">valoremreply.com</a>
              </div>
              <div className="cv-timeline-body p-summary">
                <h4 className="cv-timeline-position p-name">
                  Associate Software Engineer
                </h4>
                <ul>
                  <li>
                    Involved in the Development and revamping of the Microsoft BVP project.
                  </li>
                  <li>
                    Handled various frameworks like .Net Core, .Net Framework and AngularJS
                  </li>
                </ul>
              </div>
            </div>

            <div className="cv-timeline-row p-experience h-event">
              <div className="cv-timeline-side">
                <div className="cv-timeline-company">Kefas Softwares</div>
                <div className="cv-timeline-date">Jan 2014 - Dec 2015</div>
                <a href="https://www.kefassoftwares.com" target="_blank" rel="noreferrer"
                  className="cv-timeline-website">kefassoftwares.com</a>
              </div>
              <div className="cv-timeline-body p-summary">
                <h4 className="cv-timeline-position p-name">
                  Software Engineer
                </h4>
                <p>
                  Built and maintained a social platform, that lets users easily
                  find the best music fests, organize their trip and personalize
                  their festival experience.
                </p>
                <ul>
                  <li>
                    Created educational prototype project in Angular 2.
                  </li>
                  <li>
                    Contributed to in-house C++ based Web Application Framework (Santiago)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="cv-section">
        <h3 className="cv-section-title">Education</h3>
        <div className="cv-section-content">
          <div className="cv-timeline">
            <div className="cv-timeline-row p-education h-event">
              <div className="cv-timeline-side">
                <div className="cv-timeline-company">
                  Sree Buddha College Of Engineering
                </div>
                <div className="cv-timeline-date">2013 - 2016</div>
                <a href="https://sbce.ac.in/" rel="noreferrer" target="_blank" className="cv-timeline-website">sbce.ac.in/</a>
              </div>
              <div className="cv-timeline-body p-summary">
                <div className="cv-timeline-position p-name">Computer Science Engineering</div>
                <ul>
                  <li>
                    Graduated in Computer Science and Engineering with a 7.114 CGPA
                  </li>
                  <li>
                    Active member of ACM students chapter
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="cv-section-content">
          <div className="cv-timeline">
            <div className="cv-timeline-row p-education h-event">
              <div className="cv-timeline-side">
                <div className="cv-timeline-company">
                  Carmel Polytechnic College
                </div>
                <div className="cv-timeline-date">2010 - 2013 </div>
                <a href="http://carmelpoly.in/" rel="noreferrer" target="_blank" className="cv-timeline-website">carmelpoly.in/</a>
              </div>
              <div className="cv-timeline-body p-summary">
                <div className="cv-timeline-position p-name">Computer Engineering</div>
                <ul>
                  <li>
                    Completed Diploma in Computer Engineering with 8.4 CGPA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="cv-section">
        <h3 className="cv-section-title">Personal</h3>
        <div className="cv-section-content cv-section-content--indented">
          <ul>
            <li>
              During free times explores new technologies and read technical blogs.
            </li>
            <li>
              Speaks fluent English and Malayalam
            </li>
            <li>
              Likes to travel, play cricket and pc games.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default CvComponent;
