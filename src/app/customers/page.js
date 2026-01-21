'use client';
export default function RelatimPerformance() {
  return (
    <>
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        .header {
          text-align: center;
          margin-bottom: 60px;
        }

        .header h1 {
          font-size: 32px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 16px 0;
        }

        .header p {
          font-size: 18px;
          color: #666;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .card {
          background: #fff;
          border-radius: 16px;
          padding: 0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 20px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1), 0 15px 30px rgba(0, 0, 0, 0.08);
        }

        .card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }

        .card-content {
          padding: 32px 28px;
        }

        .stat {
          font-size: 48px;
          font-weight: 800;
          margin: 0 0 8px 0;
          line-height: 1;
        }

        .stat.blue {
          color: #4A90E2;
        }

        .stat.green {
          color: #22C55E;
        }

        .card-title {
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 12px 0;
        }

        .card-description {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        .image-placeholder {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 64px;
        }

        .customers-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .cost-bg {
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 28px;
          }

          .header p {
            font-size: 16px;
          }

          .stat {
            font-size: 40px;
          }

          .card-content {
            padding: 24px 20px;
          }
        }
      `}</style>

      <div className="container">
        <div className="header">
          <h1>Relatim's AI Employees Delivering Unmatched Performance</h1>
          <p>From seamless interactions to measurable ROI, our AI Employees deliver results that matter.</p>
        </div>

        <div className="cards">
          <div className="card">
            <div className="image-placeholder customers-bg">
              👥
            </div>
            <div className="card-content">
              <div className="stat blue">20,000+</div>
              <div className="card-title">Monthly Customers Managed</div>
              <p className="card-description">
                Our AI Employees effortlessly manage thousands of customer interactions for our clients every month.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="image-placeholder cost-bg">
              💰
            </div>
            <div className="card-content">
              <div className="stat green">70%</div>
              <div className="card-title">Cost Reduction</div>
              <p className="card-description">
                Relatim AI Employees help cut fixed operational expenses by up to 70%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}