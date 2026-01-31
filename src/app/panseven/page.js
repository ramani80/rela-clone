'use client';
import React, { useState } from 'react';

export default function CommentForm() {
  const [activeTab, setActiveTab] = useState('default');
  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: '',
    website: '',
    saveData: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="comment-form-container">
      <h2 className="form-title">Leave a reply</h2>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'default' ? 'active' : ''}`}
          onClick={() => setActiveTab('default')}
        >
          Default Comments (0)
        </button>
        <button
          className={`tab ${activeTab === 'facebook' ? 'active' : ''}`}
          onClick={() => setActiveTab('facebook')}
        >
          Facebook Comments
        </button>
      </div>

      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Your comment here..."
          className="comment-textarea"
          rows="6"
        />

        <div className="input-row">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name (required)"
            className="input-field"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email (required)"
            className="input-field"
            required
          />
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website"
            className="input-field"
          />
        </div>

        <div className="checkbox-container">
          <input
            type="checkbox"
            name="saveData"
            id="saveData"
            checked={formData.saveData}
            onChange={handleChange}
            className="checkbox"
          />
          <label htmlFor="saveData" className="checkbox-label">
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>

        <div className="form-footer">
          <p className="privacy-text">
            This site uses Akismet to reduce spam.{' '}
            <a href="#" className="privacy-link">
              Learn how your comment data is processed
            </a>
            .
          </p>
          <button type="submit" className="submit-button">
            POST COMMENT
          </button>
        </div>
      </form>

      <style jsx>{`
        .comment-form-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        .form-title {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #333;
        }

        .tabs {
          display: flex;
          gap: 0;
          margin-bottom: 20px;
          border-bottom: 2px solid #e5e5e5;
        }

        .tab {
          padding: 12px 0;
          background: none;
          border: none;
          border-bottom: 3px solid transparent;
          cursor: pointer;
          font-size: 14px;
          color: #999;
          transition: all 0.3s ease;
          margin-right: 30px;
          font-weight: 400;
        }

        .tab.active {
          color: #333;
          border-bottom-color: #333;
          font-weight: 500;
        }

        .tab:hover {
          color: #666;
        }

        .comment-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .comment-textarea {
          width: 100%;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          font-family: inherit;
          resize: vertical;
          transition: border-color 0.3s ease;
        }

        .comment-textarea:focus {
          outline: none;
          border-color: #999;
        }

        .comment-textarea::placeholder {
          color: #aaa;
        }

        .input-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .input-field {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.3s ease;
        }

        .input-field:focus {
          outline: none;
          border-color: #999;
        }

        .input-field::placeholder {
          color: #aaa;
        }

        .checkbox-container {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin: 8px 0;
        }

        .checkbox {
          width: 18px;
          height: 18px;
          margin-top: 2px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .checkbox-label {
          font-size: 14px;
          color: #333;
          cursor: pointer;
          line-height: 1.5;
        }

        .form-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }

        .privacy-text {
          font-size: 13px;
          color: #666;
          margin: 0;
        }

        .privacy-link {
          color: #666;
          text-decoration: underline;
        }

        .privacy-link:hover {
          color: #333;
        }

        .submit-button {
          background-color: #e53935;
          color: white;
          border: none;
          padding: 12px 32px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
          cursor: pointer;
          border-radius: 2px;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background-color: #c62828;
        }

        .submit-button:active {
          background-color: #b71c1c;
        }

        @media (max-width: 768px) {
          .input-row {
            grid-template-columns: 1fr;
          }

          .form-footer {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }

          .submit-button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}