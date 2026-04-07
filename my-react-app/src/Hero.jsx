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
      </div>
    </div>
  );
}