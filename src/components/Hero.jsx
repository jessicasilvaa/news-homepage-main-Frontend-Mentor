import "../styles/hero.css";
import Web3Desktop from "../assets/images/image-web-3-desktop.jpg";
import Web3Mobile from "../assets/images/image-web-3-mobile.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <picture>
        <source
          srcSet={Web3Mobile}
          media="(max-width: 768px)"
          type="image/webp"
        />
        <source
          srcSet={Web3Desktop}
          media="(min-width: 769px)"
          type="image/png"
        />
        <img src={Web3Mobile} alt="image hero" />
      </picture>
      <div className="hero-content">
        <div className="left">
          <h1 className="title">The Bright Future of Web 3.0?</h1>
        </div>
        <div className="right">
          <p className="text">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="read-btn">Read more</button>
        </div>
      </div>
    </section>
  );
}
