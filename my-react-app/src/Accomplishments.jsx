const PLACEHOLDER = null; 

const CertifiedIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 13 9 18 20 7"/>
  </svg>
);

const placeLabel = {
  champion:  "Champion",
  second:    "2nd Place",
  certified: "Certified",
};

const awards = [
  {
    title: "DOST ESports Game Dev",
    place: "champion",
    provider: "Dept. of Science & Technology",
    year: "2025",
    img: "GameDev.jpg",
    category: "Competition",
  },
  {
    title: "MCIA CebIHacks",
    place: "second",
    provider: "Mactan Cebu International Airport",
    year: "2026",
    img: "CebIHacks.jpg",
    category: "Hackathon",
  },
  {
    title: "iAcademy Hackathon",
    place: "second",
    provider: "iAcademy Philippines",
    year: "2026",
    img: "iAcademy.jpg",
    category: "Hackathon",
  },
  {
    title: "Java Programming",
    place: "certified",
    provider: "Codechum",
    year: "2025",
    img: "Java.jpg",
    category: "Certificate",
  },
  {
    title: "C Programming",
    place: "certified",
    provider: "Codechum",
    year: "2024",
    img: "Cprog.png",
    category: "Certificate",
  },
  {
    title: "Introduction to Python",
    place: "certified",
    provider: "Sololearn",
    year: "2025",
    img: "Sololearn.jpg",
    category: "Certificate",
  },
  {
    title: "Prompt Engineering",
    place: "certified",
    provider: "DataCamp",
    year: "2025",
    img: "PromptEngineering.jpg",
    category: "Certificate",
  },
];

const categoryColor = {
  Competition: "var(--gold)",
  Hackathon:   "#c084fc",
  Certificate: "#6ee7b7",
};

function AwardCard({ title, place, provider, year, img, category }) {
  return (
    <div className="award-card">
      {/* Image / placeholder area */}
      <div className="award-img-wrap">
        {img
          ? <img src={img} alt={title} className="award-img" />
          : (
            <div className="award-img-placeholder">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>Add Image</span>
            </div>
          )
        }
        <span className="award-category-pill" style={{ borderColor: categoryColor[category], color: categoryColor[category] }}>
          {category}
        </span>
      </div>

      {/* Text */}
      <div className="award-body">
        <p className="award-place">
          {place === "certified" && <CertifiedIcon />}
          <span>{placeLabel[place]}</span>
        </p>
        <h3 className="award-title">{title}</h3>
        <p className="award-provider">{provider}</p>
        <span className="award-year">{year}</span>
      </div>
    </div>
  );
}

export default function Accomplishments() {
  return (
    <section className="accomplishments">
      <h2 className="section-title">ACCOMPLISHMENTS</h2>
      <div className="award-grid">
        {awards.map((a, i) => <AwardCard key={i} {...a} />)}
      </div>
    </section>
  );
}