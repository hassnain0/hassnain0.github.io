import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import "../assets/styles/Main.scss";
import userAvatar from "../assets/images/userAvatarr.png";
// @ts-ignore - Webpack will handle PDF import
import ResumePDF from "../assets/images/Resume.pdf";

function Main() {
  const handleDownloadResume = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = ResumePDF;
    link.download = "Hassnain_Ali_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={userAvatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/hassnain0"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/hassnain-ali-dayo-16984923b/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Hassnain Ali</h1>
          <p>Full Stack Engineer</p>
          <div className="resume-button-wrapper">
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              className="resume-download-btn"
              onClick={handleDownloadResume}
            >
              Download Resume
            </Button>
          </div>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/hassnain0"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/hassnain-ali-dayo-16984923b/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
