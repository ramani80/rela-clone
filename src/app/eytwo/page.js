'use client';
export default function LatestThinking() {
  const cards = [
    {
      img: "/img1.jpg",
      title: "Onwards and upwards: A positive outlook for private credit in India",
      desc:
        "Private Credit In India: Discover how the private credit market has progressed in India. Explore the growth...",
      date: "18 Feb 2026 | Dinkar Venkatasubramanian",
    },
    {
      img: "/img2.jpg",
      title: "AI and Cybersecurity: Powering the next frontier of business resilience",
      desc:
        "Learn how artificial intelligence is reshaping cybersecurity, addressing emerging risks like...",
      date: "17 Feb 2026 | EY India",
    },
    {
      img: "/img3.jpg",
      title: "Nine years of IBC: Transforming India’s insolvency landscape",
      desc:
        "IBC’s nine-year journey shows stronger credit discipline, faster revival, and improved NPAs, while...",
      date: "16 Feb 2026 | Pulkit Gupta",
    },
  ];

  return (
    <>
      <section className="section">
        <h2>Our latest thinking</h2>

        <div className="grid">
          {cards.map((card, i) => (
            <div className="card" key={i}>
              <img src={card.img} alt="" />

              <div className="content">
                <h3>{card.title}</h3>
                <p className="desc">{card.desc}</p>
                <p className="date">{card.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .section {
          padding: 60px 80px;
          background: #f4f4f4;
          font-family: Arial, Helvetica, sans-serif;
        }

        h2 {
          font-size: 40px;
          margin-bottom: 40px;
          color: #333;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .card {
          background: white;
          cursor: pointer;
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        img {
          width: 100%;
          height: 230px;
          object-fit: cover;
        }

        .content {
          padding: 20px;
        }

        h3 {
          font-size: 20px;
          margin-bottom: 10px;
          color: #222;
        }

        .desc {
          font-size: 14px;
          color: #666;
          margin-bottom: 12px;
          line-height: 1.5;
        }

        .date {
          font-size: 13px;
          color: #444;
          font-weight: bold;
        }

        /* RESPONSIVE */
        @media (max-width: 1000px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .section {
            padding: 40px 20px;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
}