import { useState } from "react";
import Card from "./Card";

function Skills({ skills }) {
  const [visible, setVisible] = useState(true);

  return (
    <div id="skills">
      <button className="toggle-btn" onClick={() => setVisible(!visible)}>
        {visible ? "Hide Skills" : "Show Skills"}
      </button>
      {visible && (
        <Card title="Skills">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-pill">{skill}</span>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}

export default Skills;