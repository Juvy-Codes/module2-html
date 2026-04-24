function Navbar() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for navbar height
      const navbarHeight = 80;
      window.scrollTo({
        top: element.offsetTop - navbarHeight,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="navbar">
      <button onClick={() => scrollTo("about")}>About</button>
      <button onClick={() => scrollTo("skills")}>Skills</button>
      <button onClick={() => scrollTo("projects")}>Projects</button>
      <button onClick={() => scrollTo("education")}>Education</button>
      <button onClick={() => scrollTo("contacts")}>Contacts</button>
    </nav>
  );
}

export default Navbar;