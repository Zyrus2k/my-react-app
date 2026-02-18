import React from 'react';

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React.js', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'HTML5/CSS3', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
    { name: 'TypeScript', level: 'Intermediate' }
  ];

  return (
    <div>
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <small className="skill-level text-muted">{skill.level}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;