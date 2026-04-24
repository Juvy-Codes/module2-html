import profilePhoto from '../assets/profile.jpg';

function About() {
  return (
    <section className="card" id="about">
      <h2>About Me</h2>
      <div className="about-grid">
        <img src={profilePhoto} alt="Profile photo" className="profile-img" />
        <div className="about-content">
          <p>
            I am an Information Technology student with an interest in web development
            and learning modern technologies. I enjoy building simple websites and
            improving my technical skills.
          </p>
          <div className="about-links">
            <a href="mailto:virtudes.juvelyn10@gmail.com" className="about-link">
              <span className="about-link-icon">✉</span>
              virtudes.juvelyn10@gmail.com
            </a>
            <a href="https://github.com/Juvy-Codes" target="_blank" rel="noreferrer" className="about-link">
              <span className="about-link-icon">⌥</span>
              github.com/Juvy-Codes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;