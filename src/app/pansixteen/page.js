'use client';
export default function Courses() {
  return (
    <>
      <div className="container">
        <div className="toolbar">
          <select>
            <option>Default sorting</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>

          <div className="view">VIEW: 12 / 24 / ALL</div>
        </div>

        <div className="grid">
          {/* Card 1 */}
          <div className="card">
            <span className="sale">SALE!</span>
            <img src="/excel.png" alt="Excel Masterclass" />
            <h3>Excel Masterclass</h3>
          </div>

          {/* Card 2 */}
          <div className="card">
            <span className="sale">SALE!</span>
            <img src="/ai-matlab.png" alt="AI using Matlab" />
            <p className="category">Data Science Courses</p>
            <h3>AI using Matlab</h3>
          </div>

          {/* Card 3 */}
          <div className="card">
            <span className="sale">SALE!</span>
            <img src="/arduino.png" alt="Arduino Master Class" />
            <h3>Arduino Master Class</h3>
          </div>
        </div>
      </div>

      <style>
        {`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #fff;
        }

        .container {
          padding: 30px 40px;
        }

        .toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        select {
          padding: 8px 12px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .view {
          font-size: 14px;
          color: #555;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }

        .card {
          position: relative;
          text-align: center;
        }

        .card img {
          width: 100%;
          max-width: 260px;
          height: auto;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          border-radius: 4px;
        }

        .sale {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #5cbf8c;
          color: #fff;
          font-size: 12px;
          padding: 5px 10px;
          font-weight: bold;
          border-radius: 2px;
        }

        h3 {
          margin-top: 15px;
          font-size: 16px;
          font-weight: 600;
        }

        .category {
          margin-top: 12px;
          font-size: 13px;
          color: #777;
        }
        `}
      </style>
    </>
  );
}
