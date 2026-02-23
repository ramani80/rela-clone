'use client';
import { useState } from "react";

export default function Login() {
  const [show, setShow] = useState(false);

  return (
    <div className="page">
      <div className="card">
        <h2>Login</h2>

        {/* USERNAME */}
        <div className="inputBox">
          <input type="text" placeholder="Enter your username" />
        </div>

        {/* PASSWORD */}
        <div className="inputBox password">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
          />
          <span onClick={() => setShow(!show)}>👁</span>
        </div>

        {/* CAPTCHA */}
        <div className="captchaRow">
          <input placeholder="Type captcha here" />
          <img src="/captcha.png" className="captchaImg" />
          <span className="refresh">⟳</span>
        </div>

        <p className="forgot">Forgot Password?</p>

        <button className="btn">Login</button>
      </div>

      {/* CSS */}
      <style jsx>{`
        .page {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #e6e6e6;
          font-family: Arial;
        }

        .card {
          background: #fff;
          padding: 40px;
          width: 320px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        h2 {
          text-align: center;
          color: #0e7c7b;
          border-bottom: 2px solid #0e7c7b;
          padding-bottom: 8px;
          margin-bottom: 30px;
        }

        .inputBox {
          margin-bottom: 20px;
          border-bottom: 1px solid #444;
        }

        .inputBox input {
          width: 100%;
          border: none;
          outline: none;
          padding: 10px 0;
        }

        .password {
          display: flex;
          align-items: center;
        }

        .password span {
          cursor: pointer;
        }

        .captchaRow {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 20px 0;
        }

        .captchaRow input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ccc;
        }

        .captchaImg {
          width: 100px;
          height: 40px;
          object-fit: cover;
          border: 1px solid #ccc;
        }

        .refresh {
          cursor: pointer;
          font-size: 20px;
        }

        .forgot {
          text-align: right;
          color: red;
          font-size: 13px;
          cursor: pointer;
        }

        .btn {
          width: 100%;
          margin-top: 20px;
          padding: 12px;
          background: #0e7c7b;
          color: white;
          border: none;
          font-size: 16px;
          cursor: pointer;
        }

        .btn:hover {
          background: #095c5b;
        }
      `}</style>
    </div>
  );
}