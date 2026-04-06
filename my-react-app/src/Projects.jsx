import bluehire from "./assets/bluehire pic.png"
import cookingIna from "./assets/cookinigna.png"
import trashdash from "./assets/trashdash.png"

import ProjectCard from "./ProjectCard.jsx"
export default function Projects(){
    return(
        <div className = "projects">
            <h1>PROJECTS</h1>
            <div className = "project-container">
                <ProjectCard src = {bluehire} name = "BlueHire" description = "A client-to-freelancer platform for blue-collar work" ref = "https://github.com/AustineLomocso/BlueHire"/>
                <ProjectCard src = {cookingIna} name = "Cooking Ina:Ang Sarap!" description = "A 2D point-and-click cooking game" ref = "https://github.com/AustineLomocso/Cooking-Ina-Ang-Sarap-"/>
                <ProjectCard src = {trashdash} name = "TrashDash" description = "A 2D multiplayer platformer game" ref = "https://github.com/Pinghtdog/TrashDash"/>
            </div>
        </div>
    )
}