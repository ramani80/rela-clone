'use client';
export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo-section">
              <h1 className="logo">Relatim</h1>
              <p className="tagline">AI for Automotive Businesses</p>
            </div>
            
            <nav className="nav">
              <div className="nav-title">COMPANY</div>
              <ul className="nav-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="city-selector">
        <div className="container">
          <div className="city-content">
            <span className="city-label">SELECT YOUR CITY</span>
            <div className="city-list">
              <a href="#chennai" className="city-link">Chennai</a>
              <a href="#mumbai" className="city-link">Mumbai</a>
              <a href="#bangalore" className="city-link">Bangalore</a>
              <a href="#delhi" className="city-link">Delhi</a>
              <a href="#hyderabad" className="city-link">Hyderabad</a>
              <a href="#visakhapatnam" className="city-link">Visakhapatnam</a>
              <a href="#guwahati" className="city-link">Guwahati</a>
              <a href="#patna" className="city-link">Patna</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .header {
          background-color: #000;
          color: #fff;
          padding: 40px 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .logo-section {
          flex: 1;
        }

        .logo {
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 8px;
          letter-spacing: -0.5px;
        }

        .tagline {
          font-size: 14px;
          color: #aaa;
          font-weight: 300;
        }

        .nav {
          text-align: right;
        }

        .nav-title {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          color: #888;
          margin-bottom: 16px;
        }

        .nav-list {
          list-style: none;
        }

        .nav-list li {
          margin-bottom: 8px;
        }

        .nav-list a {
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 400;
          transition: color 0.3s ease;
        }

        .nav-list a:hover {
          color: #888;
        }

        .city-selector {
          background-color: #000;
          color: #fff;
          padding: 30px 0;
          border-top: 1px solid #222;
        }

        .city-content {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .city-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        .city-list {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
        }

        .city-link {
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          transition: color 0.3s ease;
        }

        .city-link:hover {
          color: #888;
        }

        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            gap: 30px;
          }

          .nav {
            text-align: left;
          }

          .city-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .city-list {
            gap: 15px;
          }
        }
      `}</style>
    </>
  );
}