import bluehire    from "./assets/bluehire pic.png";
import cookingIna  from "./assets/cookinigna.png";
import trashdash   from "./assets/trashdash.png";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  return (
    <div className="projects">
      <h2 className="section-title">PROJECTS</h2>
      <div className="project-container">
        <ProjectCard
          src={bluehire}
          name="BlueHire"
          description="A client-to-freelancer platform connecting people with blue-collar professionals."
          ref="https://github.com/AustineLomocso/BlueHire"
        />
        <ProjectCard
          src={cookingIna}
          name="Cooking Ina: Ang Sarap!"
          description="A 2D point-and-click cooking game built in Godot."
          ref="https://github.com/AustineLomocso/Cooking-Ina-Ang-Sarap-"
        />
        <ProjectCard
          src={trashdash}
          name="TrashDash"
          description="A fast-paced 2D multiplayer PVP platformer with custom physics."
          ref="https://github.com/Pinghtdog/TrashDash"
        />

        {/* ── Placeholder cards – replace src & details when ready ── */}
        <ProjectCard
          src= "Pocketclass.png"
          name="PocketClass"
          description="Offline-first AI learning platform using LangChain & TypeScript."
          ref="https://github.com/Bossdale/PocketClass"
        />
        <ProjectCard
          src="Medsync.png"
          name="MedSync"
          description="IoT medication adherence system with ESP-32 firmware & dual-protocol support."
          ref="https://github.com/CodeJamjamzz/Automated_Pillbox"
        />
        {/* Add more placeholder cards here as needed */}
      </div>
    </div>
  );
}