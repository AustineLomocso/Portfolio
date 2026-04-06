import { useState } from "react";

export default function Skills() {
  const skills = [
    { name: "C",           category: "Languages" },
    { name: "C++",         category: "Languages" },
    { name: "Java",        category: "Languages" },
    { name: "Python",      category: "Languages" },
    { name: "React",       category: "Frameworks" },
    { name: "Spring Boot", category: "Frameworks" },
    { name: "Django",      category: "Frameworks" },
    { name: "Godot",       category: "Tools" },
    { name: "Firebase",    category: "Tools" },
    { name: "Git",         category: "Tools" },
    { name: "Figma",       category: "Tools" },
    { name: "Canva",       category: "Tools" },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredList =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const categories = ["All", "Languages", "Frameworks", "Tools"];

  return (
    <div className="skills">
      <h2 className="section-title">SKILLS</h2>

      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className="skill-list">
        {filteredList.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}