import profilePhoto from '../assets/profile.jpg'; 
function About() {
  return (
    <section className="card">
      <h2>About Me</h2>
      <p>
        I am an Information Technology student with an interest in web development
        and learning modern technologies. I enjoy building simple websites and
        improving my technical skills.
      </p>
        <img src={profilePhoto} alt="Profile photo" className="profile-img" />      
      <p>
        Gmail: <a href="mailto:virtudes.juvelyn10@gmail.com">virtudes.juvelyn10@gmail.com</a><br />
        GitHub: <a href="https://github.com/Juvy-Codes" target="_blank" rel="noreferrer">
          https://github.com/Juvy-Codes
        </a>
      </p>
    </section>
  );
}
export default About;