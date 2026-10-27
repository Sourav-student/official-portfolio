"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MessageCircle, Sparkles, X } from "lucide-react";

const questions = [
  {
    question: "Who is Sourav?",
    answer:
      "Sourav Kumar Bera is a Computer Science and Engineering student at Haldia Institute of Technology and a full-stack developer based in India.",
  },
  {
    question: "What does he work with?",
    answer:
      "His toolkit includes React, Next.js, TypeScript, Node.js, Express, Spring Boot, MongoDB, PostgreSQL, and Python for machine learning.",
  },
  {
    question: "What projects has he built?",
    answer:
      "Recent projects include an Interview Preparation Tracker, a Spring Boot Link Shortener, and a Placement Prediction System. Explore the Works page for more.",
  },
  {
    question: "Where has he worked?",
    answer:
      "Sourav has worked as a Web Development Intern at Eastri and as a Full Stack Developer Intern with Amaanitvam Foundation.",
  },
  {
    question: "How can I get in touch?",
    answer:
      "Reach Sourav at souravbera620595@gmail.com, or connect with him on LinkedIn. He is open to interesting opportunities and collaborations.",
  },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0);

  return (
    <div className="chat-widget">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            id="chat-panel"
            className="chat-panel"
            role="dialog"
            aria-labelledby="chat-title"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <header className="chat-header">
              <span className="chat-avatar"><Sparkles size={17} aria-hidden="true" /></span>
              <div>
                <h2 id="chat-title">A little about Sourav</h2>
                <p><span className="status-dot" /> Portfolio assistant</p>
              </div>
              <button
                type="button"
                className="chat-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </header>

            <div className="chat-body">
              <p className="chat-greeting">Hey there! What would you like to know?</p>
              <div className="chat-questions" aria-label="Frequently asked questions">
                {questions.map(({ question }, index) => (
                  <button
                    type="button"
                    key={question}
                    className={`chat-question${index === activeQuestion ? " is-active" : ""}`}
                    onClick={() => setActiveQuestion(index)}
                    aria-pressed={index === activeQuestion}
                  >
                    {question}
                  </button>
                ))}
              </div>
              <div className="chat-answer" aria-live="polite">
                <span className="chat-answer-label">ANSWER</span>
                <p>{questions[activeQuestion].answer}</p>
                {activeQuestion === 4 && (
                  <a href="mailto:souravbera620595@gmail.com">Send an email ↗</a>
                )}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className={`chat-toggle${isOpen ? " is-open" : ""}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
        aria-expanded={isOpen}
        aria-controls="chat-panel"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        {isOpen ? <X size={22} aria-hidden="true" /> : <MessageCircle size={22} aria-hidden="true" />}
      </motion.button>
    </div>
  );
}
