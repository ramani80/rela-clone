'use client';
import { useState } from 'react';

export default function LanguageSection() {
  const [playing, setPlaying] = useState(null);

  const languages = [
    {
      id: 'english',
      name: 'English',
      flag: '🌐',
      text: 'Tap to Play',
      audio: '/audio/english.mp3'
    },
    {
      id: 'hindi',
      name: 'Hindi',
      flag: '🇮🇳',
      text: 'सुनने के लिए टैप करें',
      audio: '/audio/hindi.mp3'
    },
    {
      id: 'spanish',
      name: 'Spanish',
      flag: '🇪🇸',
      text: 'Toca para escuchar',
      audio: '/audio/spanish.mp3'
    },
    {
      id: 'bengali',
      name: 'Bengali',
      flag: '🇮🇳',
      text: 'খেলতে ট্যাপ করুন',
      audio: '/audio/bengali.mp3'
    }
  ];

  const handlePlay = (id) => {
    setPlaying(id);
    // Simulate audio playing
    setTimeout(() => setPlaying(null), 2000);
  };

  return (
    <div className="language-section">
      <div className="container">
        <div className="header">
          <h2>Our AI Employees Speak Every Customer's Language 💡</h2>
          <p className="subtitle">
            Our AI Employees speak and understand all major languages, so you can connect with your
            customers their way.
          </p>
        </div>

        <div className="language-grid">
          {languages.map((lang) => (
            <div key={lang.id} className="language-card">
              <div className="language-header">
                <span className="flag">{lang.flag}</span>
                <span className="language-name">{lang.name}</span>
              </div>
              <p className="language-text">{lang.text}</p>
              <button
                className={`play-button ${playing === lang.id ? 'playing' : ''}`}
                onClick={() => handlePlay(lang.id)}
                aria-label={`Play ${lang.name}`}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 5v14l11-7L8 5z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .language-section {
          width: 100%;
          padding: 60px 20px;
          background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
          min-height: 500px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          margin-bottom: 50px;
        }

        .header h2 {
          font-size: 32px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 16px 0;
          line-height: 1.3;
        }

        .subtitle {
          font-size: 16px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .language-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .language-card {
          background: white;
          border-radius: 16px;
          padding: 32px 24px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          position: relative;
        }

        .language-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .language-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .flag {
          font-size: 20px;
        }

        .language-name {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .language-text {
          font-size: 14px;
          color: #666;
          margin: 0 0 24px 0;
          min-height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .play-button {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        .play-button:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .play-button:active {
          transform: scale(0.95);
        }

        .play-button.playing {
          animation: pulse 1s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 6px 24px rgba(102, 126, 234, 0.5);
          }
        }

        @media (max-width: 768px) {
          .language-section {
            padding: 40px 16px;
          }

          .header h2 {
            font-size: 24px;
          }

          .subtitle {
            font-size: 14px;
          }

          .language-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
          }

          .language-card {
            padding: 24px 16px;
          }
        }
      `}</style>
    </div>
  );
}