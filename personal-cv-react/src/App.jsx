import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ContactForm from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // --- MODULE 6 DATA STRUCTURES ---
  const skillsData = ["HTML", "CSS", "JavaScript", "React", "Frontend Development", "Git"];

  const educationData = [
    {
      year: "2024 - Present",
      program: "BS Information Technology",
      school: "USTP"
    },
    {
      year: "2022 - 2024",
      program: "Senior High School",
      school: "PHINMA - COC"
    },
    {
      year: "2018 - 2022",
      program: "Highschool",
      school: "Tablon NHS"
    },
    {
      year: "2012 - 2018",
      program: "Elementary School",
      school: "Tablon ES"
    }
  ];

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <Header toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <main>
          <About />
          
          {/* TASK 1: Passing skills array as a prop */}
          <Skills skills={skillsData} />
          
          <Projects />
          
          {/* TASK 3: Passing education array as a prop */}
          <Education education={educationData} />
          
          <ContactForm />
        </main>
        <footer>
          <p>&copy; 2026 Juvelyn A. Virtudes. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;