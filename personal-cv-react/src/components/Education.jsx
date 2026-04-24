function Education({ education }) {
  return (
    <section className="card" id="education">
      <h2>Education</h2>
      <div className="timeline">
        {education.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <strong className="timeline-program">{item.program}</strong>
              <span className="timeline-school">{item.school}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;