import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="February 2025 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              @ Verior (Part Time)
            </h4>
            <div>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                Certly – React Native learning & quiz competition app
              </p>
              <p style={{ fontStyle: "italic", marginBottom: "10px" }}>
                Role: REST API Integration
              </p>
              <p style={{ marginBottom: "15px" }}>
                Developed and integrated secure REST APIs to handle user
                authentication, quiz retrieval, and leaderboard synchronization.
                Optimized data flow between the backend and mobile app to reduce
                latency and improve reliability. Implemented error handling and
                data validation to ensure a smooth user experience during quiz
                attempts.
              </p>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                Opstation – Logistics & field management app
              </p>
              <p style={{ fontStyle: "italic", marginBottom: "10px" }}>
                Role: Front-End Fixes
              </p>
              <p>
                Contributed to improving the front-end of a logistics and field
                management platform by resolving critical UI/UX issues. Enhanced
                responsiveness, fixed layout inconsistencies, and optimized
                navigation for better usability in real-world field operations.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="June 2024 - January 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Mobile App Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Idea To Product
            </h4>
            <div>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                Full-Stack E-Commerce App
              </p>
              <p style={{ marginBottom: "15px" }}>
                Developed a Full-Stack E-Commerce App utilizing React Native and
                Firebase. Implemented features allowing admin to post products,
                manage inventory (add, update, delete products), and receive
                notifications for new orders.
              </p>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                Learning App with Parent-Child Interface
              </p>
              <p>
                Built a learning App with dual interfaces for parents and
                children. Parents assign math quizzes based on the child's age
                and difficulty level. Children earn rewards upon quiz
                completion, which can be withdrawn as money.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="January 2024 - June 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Freelance / Projects
            </h4>
            <div>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                Make Your Own Meal (USA) - React Native App
              </p>
              <p style={{ marginBottom: "15px" }}>
                Improved the App's UI to make it user-friendly. Fixed layout
                issues to ensure compatibility across all devices. Worked with
                React Native to enhance user experience and interface
                responsiveness.
              </p>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                Full-Stack Web Applications
              </p>
              <p>
                Developed responsive web applications using React, TypeScript,
                and Node.js. Built RESTful APIs, integrated third-party
                services, and implemented modern UI/UX principles. Created
                scalable frontend and backend solutions for various client
                projects.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="April 2024 - January 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">DevOps Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Cloud Infrastructure & Deployment
            </h4>
            <div>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                AWS Cloud Infrastructure
              </p>
              <p style={{ marginBottom: "15px" }}>
                Deployed and maintained backend infrastructure on Amazon EC2
                instances. Configured Ubuntu server environments, set up secure
                SSH access, and managed deployment of backend services using
                Node.js and PM2. Configured and managed S3 buckets for file
                storage, implemented Lambda functions for serverless computing,
                and set up API Gateway for RESTful API management.
              </p>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                CI/CD & Automation
              </p>
              <p>
                Set up continuous integration and deployment pipelines.
                Automated deployment processes, managed Docker containers, and
                implemented monitoring solutions. Ensured high availability and
                scalability of cloud-based applications.
              </p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
