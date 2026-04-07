const PLACEHOLDER = null; // swap to an import or URL when ready

/* ── Icon components ── */
const GoldMedalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="14" r="7"/>
    <path d="M8.21 7.12 7 3H5l2.36 5.41"/>
    <path d="M15.79 7.12 17 3h2l-2.36 5.41"/>
    <path d="M12 11v3l1.5 1.5"/>
  </svg>
);

const SilverMedalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="#b0bec5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="14" r="7"/>
    <path d="M8.21 7.12 7 3H5l2.36 5.41"/>
    <path d="M15.79 7.12 17 3h2l-2.36 5.41"/>
    <path d="M10 17h4"/>
    <path d="M10 14h2a2 2 0 0 0 0-4h-2v7"/>
  </svg>
);

const CertifiedIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="#6ee7b7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.4l-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

const placeIcon = {
  champion:   <GoldMedalIcon />,
  second:     <SilverMedalIcon />,
  certified:  <CertifiedIcon />,
};

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
    img: PLACEHOLDER,
    category: "Competition",
  },
  {
    title: "MCIA CebuHacks",
    place: "second",
    provider: "Mandaue City IT Academy",
    year: "2026",
    img: PLACEHOLDER,
    category: "Hackathon",
  },
  {
    title: "iAcademy Hackathon",
    place: "second",
    provider: "iAcademy Philippines",
    year: "2026",
    img: PLACEHOLDER,
    category: "Hackathon",
  },
  {
    title: "Java Programming",
    place: "certified",
    provider: "Codechum",
    year: "2025",
    img: PLACEHOLDER,
    category: "Certificate",
  },
  {
    title: "C Programming",
    place: "certified",
    provider: "Codechum",
    year: "2024",
    img: PLACEHOLDER,
    category: "Certificate",
  },
  {
    title: "Introduction to Python",
    place: "certified",
    provider: "Sololearn",
    year: "2025",
    img: PLACEHOLDER,
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
          {placeIcon[place]}
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