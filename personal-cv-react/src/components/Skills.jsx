import { useState } from "react";

function Skills() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button id="toggleSkills" onClick={() => setVisible(!visible)}>
        Show/Hide Skills
      </button>
      {visible && (
        <section className="card" id="skillsSection">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Frontend Development</li>
          </ul>
        </section>
      )}
    </>
  );
}
export default Skills;