'use client';
export default function Comments() {
  return (
    <div className="comment-wrapper">
      <h2 className="title">Leave a reply</h2>

      <div className="tabs">
        <span className="active">Default Comments (0)</span>
        <span>Facebook Comments</span>
      </div>

      <textarea
        className="comment-box"
        placeholder="Your comment here..."
      ></textarea>

      <div className="input-row">
        <input type="text" placeholder="Name (required)" />
        <input type="email" placeholder="Email (required)" />
        <input type="text" placeholder="Website" />
      </div>

      <div className="checkbox-row">
        <input type="checkbox" id="save" />
        <label htmlFor="save">
          Save my name, email, and website in this browser for the next time I comment.
        </label>
      </div>

      <button className="post-btn">POST COMMENT</button>

      <style jsx>{`
        .comment-wrapper {
          max-width: 1000px;
          margin: 40px auto;
          padding: 0 20px;
          font-family: Arial, sans-serif;
        }

        .title {
          font-size: 22px;
          margin-bottom: 10px;
        }

        .tabs {
          display: flex;
          gap: 15px;
          font-size: 14px;
          margin-bottom: 15px;
          color: #777;
        }

        .tabs .active {
          color: #000;
          font-weight: 600;
          border-bottom: 2px solid #000;
          padding-bottom: 3px;
        }

        .comment-box {
          width: 100%;
          min-height: 140px;
          padding: 12px;
          border: 1px solid #dcdcdc;
          resize: vertical;
          font-size: 14px;
          margin-bottom: 15px;
        }

        .input-row {
          display: flex;
          gap: 15px;
          margin-bottom: 15px;
        }

        .input-row input {
          flex: 1;
          padding: 10px;
          border: 1px solid #dcdcdc;
          font-size: 14px;
        }

        .checkbox-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .post-btn {
          background-color: #f44336;
          color: white;
          border: none;
          padding: 12px 20px;
          font-size: 14px;
          cursor: pointer;
          float: right;
        }

        .post-btn:hover {
          background-color: #d7372d;
        }

        @media (max-width: 768px) {
          .input-row {
            flex-direction: column;
          }

          .post-btn {
            float: none;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
