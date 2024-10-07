import "./Work.css";

const Work = () => {
  return (
    <div id="work">
      <h1 id="work-exp-header">Work Experience</h1>
      <div className="timeline">
        <div className="container left">
          <div className="content">
            <h2 className="work-role-header">Web Developer</h2>
            <h2 className="work-location-header">
              Skeg Corner, Mumbai, Maharashtra
            </h2>
            <h2 className="work-duration-header">July 2022 - July 2023</h2>
            <ul className="work-responsibilities-header">
              <li>
                Developed responsive and user-friendly web applications using
                modern web technologies.
              </li>
              <li>
                Worked closely with clients to understand their needs and
                deliver tailored solutions.
              </li>
            </ul>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2 className="work-role-header">
              Technical Consultant - Data Science
            </h2>
            <h2 className="work-location-header">
              G-TEC JAINX Education, Mumbai
            </h2>
            <h2 className="work-duration-header">August 2023 - Present</h2>
            <ul className="work-responsibilities-header">
              <li>
                Lead the development and optimization of data-driven solutions
                to meet client requirements.
              </li>
              <li>
                Collaborate with cross-functional teams to ensure project
                objectives align with business goals.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
