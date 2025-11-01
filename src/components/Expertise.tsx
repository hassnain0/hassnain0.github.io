import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNode, faAws } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "React Native",
  "JavaScript",
  "TypeScript",
  "Redux",
  "Expo",
  "HTML5",
  "CSS3",
  "SASS",
  "Firebase",
  "Supabase",
];

const labelsSecond = [
  "Node.js",
  "REST APIs",
  "Express",
  "PM2",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Postman",
];

const labelsThird = [
  "AWS",
  "EC2",
  "S3",
  "Lambda",
  "API Gateway",
  "Ubuntu",
  "Linux",
  "SSH",
  "Docker",
  "CI/CD",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Frontend Development</h3>
            <p>
              With 3 years of experience in React Native development, I
              specialize in building responsive and intuitive mobile and web
              applications. Proficient in React, React Native, TypeScript,
              Redux, and Expo for cross-platform mobile app development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faNode} size="3x" />
            <h3>Backend Development</h3>
            <p>
              Experienced in building robust backend systems using Node.js,
              implementing RESTful APIs, database management, and server-side
              logic. Skilled in integrating third-party services and managing
              server infrastructure.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faAws} size="3x" />
            <h3>Cloud & DevOps</h3>
            <p>
              Proficient in deploying and managing applications on AWS cloud
              infrastructure. Experience with EC2 instance management, S3
              storage, Lambda functions, API Gateway configuration, and
              maintaining secure server environments.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
