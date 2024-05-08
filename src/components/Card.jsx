import "../styles/card.css";
import imgRetro from "../assets/images/image-retro-pcs.jpg";
import imgTop from "../assets/images/image-top-laptops.jpg";
import imgGaming from "../assets/images/image-gaming-growth.jpg";

let dataCard = [
  {
    img: imgRetro,
    alt: "retro pcs",
    num: "01",
    cardTitle: "Reviving Retro PCs",
    cardText: "What happens when old PCs are given modern upgrades?",
  },
  {
    img: imgTop,
    alt: "top laptops",
    num: "02",
    cardTitle: "Top 10 Laptops of 2022",
    cardText: "Our best picks for various needs and budgets.",
  },
  {
    img: imgGaming,
    alt: "gaming growth",
    num: "03",
    cardTitle: "The Growth of Gaming",
    cardText: "How the pandemic has sparked fresh opportunities.",
  },
];

export default function Card() {
  return (
    <section className="card-container">
      {dataCard.map((item) => (
        <div className="card" key={item.num}>
          <img src={item.img} alt={item.alt} />
          <div className="card-content">
            <span className="num">{item.num}</span>
            <h3 className="card-title">{item.cardTitle}</h3>
            <p className="card-text">{item.cardText}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
