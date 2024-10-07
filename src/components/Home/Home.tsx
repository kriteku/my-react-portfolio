import "./Home.css";
import programmer from "./img/home-img.png";

export const Home = () => {
  return (
    <div id="home">
      <div id="jumbotron">
        <div id="text-div">
          <h1 id="text-header">Hi! I'm Kritek.</h1>
          <p id="text-paragraph">
            I'm a Software Engineer with 2+ years in Data Science and Web
            Development. I'm passionate about solving problems and eager to
            contribute to innovative projects.
          </p>
          <div id="text-icons">
            <a href="tel:+917738677204" target="_blank">
              <i className="bi bi-telephone-fill"></i>
            </a>
            <a href="mailto:kritekupadhyay@gmail.com" target="_blank">
              <i className="bi bi-envelope-fill"></i>
            </a>
            <a href="" target="_blank">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/kriteku" target="_blank">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
        <img src={programmer} id="profile-img" />
      </div>
    </div>
  );
};

export default Home;
