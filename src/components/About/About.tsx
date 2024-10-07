import "./About.css";
import programmer from "./img/programmer.png";
import myresume from "./pdf/Kritek_Resume.pdf";

const About = () => {
  return (
    <div id="about">
      <div id="about-text-img-div">
        <img src={programmer} id="about-img" />
        <div id="about-text-div">
          <h1 id="about-me-header">About Me</h1>
          <p id="about-text-paragraph">
            I am a highly motivated and skilled Software Engineer with over 2
            years of experience in Data Science and Web Development. I
            demonstrate strong analytical and problem-solving abilities, with a
            proven track record in project delivery and client interaction. I
            stay current with technological advancements and am eager to
            contribute to a forward-thinking organization where I can continue
            to grow and deliver high-impact solutions.
          </p>
          <a href={myresume} download>
            <span id="resume-btn">
              Download CV{"  "}
              <i className="bi bi-download" style={{ margin: "0.2em" }}></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
