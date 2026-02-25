'use client';
// pages/csuite.js
import React from "react";
import "./csuite.css"; // Normal CSS file

const Csuite = () => {
  const roles = [
    "CEO", "CFO", "COO", "CHRO",
    "CISO", "CMO", "CTO", "CRO",
    "Tax leader", "GCO", "Board executive", "CSO"
  ];

  return (
    <div className="csuite-container">
      <h1>Explore insights and services for your C-suite role</h1>
      <p>
        We know the imperatives of transformation and sustainable growth place varying
        demands on leaders across the C-suite, so we’ve curated our most actionable
        insights and relevant services for each leadership role.
      </p>

      <div className="roles-grid">
        {roles.map((role, index) => (
          <button key={index} className="role-btn">{role}</button>
        ))}
      </div>
    </div>
  );
};

export default Csuite;