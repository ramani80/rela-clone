'use client';
"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Once I have Done the Payment where should i access the course ?",
      answer:
        "After the payment is done. Please signup to learn.pantechsolutions.net using the same mail id used for payment.",
    },
    { question: "Where can i access the course ?", answer: "" },
    { question: "What is the validity of the course ?", answer: "" },
    {
      question:
        "Is it only Self Paced Learning or I will get Live session ?",
      answer: "",
    },
    { question: "Where can i contact you", answer: "" },
    {
      question: "Where can i clear my doubts?",
      answer: "You can ask your doubts on weekend live sessions.",
    },
    { question: "Will you provide job opportunities ?", answer: "" },
    { question: "Can I Take More than One Course at a Time?", answer: "" },
    {
      question: "My Payment Did Not Go Through. What Do I Do?",
      answer: "",
    },
    { question: "When do i get my internship Certificate ?", answer: "" },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="faq-container">
        <span className="badge">Frequently Asked Questions</span>
        <h1 className="title">
          Need a <span>Support ?</span>
        </h1>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                {faq.question}
                <span className="icon">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </div>

              {openIndex === index && faq.answer && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq-container {
          padding: 80px 10%;
          background: #f7f7fb;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        .badge {
          background: #eef0ff;
          color: #6c63ff;
          padding: 8px 18px;
          border-radius: 20px;
          font-size: 14px;
          display: inline-block;
          margin-bottom: 20px;
        }

        .title {
          font-size: 42px;
          margin-bottom: 50px;
        }

        .title span {
          background: linear-gradient(90deg, #6c63ff, #ff7eb3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px 60px;
          text-align: left;
        }

        .faq-item {
          padding: 15px 0;
          border-bottom: 1px solid #ddd;
          cursor: pointer;
        }

        .faq-question {
          font-size: 18px;
          font-weight: 600;
          color: #3f3d56;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .icon {
          color: #6c63ff;
          font-size: 14px;
        }

        .faq-answer {
          margin-top: 10px;
          font-size: 15px;
          color: #555;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .faq-grid {
            grid-template-columns: 1fr;
          }

          .title {
            font-size: 32px;
          }
        }
      `}</style>
    </>
  );
}
