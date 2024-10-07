import "./Skills.css";
import java from "./img/java.png";
import python from "./img/python.png";
import php from "./img/php.png";
import codeigniter from "./img/codeigniter.png";
import cpp from "./img/cpp.png";
import androidstudio from "./img/anstud.png";
import html5 from "./img/html5.png";
import css3 from "./img/css3.png";
import js from "./img/javascript.png";
import ajax from "./img/ajax.png";
import jquery from "./img/jquery.png";
import flask from "./img/flask.png";
import django from "./img/Django.png";
import pandas from "./img/pandas.png";
import scikit from "./img/scikit-learn.png";
import numpy from "./img/NumPy.png";
import seaborn from "./img/seaborn.png";
import matplot from "./img/Matplotlib.png";
import lg from "./img/regression.png";
import clustering from "./img/clustering.png";
import nn from "./img/nn.png";
import sql from "./img/sql.png";
import mysql from "./img/mysql.png";
import postgresql from "./img/postgresql.png";
import firebase from "./img/firebase.png";
import svn from "./img/svn.png";
import git from "./img/git.png";
import agile from "./img/agile.png";
import waterfall from "./img/waterfall.png";

interface Props {
  img: string;
  text: string;
}

const SkillCard: React.FC<Props> = ({ img, text }) => {
  return (
    <div className="skill-card">
      <img src={img} className="skill-img" />
      <span className="skill-text">{text}</span>
    </div>
  );
};

const Skills = () => {
  const getScrollAmount = () => {
    const maxWidth981px = window.matchMedia("(max-width: 981px)");
    const maxWidth981pxLandscape = window.matchMedia(
      "(max-width: 981px) and (orientation: landscape)"
    );
    const desktopView = window.matchMedia("(min-width: 981px)");

    if (desktopView.matches) {
      return 750.6;
    } else if (maxWidth981pxLandscape.matches) {
      return 550;
    } else if (maxWidth981px.matches) {
      return 310;
    }
  };

  const handleScrollLeft = () => {
    const carousel = document.getElementById("carousel");
    const scrollAmount = getScrollAmount();

    if (carousel && scrollAmount) {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    const scrollAmount = getScrollAmount();
    const carousel = document.getElementById("carousel");
    if (carousel && scrollAmount) {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div id="skills">
      <h1 id="skills-header">My Skillset</h1>
      <div id="outer-carousel-div">
        <i className="bi bi-caret-left-fill" onClick={handleScrollLeft}></i>
        <div id="carousel">
          <div className="skill-cards">
            <h2 className="skill-cards-header">Programming & Frameworks</h2>
            <div className="skills-div">
              <SkillCard img={java} text="Java" />
              <SkillCard img={python} text="Python" />
              <SkillCard img={php} text="PHP" />
              <SkillCard img={codeigniter} text="Codeigniter" />
              <SkillCard img={cpp} text="C++" />
              <SkillCard img={androidstudio} text="Android Studio" />
            </div>
          </div>
          <div className="skill-cards">
            <h2 className="skill-cards-header">Web Development</h2>
            <div className="skills-div">
              <SkillCard img={html5} text="HTML5" />
              <SkillCard img={css3} text="CSS3" />
              <SkillCard img={js} text="JavaScript" />
              <SkillCard img={ajax} text="Ajax" />
              <SkillCard img={jquery} text="jQuery" />
              <SkillCard img={flask} text="Flask" />
              <SkillCard img={django} text="Django" />
            </div>
          </div>
          <div className="skill-cards">
            <h2 className="skill-cards-header">Data Science</h2>
            <div className="skills-div">
              <SkillCard img={pandas} text="Pandas" />
              <SkillCard img={scikit} text="Scikit-learn" />
              <SkillCard img={numpy} text="NumPy" />
              <SkillCard img={seaborn} text="Seaborn" />
              <SkillCard img={matplot} text="Matplotlib" />
            </div>
          </div>
          <div className="skill-cards">
            <h2 className="skill-cards-header">AI/ML</h2>
            <div className="skills-div">
              <SkillCard img={lg} text="Logistic Regression" />
              <SkillCard img={clustering} text="Clustering" />
              <SkillCard img={nn} text="Neural Networks" />
            </div>
          </div>
          <div className="skill-cards">
            <h2 className="skill-cards-header">Databases</h2>
            <div className="skills-div">
              <SkillCard img={sql} text="SQL" />
              <SkillCard img={mysql} text="MySQL" />
              <SkillCard img={postgresql} text="PostgreSQL" />
              <SkillCard img={firebase} text="Firebase" />
            </div>
          </div>
          <div className="skill-cards">
            <h2 className="skill-cards-header">Version Control</h2>
            <div className="skills-div">
              <SkillCard img={svn} text="SVN" />
              <SkillCard img={git} text="Git" />
            </div>
          </div>
          <div className="skill-cards">
            <h2 className="skill-cards-header">Methodologies</h2>
            <div className="skills-div">
              <SkillCard img={agile} text="Agile" />
              <SkillCard img={waterfall} text="Waterfall" />
            </div>
          </div>
        </div>
        <i className="bi bi-caret-right-fill" onClick={handleScrollRight}></i>
      </div>
    </div>
  );
};

export default Skills;
