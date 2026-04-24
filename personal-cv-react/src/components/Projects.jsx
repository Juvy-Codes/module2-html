import tetris from "../assets/tetris.png";
import payroll from "../assets/payroll.png";

function Projects() {
  return (
    <section className="card" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-item">
          <img src={tetris} alt="Tetris GUI Game" className="project-img" />
          <strong>Tetris GUI Game</strong>
          <p>A graphical Tetris game developed using Python and Tkinter.</p>
        </div>
        <div className="project-item">
          <img src={payroll} alt="Payroll System" className="project-img" />
          <strong>Payroll System</strong>
          <p>A program that manages employee payroll and salary computation.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;