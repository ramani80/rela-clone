'use client';
export default function Home() {
  return (
    <div className="wrapper">
      <div className="columns">
        {/* LEFT COLUMN */}
        <div className="col">
          <h3 className="heading">
            <span className="bar"></span>A.I / DATA SCIENCE
          </h3>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Data Analytics</li>
            <li>Python</li>
            <li>OpenCV</li>
            <li>Deep Learning</li>
            <li>Advanced Excel</li>
            <li>Raspberry pi</li>
            <li>R Programming</li>
            <li>Generative A.I</li>
            <li>A.I using Matlab</li>
            <li>A.I For Robotics</li>
          </ul>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="col">
          <h3 className="heading">
            <span className="bar"></span>EMBEDDED SYSTEM
          </h3>
          <ul>
            <li>Embedded System Design</li>
            <li>ESD ARM Cortex M4</li>
            <li>Internet of Things (IoT)</li>
            <li>PCB Design</li>
            <li>FPGA</li>
            <li>FPGA (using VERILOG)</li>
            <li>FPGA (using VHDL)</li>
            <li>Arduino</li>
            <li>Embedded C Programming</li>
            <li>Embedded driver development</li>
          </ul>

          <h3 className="heading mt">
            <span className="bar"></span>FULLSTACK WEB DEVELOPMENT
          </h3>
          <ul>
            <li>Fullstack Web Development</li>
          </ul>

          <h3 className="heading mt">
            <span className="bar"></span>OTHERS
          </h3>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col right">
          <h3 className="heading">
            <span className="bar"></span>TOP SELLING
          </h3>

          <div className="product">
            <img src="https://via.placeholder.com/120x160" />
            <h4>Generative A.I</h4>
            <p className="sub">Data Science Courses</p>
            <p className="price">
              <span className="old">₹2,499.00</span> ₹1,499.00
            </p>
            <button>Add to Cart</button>
          </div>

          <div className="product">
            <img src="https://via.placeholder.com/120x160" />
            <h4>FPGA (using VERILOG)</h4>
            <p className="sub">Embedded System Courses</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          padding: 40px 60px;
          background: #fff;
          font-family: Arial, sans-serif;
        }

        .columns {
          display: grid;
          grid-template-columns: 1.2fr 1.2fr 1fr;
          gap: 40px;
        }

        .heading {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
        }

        .bar {
          width: 4px;
          height: 18px;
          background: red;
          margin-right: 10px;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          padding: 6px 0;
          font-size: 14px;
          color: #111;
          cursor: pointer;
        }

        li:hover {
          color: #0070f3;
        }

        .mt {
          margin-top: 30px;
        }

        .right {
          text-align: center;
        }

        .product {
          margin-bottom: 40px;
        }

        .product img {
          width: 120px;
          margin-bottom: 10px;
        }

        .product h4 {
          font-size: 14px;
          margin: 5px 0;
        }

        .sub {
          font-size: 12px;
          color: #666;
        }

        .price {
          margin: 8px 0;
          font-size: 14px;
          color: red;
          font-weight: bold;
        }

        .old {
          text-decoration: line-through;
          color: #999;
          margin-right: 5px;
          font-weight: normal;
        }

        button {
          background: #2aa7ff;
          color: #fff;
          border: none;
          padding: 10px 18px;
          cursor: pointer;
          font-size: 13px;
          margin-top: 10px;
        }

        button:hover {
          background: #178ce0;
        }

        @media (max-width: 900px) {
          .columns {
            grid-template-columns: 1fr;
          }

          .right {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}
