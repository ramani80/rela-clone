'use client';
import React, { useState } from 'react';

export default function RelatimBooking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 0, 1));

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const renderCalendarDays = () => {
    const days = [];
    const totalSlots = Math.ceil((daysInMonth + startingDayOfWeek) / 7) * 7;
    
    for (let i = 0; i < totalSlots; i++) {
      const dayNumber = i - startingDayOfWeek + 1;
      
      if (i < startingDayOfWeek || dayNumber > daysInMonth) {
        days.push(<div key={i} className="calendar-day empty"></div>);
      } else {
        const isSelected = selectedDate === dayNumber;
        const isAvailable = dayNumber >= 12;
        
        days.push(
          <div
            key={i}
            className={`calendar-day ${isAvailable ? 'available' : ''} ${isSelected ? 'selected' : ''}`}
            onClick={() => isAvailable && handleDateClick(dayNumber)}
          >
            {dayNumber}
          </div>
        );
      }
    }
    
    return days;
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="logo">Relatim</div>
        
        <div className="content">
          <div className="icon-circle">
            <div className="icon-letter">R</div>
          </div>
          
          <div className="company-name">Relatim</div>
          <h1 className="title">Demo & Introduction</h1>
          
          <div className="info-item">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>30 min</span>
          </div>
          
          <div className="info-item">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="2" y1="10" x2="22" y2="10"></line>
            </svg>
            <span>Web conferencing details provided upon confirmation.</span>
          </div>
          
          <div className="session-info">
            <strong>Relatim</strong> - Demo and Introduction Session
          </div>
          
          <a href="#" className="cookie-link">Cookie settings</a>
        </div>
      </div>
      
      <div className="right-panel">
        <div className="calendar-badge">New Calendar!</div>
        
        <h2 className="calendar-title">Select a Date & Time</h2>
        
        <div className="calendar-header">
          <button className="nav-button" onClick={handlePrevMonth}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <div className="month-year">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </div>
          
          <button className="nav-button" onClick={handleNextMonth}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        
        <div className="calendar-grid">
          <div className="calendar-day-header">MON</div>
          <div className="calendar-day-header">TUE</div>
          <div className="calendar-day-header">WED</div>
          <div className="calendar-day-header">THU</div>
          <div className="calendar-day-header">FRI</div>
          <div className="calendar-day-header">SAT</div>
          <div className="calendar-day-header">SUN</div>
          
          {renderCalendarDays()}
        </div>
        
        <div className="timezone-section">
          <div className="timezone-label">Time zone</div>
          <div className="timezone-select">
            <svg className="timezone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>India Standard Time (9:55am)</span>
            <svg className="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          background: #f5f5f5;
        }

        .left-panel {
          width: 500px;
          background: white;
          border-right: 1px solid #e5e5e5;
          padding: 40px;
          display: flex;
          flex-direction: column;
        }

        .logo {
          font-size: 48px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 60px;
        }

        .content {
          flex: 1;
        }

        .icon-circle {
          width: 80px;
          height: 80px;
          background: #1a1a1a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .icon-letter {
          color: white;
          font-size: 40px;
          font-weight: 700;
        }

        .company-name {
          font-size: 16px;
          color: #666;
          margin-bottom: 8px;
        }

        .title {
          font-size: 32px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 32px 0;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: #666;
          font-size: 15px;
        }

        .icon {
          width: 20px;
          height: 20px;
          color: #666;
        }

        .session-info {
          margin-top: 40px;
          padding-top: 40px;
          border-top: 1px solid #e5e5e5;
          color: #666;
          font-size: 15px;
          line-height: 1.6;
        }

        .cookie-link {
          display: inline-block;
          margin-top: 40px;
          color: #0066cc;
          text-decoration: none;
          font-size: 14px;
        }

        .cookie-link:hover {
          text-decoration: underline;
        }

        .right-panel {
          flex: 1;
          background: white;
          padding: 40px;
          max-width: 600px;
          position: relative;
        }

        .calendar-badge {
          position: absolute;
          top: 0;
          right: 0;
          background: #555;
          color: white;
          padding: 24px 32px;
          font-size: 12px;
          font-weight: 600;
          transform: rotate(45deg) translate(35%, -50%);
          transform-origin: top right;
          width: 200px;
          text-align: center;
        }

        .calendar-title {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 32px 0;
        }

        .calendar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .nav-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0066cc;
        }

        .nav-button svg {
          width: 20px;
          height: 20px;
        }

        .nav-button:hover {
          background: #f0f0f0;
          border-radius: 4px;
        }

        .month-year {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
          margin-bottom: 32px;
        }

        .calendar-day-header {
          text-align: center;
          font-size: 12px;
          font-weight: 600;
          color: #1a1a1a;
          padding: 12px 0;
        }

        .calendar-day {
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #ccc;
          border-radius: 4px;
        }

        .calendar-day.empty {
          visibility: hidden;
        }

        .calendar-day.available {
          color: #0066cc;
          cursor: pointer;
          font-weight: 500;
        }

        .calendar-day.available:hover {
          background: #e6f2ff;
        }

        .calendar-day.selected {
          background: #0066cc;
          color: white;
        }

        .timezone-section {
          margin-top: 32px;
        }

        .timezone-label {
          font-size: 14px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 8px;
        }

        .timezone-select {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          color: #1a1a1a;
        }

        .timezone-select:hover {
          border-color: #ccc;
        }

        .timezone-icon {
          width: 18px;
          height: 18px;
          color: #666;
        }

        .dropdown-icon {
          width: 16px;
          height: 16px;
          color: #666;
          margin-left: auto;
        }

        @media (max-width: 1024px) {
          .container {
            flex-direction: column;
          }

          .left-panel {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid #e5e5e5;
          }

          .right-panel {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}