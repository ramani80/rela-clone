'use client';
export default function Footer() {
  return (
    <>
      <footer className="footer-wrapper">
        {/* Top Info Bar */}
        <div className="footer-top">
          <p>
            🤔 For any Queries, Please Mail to{" "}
            <strong>learn@warriorsway.in</strong>
          </p>
          <p>
            Contact number : <strong>9003249787</strong>
          </p>
        </div>

        {/* Main Footer */}
        <div className="footer-main">
          {/* About */}
          <div className="footer-column">
            <h3>🏢 About</h3>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Verify Certificate</li>
              <li>Contact Us</li>
              <li>Hall of Fame</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3>✉️ Contact</h3>
            <p>Learn@warriorsway.in</p>

            <h3 className="mt">🕒 Working Hours</h3>
            <p>Mon - Sat : 9.00 A.M - 6.00 P.M IST</p>
          </div>

          {/* Information */}
          <div className="footer-column">
            <h3>ℹ️ Information</h3>
            <ul>
              <li>Warranty Information</li>
              <li>Return Policy</li>
              <li>Shipping Policy</li>
              <li>Cancellation Order</li>
            </ul>
          </div>
        </div>

        {/* Brand Logos */}
        <div className="footer-brands">
          <span>PANTECH SOLUTIONS</span>
          <span>WARRIORS WAY</span>
          <span>AUTOMATE YOUR BUSINESS</span>
        </div>
      </footer>

      {/* Normal CSS */}
      <style jsx>{`
        .footer-wrapper {
          font-family: Arial, sans-serif;
          background-color: #f3f3f6;
        }

        .footer-top {
          background-color: #ffffff;
          text-align: center;
          padding: 20px;
          font-size: 16px;
          border-bottom: 1px solid #ddd;
        }

        .footer-top p {
          margin: 5px 0;
        }

        .footer-main {
          display: flex;
          justify-content: space-around;
          padding: 40px 20px;
          flex-wrap: wrap;
        }

        .footer-column {
          min-width: 220px;
          margin: 10px 0;
        }

        .footer-column h3 {
          font-size: 18px;
          margin-bottom: 12px;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
        }

        .footer-column ul li {
          margin-bottom: 8px;
          cursor: pointer;
        }

        .footer-column p {
          margin: 6px 0;
        }

        .mt {
          margin-top: 20px;
        }

        .footer-brands {
          display: flex;
          justify-content: center;
          gap: 40px;
          padding: 20px;
          background-color: #ffffff;
          font-weight: bold;
          font-size: 14px;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
}
