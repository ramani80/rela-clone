'use client';
export default function EmbeddedSystemCourse() {
  return (
    <>
      <div className="container">
        <div className="product-wrapper">
          {/* LEFT IMAGE */}
          <div className="image-section">
            <span className="sale-badge">SALE!</span>
            <img
              src="/embedded-course.png"
              alt="Embedded System Design Course"
            />
          </div>

          {/* RIGHT DETAILS */}
          <div className="details-section">
            <h1>Embedded System Design course</h1>

            <div className="price">
              <span className="old-price">₹2,499.00</span>
              <span className="new-price">₹1,499.00</span>
            </div>

            <div className="cart-section">
              <div className="quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              <button className="add-cart">ADD TO CART</button>
            </div>

            <p className="category">
              <strong>Category:</strong> Embedded System Courses
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          padding: 40px 80px;
          font-family: Arial, sans-serif;
        }

        .product-wrapper {
          display: flex;
          gap: 60px;
          align-items: flex-start;
        }

        .image-section {
          position: relative;
          width: 40%;
        }

        .image-section img {
          width: 100%;
          border-radius: 4px;
        }

        .sale-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: #4caf50;
          color: white;
          padding: 6px 12px;
          font-size: 14px;
          font-weight: bold;
        }

        .details-section {
          width: 60%;
        }

        .details-section h1 {
          font-size: 28px;
          color: #002b6b;
          margin-bottom: 20px;
        }

        .price {
          margin-bottom: 25px;
        }

        .old-price {
          text-decoration: line-through;
          color: #999;
          margin-right: 15px;
          font-size: 18px;
        }

        .new-price {
          color: #e53935;
          font-size: 28px;
          font-weight: bold;
        }

        .cart-section {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .quantity {
          display: flex;
          border: 1px solid #ccc;
        }

        .quantity button {
          padding: 8px 14px;
          border: none;
          background: white;
          cursor: pointer;
          font-size: 16px;
        }

        .quantity span {
          padding: 8px 16px;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
        }

        .add-cart {
          background: #f44336;
          color: white;
          border: none;
          padding: 12px 24px;
          font-size: 16px;
          cursor: pointer;
        }

        .add-cart:hover {
          background: #d32f2f;
        }

        .category {
          font-size: 15px;
          color: #555;
        }

        @media (max-width: 900px) {
          .product-wrapper {
            flex-direction: column;
          }

          .image-section,
          .details-section {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
