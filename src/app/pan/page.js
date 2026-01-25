'use client';
export default function SearchProduct() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Search Product</h1>
          <p className="hint">▷ Choose the product page you want to go to</p>
        </div>

        <div className="form-row">
          <div className="field">
            <label>Industry type</label>
            <select>
              <option>Please select item</option>
              <option>Chemical</option>
              <option>Manufacturing</option>
            </select>
          </div>

          <div className="field">
            <label>Product Category</label>
            <select>
              <option>Please select item</option>
              <option>Lubricants</option>
              <option>Oils</option>
            </select>
          </div>

          <div className="field">
            <label>Application</label>
            <select>
              <option>Please select item</option>
              <option>Industrial</option>
              <option>Cosmetics</option>
            </select>
          </div>

          <div className="field">
            <label>Keywords</label>
            <input type="text" placeholder="Type keywords..." />
          </div>

          <button className="search-btn">
            SEARCH <span>➤</span>
          </button>
        </div>

        <div className="quick-section">
          <span className="quick-label">▷ QUICK SELECTION</span>

          <button className="quick-btn">Lubricant for Plastics ▷</button>
          <button className="quick-btn">Industrial Oils ▷</button>
          <button className="quick-btn">Natural Emulsifier for Skin Care ▷</button>
        </div>
      </div>

      <style jsx>{`
        .container {
          background: #f4f4f4;
          padding: 40px;
          font-family: Arial, sans-serif;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        h1 {
          color: #1f5b2c;
          margin: 0;
          font-size: 32px;
        }

        .hint {
          color: #1f5b2c;
          font-size: 14px;
        }

        .form-row {
          display: flex;
          gap: 15px;
          align-items: flex-end;
          flex-wrap: wrap;
        }

        .field {
          display: flex;
          flex-direction: column;
          min-width: 200px;
        }

        label {
          font-size: 14px;
          margin-bottom: 6px;
          color: #000;
        }

        select,
        input {
          padding: 10px;
          border: 1px solid #ccc;
          font-size: 14px;
        }

        .search-btn {
          background: #2f5f1f;
          color: #fff;
          border: none;
          padding: 12px 20px;
          cursor: pointer;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .search-btn:hover {
          background: #244a18;
        }

        .quick-section {
          margin-top: 25px;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .quick-label {
          font-weight: bold;
          color: #000;
          margin-right: 10px;
        }

        .quick-btn {
          background: #2f5f1f;
          color: #fff;
          border: none;
          padding: 8px 14px;
          cursor: pointer;
          font-size: 13px;
        }

        .quick-btn:hover {
          background: #244a18;
        }
      `}</style>
    </>
  );
}
