import PropTypes from "prop-types";

export default function ProjectCard({
  src       = null,
  name      = "Project Name",
  description = "Project Description",
  ref       = "#",
}) {
  return (
    <div className="projCard">
      <a href={ref} target={ref !== "#" ? "_blank" : undefined} rel="noreferrer">
        {src
          ? <img className="cardPic" src={src} alt={name} />
          : (
            <div className="cardPic card-img-placeholder">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>Image coming soon</span>
            </div>
          )
        }
        <div className="cardDesc">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

ProjectCard.propTypes = {
  src:         PropTypes.string,
  name:        PropTypes.string,
  description: PropTypes.string,
  ref:         PropTypes.string,
};