'use client';
export default function Home() {
  const projects = [
    {
      title: "Accidental Monitoring Of Vehicles using ESP32",
      category: "ESP32 Projects, Projects",
    },
    {
      title: "Disaster Monitoring and Management system using ESP32",
      category: "ESP32 Projects, Projects",
    },
    {
      title: "Fault Diagnosis and Small Wind Turbine Monitoring using ESP32",
      category: "ESP32 Projects, Projects",
      featured: true,
    },
  ];

  return (
    <div className="container">
      <div className="grid">
        {projects.map((item, index) => (
          <div
            className={`card ${item.featured ? "featured" : ""}`}
            key={index}
          >
            <div className="imageBox">
              <span className="eye">👁</span>
              <div className="placeholder">🖼</div>
            </div>

            <button className="readMore">READ MORE</button>

            <p className="category">{item.category}</p>
            <h3 className="title">{item.title}</h3>

            <p className="price">Call for Price</p>

            <div className="stars">★★★★★</div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          padding: 40px;
          background: #fff;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
        }

        .card {
          border: 1px solid #eee;
          background: #fff;
          text-align: center;
          padding-bottom: 20px;
        }

        .featured {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .imageBox {
          position: relative;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fafafa;
        }

        .placeholder {
          font-size: 50px;
          color: #bbb;
        }

        .eye {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #fff;
          border-radius: 50%;
          padding: 8px;
          font-size: 14px;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .readMore {
          width: 100%;
          border: none;
          padding: 14px 0;
          background: #17a8e3;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
        }

        .category {
          font-size: 12px;
          color: #999;
          margin: 15px 0 5px;
        }

        .title {
          font-size: 16px;
          font-weight: 600;
          color: #0a2a66;
          padding: 0 15px;
          line-height: 1.4;
        }

        .price {
          color: red;
          font-weight: bold;
          margin: 10px 0;
        }

        .stars {
          color: #ccc;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
