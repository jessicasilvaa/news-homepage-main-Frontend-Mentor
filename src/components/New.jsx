import "../styles/new.css";

export default function New() {
  return (
    <aside className="new">
      <h2 className="title">New</h2>
      <div className="news-box">
        <h3 className="news-subtitle">Hydrogen VS Electric Cars</h3>
        <p className="news-text">Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div className="news-box">
        <h3 className="news-subtitle">The Downsides of AI Artistry</h3>
        <p className="news-text">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div className="news-box">
        <h3 className="news-subtitle">Is VC Funding Drying Up?</h3>
        <p className="news-text">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </aside>
  );
}
