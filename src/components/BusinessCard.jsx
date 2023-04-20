import personimg from "../Rectangle 90.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import "../App.css"

export default function BusinessCard() {
  return (
    <div className="container">
      <img src={personimg} alt="a girl pic"></img>
      <h2>Laura Smith</h2>
      <p>Web Developer</p>
      <p className="p-2">laurasmith.website</p>
      <div className="main-part">
        <IconButton
          className="email"
          aria-label="email"
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            marginInline: "0.5em",
            width: "120px",
          }}
          size="small"
        >
          <EmailIcon />
          Email
        </IconButton>
        <IconButton
          className="linkedin"
          aria-label="linkedin"
          sx={{
            backgroundColor: "#5093E2",
            borderRadius: "10px",
            marginInline: "0.5em",
            width: "120px",
            color: "white",
          }}
          size="small"
        >
          <LinkedInIcon />
          LinkedIn
        </IconButton>
      </div>
      <div className="content">
        <h4>About</h4>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h4 className="child-two">Interests</h4>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
      <div className="footer">
        <FaTwitter className="icon" />
        <FaFacebook className="icon" />
        <FaInstagram className="icon" />
        <FaGithub className="icon" />
      </div>
    </div>
  );
}
