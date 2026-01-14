'use client';
import { useState } from 'react';

export default function AIEmployeeLanding() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    companyEmail: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.companyName || !formData.companyEmail || !formData.country) {
      alert('Please fill in all required fields');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className="title">Hire Your First AI Employee Today</h1>
          
          <p className="subtitle">
            Zero hassle. Zero tech upgrades. 100% ready to work for your automotive business
          </p>

          <div className="form-card">
            <div className="form-group">
              <label htmlFor="name">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="companyName">
                Company Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="companyEmail">
                Company Email ID <span className="required">*</span>
              </label>
              <input
                type="email"
                id="companyEmail"
                name="companyEmail"
                value={formData.companyEmail}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="country">
                Country <span className="required">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select your country</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="IN">India</option>
                <option value="JP">Japan</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button onClick={handleSubmit} className="submit-button">
              Get Started
            </button>
          </div>
        </div>

        <div className="chat-bubble">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 13.54 2.38 15 3.06 16.28L2 22L7.72 20.94C9 21.62 10.46 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="white"/>
            <circle cx="8" cy="12" r="1.5" fill="#5B7FFF"/>
            <circle cx="12" cy="12" r="1.5" fill="#5B7FFF"/>
            <circle cx="16" cy="12" r="1.5" fill="#5B7FFF"/>
          </svg>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

        .content {
          width: 100%;
          max-width: 500px;
        }

        .title {
          font-size: 42px;
          font-weight: 700;
          color: #1a1a1a;
          text-align: center;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 16px;
          color: #666;
          text-align: center;
          margin-bottom: 40px;
          line-height: 1.5;
        }

        .form-card {
          background: white;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
        }

        .form-group {
          margin-bottom: 24px;
        }

        label {
          display: block;
          font-size: 14px;
          font-weight: 500;
          color: #333;
          margin-bottom: 8px;
        }

        .required {
          color: #ff4444;
        }

        .form-input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 15px;
          color: #333;
          background: white;
          transition: all 0.2s ease;
          outline: none;
        }

        .form-input:focus {
          border-color: #5B7FFF;
          box-shadow: 0 0 0 3px rgba(91, 127, 255, 0.1);
        }

        select.form-input {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 40px;
        }

        .submit-button {
          width: 100%;
          padding: 14px 24px;
          background: #5B7FFF;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 8px;
        }

        .submit-button:hover {
          background: #4a6be8;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(91, 127, 255, 0.3);
        }

        .submit-button:active {
          transform: translateY(0);
        }

        .chat-bubble {
          position: fixed;
          bottom: 30px;
          left: 30px;
          width: 60px;
          height: 60px;
          background: #5B7FFF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(91, 127, 255, 0.4);
          transition: all 0.3s ease;
        }

        .chat-bubble:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(91, 127, 255, 0.5);
        }

        @media (max-width: 600px) {
          .title {
            font-size: 32px;
          }

          .form-card {
            padding: 30px 24px;
          }

          .chat-bubble {
            bottom: 20px;
            left: 20px;
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </>
  );
}