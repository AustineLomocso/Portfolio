import PropTypes from "prop-types"
const PLACEHOLDER_URL = "https://placehold.co/300x300?text=No+Image";

export default function ProjectCard({
    src = PLACEHOLDER_URL,
    name = "Project Name",
    description = "Project Description",
    ref = "none"
}){
    
    return(
        <div className = "projCard">
            <a href={ref}>
                <img className="cardPic" src = {src}/>
                <div className="cardDesc">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    )
}

ProjectCard.propTypes = {
    src:  PropTypes.string,
    name:  PropTypes.string,
    description: PropTypes.string,
}