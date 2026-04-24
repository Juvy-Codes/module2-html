import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ContactForm from "./components/Contact";
import ContactList from "./components/ContactList"; // ADD THIS
import Navbar from "./components/Navbar";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skillsData = ["HTML", "CSS", "JavaScript", "React", "Frontend Development", "Git", "Postgresql", "Laravel"];

  const educationData = [
    {
      year: "2024 - Present",
      program: "Bachelor of Science in Information Technology",
      school: "University of Science and Technology of Southern Philippines"
    },
    {
      year: "2022 - 2024",
      program: "Senior High School",
      school: "PHINMA - Cagayan de Oro College"
    },
    {
      year: "2018 - 2022",
      program: "Highschool",
      school: "Tablon National HighSchool"
    },
    {
      year: "2012 - 2018",
      program: "Elementary School",
      school: "Tablon Elementary School"
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
        <Navbar />
        <main>
          <section id="about"><About /></section>
          <section id="skills"><Skills skills={skillsData} /></section>
          <section id="projects"><Projects /></section>
          <section id="education"><Education education={educationData} /></section>
          <section id="contacts">
            <ContactList />
            <ContactForm />
          </section>
        </main>
        <footer>
          <p>&copy; 2026 Juvelyn A. Virtudes. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;