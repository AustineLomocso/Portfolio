import pic from "./assets/pic.png";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="heroCard">
        <img className="heroPic" src={pic} alt="Austine Lomocso" />
      </div>
      <div className="heroDesc">
        <h1>AUSTINE</h1>
        <p className="hero-lastname">Lomocso</p>
        <p className="hero-tagline">Digital Solutions for Real Life Problems</p>
        <div className="hero-cta">
          <a href="#projects"  className="btn-primary">View Projects</a>
          <a href="#contact"   className="btn-secondary">Get in Touch</a>
        </div>
        <p className="hero-summary">
          Results-driven Application Developer with expertise in Java, web technologies,
          and Object-Oriented Programming. Experienced in AI model engineering and IoT
          firmware development using Agile methodologies — with a proven track record of
          building innovative solutions that bridge real-world gaps, from offline-first
          learning platforms to smart medication adherence systems.
        </p>
      </div>
    </div>
  );
}