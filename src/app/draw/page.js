'use client';
export default function IntegrationDiagram() {
  const integrations = [
    { icon: '📞', position: 'top-left', color: '#4A5568' },
    { icon: '📘', position: 'top', color: '#3B82F6' },
    { icon: '💼', position: 'top-right', color: '#1F2937' },
    { icon: '🚗', position: 'left', color: '#EC4899' },
    { icon: '📊', position: 'right', color: '#06B6D4' },
    { icon: '📦', position: 'bottom-left', color: '#3B82F6' },
    { icon: '📈', position: 'bottom', color: '#10B981' },
    { icon: '💬', position: 'bottom-right', color: '#22C55E' }
  ];

  const getPosition = (position) => {
    const positions = {
      'top-left': { top: '20%', left: '15%' },
      'top': { top: '10%', left: '50%' },
      'top-right': { top: '20%', right: '15%' },
      'left': { top: '50%', left: '10%' },
      'right': { top: '50%', right: '10%' },
      'bottom-left': { bottom: '20%', left: '15%' },
      'bottom': { bottom: '10%', left: '50%' },
      'bottom-right': { bottom: '20%', right: '15%' }
    };
    return positions[position];
  };

  return (
    <>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .header {
          position: absolute;
          top: 40px;
          text-align: center;
          color: white;
          z-index: 10;
        }

        .title {
          font-size: 32px;
          font-weight: 700;
          margin: 0 0 8px 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .subtitle {
          font-size: 16px;
          font-weight: 400;
          margin: 0;
          opacity: 0.9;
        }

        .diagram {
          position: relative;
          width: 800px;
          height: 600px;
        }

        .center-hub {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          background: white;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          z-index: 5;
          border: 4px solid #5B6FE8;
        }

        .hub-logo {
          width: 60px;
          height: 60px;
          background: #1F2937;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: 700;
          color: white;
        }

        .integration-node {
          position: absolute;
          width: 60px;
          height: 60px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transform: translate(-50%, -50%);
          z-index: 3;
          border: 3px solid #E5E7EB;
          transition: all 0.3s ease;
        }

        .integration-node:hover {
          transform: translate(-50%, -50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        .icon {
          font-size: 28px;
        }

        .connection-line {
          position: absolute;
          background: linear-gradient(90deg, rgba(91, 111, 232, 0.3), rgba(91, 111, 232, 0.1));
          height: 2px;
          transform-origin: left center;
          z-index: 1;
          pointer-events: none;
        }

        .dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #5B6FE8;
          border-radius: 50%;
          z-index: 2;
          opacity: 0.6;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .center-hub {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="container">
        <div className="header">
          <h1 className="title">Integration Hub</h1>
          <p className="subtitle">Training Needed — Enjoy ROI From Day 1.</p>
        </div>

        <div className="diagram">
          {/* Connection lines and dots */}
          <svg style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#5B6FE8', stopOpacity: 0.4 }} />
                <stop offset="100%" style={{ stopColor: '#5B6FE8', stopOpacity: 0.1 }} />
              </linearGradient>
            </defs>
            {integrations.map((integration, index) => {
              const pos = getPosition(integration.position);
              let x1 = 400, y1 = 300;
              let x2 = pos.left ? parseFloat(pos.left) * 8 : pos.right ? 800 - parseFloat(pos.right) * 8 : 400;
              let y2 = pos.top ? parseFloat(pos.top) * 6 : pos.bottom ? 600 - parseFloat(pos.bottom) * 6 : 300;
              
              return (
                <g key={index}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                  />
                  <circle
                    cx={x1 + (x2 - x1) * 0.3}
                    cy={y1 + (y2 - y1) * 0.3}
                    r="4"
                    fill="#5B6FE8"
                    opacity="0.6"
                  />
                  <circle
                    cx={x1 + (x2 - x1) * 0.6}
                    cy={y1 + (y2 - y1) * 0.6}
                    r="4"
                    fill="#5B6FE8"
                    opacity="0.6"
                  />
                </g>
              );
            })}
          </svg>

          {/* Center hub */}
          <div className="center-hub">
            <div className="hub-logo">R</div>
          </div>

          {/* Integration nodes */}
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="integration-node"
              style={getPosition(integration.position)}
            >
              <span className="icon">{integration.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}