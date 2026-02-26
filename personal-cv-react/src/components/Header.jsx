function Header({ toggleDarkMode, darkMode }) {
  return (
    <header className="card">
      <h1>Juvelyn A. Virtudes</h1>
      <p>IT Student | Web Systems and Technologies</p>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
export default Header;