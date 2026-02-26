import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ContactForm from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // This ensures the <body> element itself changes color, 
  // removing that white border completely.
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    // We keep the className here too for specific component styling
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <Header toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <main>
          <About />
          <Skills />
          <Projects />
          <Education />
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