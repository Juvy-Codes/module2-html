import { useState } from "react";
import Card from "./Card";

function Skills({ skills }) {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button id="toggleSkills" onClick={() => setVisible(!visible)}>
        {visible ? "Hide Skills" : "Show Skills"}
      </button>
      
      {visible && (
        <Card title="Skills">
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </Card>
      )}
    </>
  );
}

export default Skills;