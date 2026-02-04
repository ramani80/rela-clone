export default function AlumniOutcomes() {
  return (
    <>
      <div className="container">
        <span className="pill">Alumni Outcomes</span>

        <h1 className="title">
          From Learning to Earning{" "}
          <span className="gradient">Companies That Hire Our Graduates</span>
        </h1>

        <p className="subtitle">
          “Discover the top companies where our graduates are thriving in their
          careers.”
        </p>

        <div className="companies">
          <div className="company microchip">Microchip</div>
          <div className="company xilinx">Xilinx</div>
          <div className="company matlab">MATLAB</div>
          <div className="company tcs">TCS</div>
          <div className="company intel">Intel</div>
        </div>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 80px 20px;
          background: #ffffff;
          text-align: center;
          font-family: "Inter", sans-serif;
        }

        .pill {
          display: inline-block;
          padding: 6px 16px;
          font-size: 14px;
          font-weight: 500;
          color: #6b5cff;
          background: #f2f0ff;
          border-radius: 20px;
          margin-bottom: 24px;
        }

        .title {
          font-size: 42px;
          font-weight: 800;
          color: #222;
          margin-bottom: 16px;
        }

        .gradient {
          background: linear-gradient(90deg, #6b5cff, #ff7a7a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 18px;
          color: #666;
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .companies {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .company {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .microchip {
          background: #f2e7ff;
          color: #c00000;
        }

        .xilinx {
          background: #eef0ff;
          color: #333;
        }

        .matlab {
          background: #fff3da;
          color: #d35400;
        }

        .tcs {
          background: #ffe8e4;
          color: #e74c3c;
        }

        .intel {
          background: #e6f2ff;
          color: #0071c5;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 32px;
          }

          .company {
            width: 110px;
            height: 110px;
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
