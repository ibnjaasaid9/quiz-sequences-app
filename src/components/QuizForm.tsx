"use client";

import { useState } from "react";
import { QUIZ_DATA, ANSWER_KEY } from "@/data/quizData";
import styles from "./QuizForm.module.css";

interface UserAnswers {
  [questionId: number]: string;
}

export default function QuizForm() {
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionId: number, answer: string) => {
    if (!submitted) {
      setUserAnswers((prev) => ({
        ...prev,
        [questionId]: answer,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowResults(true);
  };

  const handleReset = () => {
    setUserAnswers({});
    setShowResults(false);
    setSubmitted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    QUIZ_DATA.forEach((question) => {
      if (userAnswers[question.id] === ANSWER_KEY[question.id]) {
        correct++;
      }
    });
    return { correct, total: QUIZ_DATA.length };
  };

  const score = calculateScore();
  const percentage = (score.correct / score.total) * 100;

  const getInterpretation = () => {
    if (score.correct >= 9) {
      return {
        title: "Excellent Understanding",
        message: "Score: 9-10 correct",
        emoji: "🎉",
        color: "#27AE60"
      };
    } else if (score.correct >= 7) {
      return {
        title: "Good Understanding",
        message: "Score: 7-8 correct",
        emoji: "👍",
        color: "#3498DB"
      };
    } else if (score.correct >= 5) {
      return {
        title: "Average Understanding",
        message: "Score: 5-6 correct",
        emoji: "📚",
        color: "#F39C12"
      };
    } else {
      return {
        title: "Needs Review",
        message: "Score: 0-4 correct - Needs review of sequence concepts",
        emoji: "💪",
        color: "#E74C3C"
      };
    }
  };

  const interpretation = getInterpretation();

  const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8", "#F7DC6F", "#BB8FCE", "#85C1E2", "#F8B88B", "#52B788"];

  return (
    <div className={styles.quizContainer}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>Quiz Sequences</h1>
        <p className={styles.subtitle}>Automatic Correction Tool</p>
        <p className={styles.professor}>SASE - Prof. IBNJAA Said</p>
      </header>

      {!showResults ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          {QUIZ_DATA.map((question, idx) => {
            const bgColor = colors[idx % colors.length];

            return (
              <div
                key={question.id}
                className={styles.questionBlock}
                style={{ "--color": bgColor } as React.CSSProperties}
              >
                <h3 className={styles.questionTitle}>Question {question.id}</h3>

                <div className={styles.choices}>
                  {["A", "B", "C", "D"].map((answerKey) => {
                    const isSelected = userAnswers[question.id] === answerKey;

                    return (
                      <label key={answerKey} className={`${styles.choiceLabel} ${isSelected ? styles.selected : ""}`}>
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={answerKey}
                          checked={isSelected}
                          onChange={() => handleAnswerChange(question.id, answerKey)}
                          disabled={submitted}
                          className={styles.radioInput}
                        />
                        <span className={styles.answerKey}>{answerKey}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.btnPrimary}>
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.resultsSection}>
          <div className={styles.resultsSummary}>
            <h2 className={styles.resultsTitle}>📊 Results</h2>
            <div className={styles.scoreDisplay}>
              <div className={styles.scoreBox}>
                <p className={styles.score}>
                  {score.correct}/{score.total}
                </p>
              </div>
              <div
                className={styles.percentageBox}
                style={{
                  background: interpretation.color,
                }}
              >
                <p className={styles.percentage}>{percentage.toFixed(1)}%</p>
              </div>
            </div>

            <div className={styles.interpretationBox} style={{ borderLeftColor: interpretation.color }}>
              <p className={styles.interpretationEmoji}>{interpretation.emoji}</p>
              <h3 className={styles.interpretationTitle}>{interpretation.title}</h3>
              <p className={styles.interpretationMessage}>{interpretation.message}</p>
            </div>

            <div className={styles.answersList}>
              <h3 className={styles.answersTitle}>Your Answers:</h3>
              {QUIZ_DATA.map((question) => {
                const userAnswer = userAnswers[question.id];
                const correctAnswer = ANSWER_KEY[question.id];
                const isCorrect = userAnswer === correctAnswer;

                return (
                  <div key={question.id} className={`${styles.answerItem} ${isCorrect ? styles.answerCorrect : styles.answerWrong}`}>
                    <span className={styles.itemQuestion}>Q{question.id}:</span>
                    <span className={styles.itemAnswer}>Your answer: <strong>{userAnswer || "—"}</strong></span>
                    {!isCorrect && <span className={styles.itemCorrect}>Correct: <strong>{correctAnswer}</strong></span>}
                    <span className={styles.itemStatus}>{isCorrect ? "✓" : "✗"}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button type="button" onClick={handleReset} className={styles.btnSecondary}>
              Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
