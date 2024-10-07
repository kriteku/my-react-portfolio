import "./Projects.css";
import prodpredictapp from "./img/ProdPredictionApp.jpeg";
import lightweightencrypt from "./img/LightWeightEncrypt.jpeg";
import chatimg from "./img/ChatImg.png";
import blockchain from "./img/Blockchain.png";
import house from "./img/House.png";

interface Props {
  img: string;
  text: string;
  header: string;
  tech: string;
  link: string;
}

const ProjectCard = ({ img, text, header, tech, link }: Props) => {
  return (
    <div className="project-card">
      <img src={img} className="project-img" />
      <div className="project-text-div">
        <span className="project-header">{header}</span>
        <p className="project-text">{text}</p>
        <span className="tech-used-header">Technologies used:</span>
        <p className="tech-used-text">{tech}</p>
      </div>
      <a href={link} className="project-link" target={"_blank"}>
        View
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects">
      <h1 id="projects-header">Projects</h1>
      <div id="project-cards-div">
        <ProjectCard
          img={prodpredictapp}
          header="Production Target Prediction App"
          text="A robust production target prediction application using Python and various machine learning algorithms."
          tech="Python, Scikit-learn, Pandas, NumPy, Flask/Django, Git, IIS, Matplotlib, Seaborn"
          link=""
        />
        <ProjectCard
          img={lightweightencrypt}
          header="Lightweight Encryption Design for Security using AES, RSA and DES Algorithm"
          text="Secure messaging between two parties is enabled by encrypting data using chosen cryptographic techniques, allowing the receiver to decrypt and view the original content. The encryption key is sent via email using steganography."
          tech="Python, Steganography, Algorithms - AES, DES, RSA"
          link="https://ijcrt.org/papers/IJCRT22A6293.pdf"
        />
        <ProjectCard
          img={blockchain}
          header="Blockchain based News Application to combat fake news"
          text="A news website that leverages blockchain technology to verify the authenticity of information, bridging the gap between fake and authentic content."
          tech="Python, HTML, CSS, Bootstrap, Flask, Linux"
          link=""
        />
        <ProjectCard
          img={chatimg}
          header="Chat Application"
          text="A platform for users to engage in real-time communication through chat, including group chatting."
          tech="Java, Firebase, Android Studio"
          link=""
        />
        <ProjectCard
          img={house}
          header="Society Management Application"
          text="A society news app with automatic member group creation and one-time password authentication."
          tech="Java, MySQL, Android"
          link=""
        />
      </div>
    </div>
  );
};

export default Projects;
