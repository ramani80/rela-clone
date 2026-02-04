'use client';
export default function TechnologyTools() {
  return (
    <>
      <section className="tools-section">
        <h1 className="heading">
          Master the Latest Tools <span>in Technology</span>
        </h1>

        <p className="subheading">
          “Accelerate Your Career with In-Demand Tools and Technologies through
          Our Comprehensive Learning Programs.”
        </p>

        <div className="tools-grid">
          <span>STM32 CubeIDE</span>
          <span>KEIL</span>
          <span>ROS</span>
          <span>ESP32</span>
          <span>FreeRTOS</span>
          <span>Vivado</span>

          <span>TensorFlow</span>
          <span>MySQL</span>
          <span>Power BI</span>
          <span>NumPy</span>
          <span>Tableau</span>
          <span>Raspberry Pi</span>
          <span>MongoDB</span>
          <span>Excel</span>
          <span>Keras</span>
        </div>
      </section>

      <style jsx>{`
        .tools-section {
          min-height: 100vh;
          padding: 80px 30px;
          background: #f6f6f8;
          text-align: center;
          font-family: "Inter", sans-serif;
        }

        .heading {
          font-size: 42px;
          font-weight: 800;
          color: #222;
          margin-bottom: 16px;
        }

        .heading span {
          background: linear-gradient(90deg, #6b5cff, #ff7a7a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subheading {
          font-size: 18px;
          color: #555;
          max-width: 900px;
          margin: 0 auto 60px;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 30px;
          max-width: 1100px;
          margin: auto;
        }

        .tools-grid span {
          background: #ffffff;
          padding: 22px 10px;
          border-radius: 14px;
          font-weight: 600;
          color: #333;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .tools-grid span:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
        }

        @media (max-width: 768px) {
          .heading {
            font-size: 32px;
          }

          .subheading {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}
