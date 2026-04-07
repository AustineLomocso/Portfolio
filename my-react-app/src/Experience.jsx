export default function Experience() {
  const workExp = [
    {
      role: "Online Math Tutor",
      company: "Brighterly",
      period: "July 2025 – Present",
      type: "work",
      bullets: [
        "Facilitated interactive learning sessions for 7+ students using Agile feedback loops to adapt to individual learning paces.",
        "Achieved measurable improvements in test scores by gamifying mathematical concepts and real-world applications.",
        "Maintained 100% student engagement through customized, one-on-one tutoring strategies.",
      ],
    },
  ];

  const techProjects = [
    {
      role: "AI Model Engineer",
      company: "PocketClass",
      period: "March 2026",
      type: "project",
      bullets: [
        "Spearheaded AI integration using LangChain and TypeScript for an offline-first, personalized learning platform.",
        "Reduced high-bandwidth data dependency by 80% for students in low-connectivity areas.",
        "Designed a scalable REST API architecture to bridge the digital divide for remote educational access.",
      ],
    },
    {
      role: "IoT Firmware Developer",
      company: "MedSync",
      period: "February 2026",
      type: "project",
      bullets: [
        "Developed C++ firmware for ESP-32 devices featuring IR sensors and automated alarms for medication adherence.",
        "Implemented a dual-protocol (Bluetooth/WiFi) system for seamless IoT device provisioning.",
        "Conducted rigorous unit testing on firmware logic to ensure 99% reliability in patient adherence tracking.",
      ],
    },
    {
      role: "Lead Gameplay Programmer",
      company: "TrashDash",
      period: "November 2025",
      type: "project",
      bullets: [
        "Refined custom 2D physics logic — acceleration/friction curves and gravity scaling — for a snappy multiplayer PVP platformer.",
        "Managed version control and team sprints using Git to deliver a fast-paced, physics-based combat system.",
      ],
    },
  ];

  const TypeBadge = ({ type }) => (
    <span className={`exp-badge exp-badge--${type}`}>
      {type === "work" ? "Work" : "Project"}
    </span>
  );

  return (
    <section className="experience">
      <h2 className="section-title">EXPERIENCE</h2>

      <div className="exp-columns">
        {/* Work Experience Column */}
        <div className="exp-col">
          <h3 className="exp-col-label">
            <span className="exp-col-dot exp-col-dot--work" />
            Work
          </h3>
          <div className="exp-timeline">
            {workExp.map((item, i) => (
              <div className="exp-card" key={i}>
                <div className="exp-card-header">
                  <div>
                    <h4 className="exp-role">{item.role}</h4>
                    <span className="exp-company">{item.company}</span>
                  </div>
                  <div className="exp-meta">
                    <TypeBadge type={item.type} />
                    <span className="exp-period">{item.period}</span>
                  </div>
                </div>
                <ul className="exp-bullets">
                  {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Projects Column */}
        <div className="exp-col">
          <h3 className="exp-col-label">
            <span className="exp-col-dot exp-col-dot--project" />
            Technical Projects
          </h3>
          <div className="exp-timeline">
            {techProjects.map((item, i) => (
              <div className="exp-card" key={i}>
                <div className="exp-card-header">
                  <div>
                    <h4 className="exp-role">{item.role}</h4>
                    <span className="exp-company">{item.company}</span>
                  </div>
                  <div className="exp-meta">
                    <TypeBadge type={item.type} />
                    <span className="exp-period">{item.period}</span>
                  </div>
                </div>
                <ul className="exp-bullets">
                  {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education strip */}
      <div className="edu-strip">
        <div className="edu-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
            stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10L12 4 2 10l10 6 10-6z"/>
            <path d="M6 12.5V17c0 1.657 2.686 3 6 3s6-1.343 6-3v-4.5"/>
            <line x1="22" y1="10" x2="22" y2="15"/>
          </svg>
        </div>
        <div className="edu-info">
          <span className="edu-degree">B.S. Computer Science</span>
          <span className="edu-school">Cebu Institute of Technology – University</span>
        </div>
        <span className="edu-period">2023 – 2027</span>
      </div>
    </section>
  );
}