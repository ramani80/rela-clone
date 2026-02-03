'use client';
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="navbar">
        <div className="logo">
          <h2>PANTECH SOLUTIONS®</h2>
          <span>Technology Beyond the Dreams</span>
        </div>

        <nav className="menu">
          <a href="#">Projects</a>
          <a href="#">Products</a>
          <a href="#">Courses</a>
          <a href="#">Blog</a>
          <a href="#">Learning Center</a>
          <a href="#">Contact us</a>
        </nav>
      </header>

      {/* Main Layout */}
      <main className="container">
        {/* Left Content */}
        <section className="content">
          <p className="category">ARTIFICIAL INTELLIGENCE</p>

          <h1>
            Everything You Need to Know About Artificial Intelligence (AI): <br />
            A Guide for Kids and Grown-Ups!
          </h1>

          <p className="intro">
            Hey, awesome readers! Today, we're talking about something super
            cool—Artificial Intelligence (AI). What is Artificial Intelligence?
            Artificial Intelligence (AI) is like an intelligent robot that
            learns stuff and solves problems...
          </p>

          <p className="meta">💬 4 Comments &nbsp;&nbsp; | &nbsp;&nbsp; August 31, 2023</p>

          <div className="post">
            <div className="post-image">
              <Image
                src="/ai-web.jpg"
                alt="AI Web Application"
                width={300}
                height={200}
              />
            </div>

            <div className="post-content">
              <p className="category small">ARTIFICIAL INTELLIGENCE / GENERAL</p>
              <h2>
                How to create AI Based Web Application using OpenAI – Instagram
                Description & hashtag
              </h2>
            </div>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="box">
            <h3>Select Your Language</h3>
            <select>
              <option>English</option>
            </select>
          </div>

          <div className="box">
            <h3>Categories</h3>
            <ul>
              <li>8051 Tutorials (43)</li>
              <li>ARM7 LPC2148 Tutorials (79)</li>
              <li>Artificial Intelligence (13)</li>
              <li>DSP Tutorials (70)</li>
              <li>FPGA Tutorials (103)</li>
              <li>General (222)</li>
              <li>Machine Learning (1)</li>
              <li>Matlab Tutorials (26)</li>
            </ul>
          </div>
        </aside>
      </main>

      {/* CSS */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          background: #ffffff;
          color: #222;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          border-bottom: 1px solid #e5e5e5;
        }

        .logo h2 {
          color: #2b66ff;
        }

        .logo span {
          font-size: 12px;
          color: #777;
        }

        .menu a {
          margin-left: 20px;
          text-decoration: none;
          color: #000;
          font-weight: 500;
        }

        .container {
          display: flex;
          padding: 40px;
          gap: 40px;
        }

        .content {
          flex: 3;
        }

        .sidebar {
          flex: 1;
        }

        .category {
          color: #0070f3;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .category.small {
          font-size: 12px;
        }

        h1 {
          font-size: 32px;
          margin-bottom: 15px;
        }

        .intro {
          font-size: 16px;
          color: #444;
          margin-bottom: 15px;
        }

        .meta {
          font-size: 14px;
          color: #777;
          margin-bottom: 30px;
        }

        .post {
          display: flex;
          gap: 20px;
          border-top: 1px solid #e5e5e5;
          padding-top: 20px;
        }

        .post-content h2 {
          font-size: 20px;
          margin-top: 10px;
        }

        .box {
          margin-bottom: 30px;
        }

        .box h3 {
          border-left: 3px solid #0070f3;
          padding-left: 10px;
          margin-bottom: 15px;
        }

        select {
          width: 100%;
          padding: 8px;
        }

        ul {
          list-style: none;
        }

        ul li {
          padding: 6px 0;
          font-size: 14px;
          color: #444;
        }
      `}</style>
    </>
  );
}
