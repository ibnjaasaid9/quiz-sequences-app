"use client";

import { useState } from "react";
import { GLOBAL_QUIZ_DATA, calculateGlobalResult } from "@/data/globalQuizData";
import styles from "./GlobalQuizForm.module.css";

interface UserAnswers {
  [questionId: number]: boolean;
}

export default function GlobalQuizForm() {
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionId: number, answer: boolean) => {
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

  const result = calculateGlobalResult(userAnswers);

  const colors = {
    Series: "#3498DB",
    Continuity: "#E74C3C",
    Differentiability: "#2ECC71",
  };

  return (
    <div className={styles.quizContainer}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>📐 Quiz Global - Real Analysis</h1>
        <p className={styles.subtitle}>Series • Continuity • Differentiability</p>
        <p className={styles.professor}>Prof. IBNJAA Said</p>
        <p className={styles.groups}>Groups M6 - M11</p>
      </header>

      {!showResults ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.gridContainer}>
            {/* Series Column */}
            <div className={styles.categoryColumn} style={{ borderColor: colors.Series }}>
              <h2 className={styles.columnTitle} style={{ color: colors.Series }}>
                📊 Series
              </h2>
              <div className={styles.questionsGrid}>
                {GLOBAL_QUIZ_DATA.filter((q) => q.category === "Series").map((question, idx) => (
                  <div key={question.id} className={styles.questionRow}>
                    <span className={styles.questionNum}>Q{idx + 1}</span>
                    <div className={styles.answerOptions}>
                      <label className={styles.answerLabel}>
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value="true"
                          checked={userAnswers[question.id] === true}
                          onChange={() => handleAnswerChange(question.id, true)}
                          disabled={submitted}
                          className={styles.radioInput}
                        />
                        <span className={styles.answerText}>T</span>
                      </label>
                      <label className={styles.answerLabel}>
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value="false"
                          checked={userAnswers[question.id] === false}
                          onChange={() => handleAnswerChange(question.id, false)}
                          disabled={submitted}
                          className={styles.radioInput}
                        />
                        <span className={styles.answerText}>F</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continuity Column */}
            <div className={styles.categoryColumn} style={{ borderColor: colors.Continuity }}>
              <h2 className={styles.columnTitle} style={{ color: colors.Continuity }}>
                🔗 Continuity
              </h2>
              <div className={styles.questionsGrid}>
                {GLOBAL_QUIZ_DATA.filter((q) => q.category === "Continuity").map((question, idx) => (
                  <div key={question.id} className={styles.questionRow}>
                    <span className={styles.questionNum}>Q{idx + 1}</span>
                    <div className={styles.answerOptions}>
                      <label className={styles.answerLabel}>
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value="true"
                          checked={userAnswers[question.id] === true}
                          onChange={() => handleAnswerChange(question.id, true)}
                          disabled={submitted}
                          className={styles.radioInput}
                        />
                        <span className={styles.answerText}>T</span>
                      </label>
                      <label className={styles.answerLabel}>
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value="false"
                          checked={userAnswers[question.id] === false}
                          onChange={() => handleAnswerChange(question.id, false)}
                          disabled={submitted}
                          className={styles.radioInput}
                        />
                        <span className={styles.answerText}>F</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Differentiability Column */}
            <div className={styles.categoryColumn} style={{ borderColor: colors.Differentiability }}>
              <h2 className={styles.columnTitle} style={{ color: colors.Differentiability }}>
                📈 Differentiability
              </h2>
              <div className={styles.questionsGrid}>
                {GLOBAL_QUIZ_DATA.filter((q) => q.category === "Differentiability").map((question, idx) => (
                  <div key={question.id} className={styles.questionRow}>
                    <span className={styles.questionNum}>Q{idx + 1}</span>
                    <div className={styles.answerOptions}>
                      <label className={styles.answerLabel}>
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value="true"
                          checked={userAnswers[question.id] === true}
                          onChange={() => handleAnswerChange(question.id, true)}
                          disabled={submitted}
                          className={styles.radioInput}
                        />
                        <span className={styles.answerText}>T</span>
                      </label>
                      <label className={styles.answerLabel}>
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value="false"
                          checked={userAnswers[question.id] === false}
                          onChange={() => handleAnswerChange(question.id, false)}
                          disabled={submitted}
                          className={styles.radioInput}
                        />
                        <span className={styles.answerText}>F</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.btnPrimary}>
              Submit Quiz
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.resultsSection}>
          <h2 className={styles.resultsTitle}>📊 Quiz Results</h2>

          {/* Category Results */}
          <div className={styles.resultsGrid}>
            {/* Series */}
            <div className={styles.categoryResult} style={{ borderColor: colors.Series }}>
              <h3 style={{ color: colors.Series }}>📊 Series</h3>
              <div className={styles.scoreDisplay}>
                <span className={styles.scoreValue}>
                  {result.seriesScore}/13
                </span>
              </div>
              <p className={styles.interpretation}>{result.seriesInterpretation}</p>
              <div className={styles.scoreBar}>
                <div
                  className={styles.scoreFill}
                  style={{
                    width: `${(result.seriesScore / 13) * 100}%`,
                    backgroundColor: colors.Series,
                  }}
                />
              </div>
            </div>

            {/* Continuity */}
            <div className={styles.categoryResult} style={{ borderColor: colors.Continuity }}>
              <h3 style={{ color: colors.Continuity }}>🔗 Continuity</h3>
              <div className={styles.scoreDisplay}>
                <span className={styles.scoreValue}>
                  {result.continuityScore}/12
                </span>
              </div>
              <p className={styles.interpretation}>{result.continuityInterpretation}</p>
              <div className={styles.scoreBar}>
                <div
                  className={styles.scoreFill}
                  style={{
                    width: `${(result.continuityScore / 12) * 100}%`,
                    backgroundColor: colors.Continuity,
                  }}
                />
              </div>
            </div>

            {/* Differentiability */}
            <div className={styles.categoryResult} style={{ borderColor: colors.Differentiability }}>
              <h3 style={{ color: colors.Differentiability }}>📈 Differentiability</h3>
              <div className={styles.scoreDisplay}>
                <span className={styles.scoreValue}>
                  {result.differentiabilityScore}/15
                </span>
              </div>
              <p className={styles.interpretation}>{result.differentiabilityInterpretation}</p>
              <div className={styles.scoreBar}>
                <div
                  className={styles.scoreFill}
                  style={{
                    width: `${(result.differentiabilityScore / 15) * 100}%`,
                    backgroundColor: colors.Differentiability,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Global Score */}
          <div className={styles.globalScoreCard}>
            <h3>🌍 Global Score</h3>
            <div className={styles.globalScore}>
              <span className={styles.totalScore}>{result.totalScore}/40</span>
              <span className={styles.percentage}>
                {Math.round((result.totalScore / 40) * 100)}%
              </span>
            </div>
            <p className={styles.globalInterpretation}>{result.globalInterpretation}</p>
            <div className={styles.scoreBar}>
              <div
                className={styles.scoreFill}
                style={{
                  width: `${(result.totalScore / 40) * 100}%`,
                  backgroundColor: "#9B59B6",
                }}
              />
            </div>
          </div>

          {/* Answer Summary */}
          <div className={styles.answerSummary}>
            <h3>📝 Answer Summary</h3>
            <div className={styles.summaryGrid}>
              {/* Series Summary */}
              <div className={styles.summaryColumn} style={{ borderColor: colors.Series }}>
                <h4 style={{ color: colors.Series }}>📊 Series</h4>
                <div className={styles.answersContainer}>
                  {GLOBAL_QUIZ_DATA.filter((q) => q.category === "Series").map((question, idx) => {
                    const userAnswer = userAnswers[question.id];
                    const isCorrect = userAnswer === question.correctAnswer;
                    return (
                      <div key={question.id} className={`${styles.answerRow} ${isCorrect ? styles.correct : styles.incorrect}`}>
                        <span className={styles.qNum}>Q{idx + 1}</span>
                        <div className={styles.answerComparison}>
                          <span className={styles.userAns}>
                            Your: {userAnswer !== undefined ? (userAnswer ? "T" : "F") : "-"}
                          </span>
                          <span className={styles.correctAns}>
                            Correct: {question.correctAnswer ? "T" : "F"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Continuity Summary */}
              <div className={styles.summaryColumn} style={{ borderColor: colors.Continuity }}>
                <h4 style={{ color: colors.Continuity }}>🔗 Continuity</h4>
                <div className={styles.answersContainer}>
                  {GLOBAL_QUIZ_DATA.filter((q) => q.category === "Continuity").map((question, idx) => {
                    const userAnswer = userAnswers[question.id];
                    const isCorrect = userAnswer === question.correctAnswer;
                    return (
                      <div key={question.id} className={`${styles.answerRow} ${isCorrect ? styles.correct : styles.incorrect}`}>
                        <span className={styles.qNum}>Q{idx + 1}</span>
                        <div className={styles.answerComparison}>
                          <span className={styles.userAns}>
                            Your: {userAnswer !== undefined ? (userAnswer ? "T" : "F") : "-"}
                          </span>
                          <span className={styles.correctAns}>
                            Correct: {question.correctAnswer ? "T" : "F"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Differentiability Summary */}
              <div className={styles.summaryColumn} style={{ borderColor: colors.Differentiability }}>
                <h4 style={{ color: colors.Differentiability }}>📈 Differentiability</h4>
                <div className={styles.answersContainer}>
                  {GLOBAL_QUIZ_DATA.filter((q) => q.category === "Differentiability").map((question, idx) => {
                    const userAnswer = userAnswers[question.id];
                    const isCorrect = userAnswer === question.correctAnswer;
                    return (
                      <div key={question.id} className={`${styles.answerRow} ${isCorrect ? styles.correct : styles.incorrect}`}>
                        <span className={styles.qNum}>Q{idx + 1}</span>
                        <div className={styles.answerComparison}>
                          <span className={styles.userAns}>
                            Your: {userAnswer !== undefined ? (userAnswer ? "T" : "F") : "-"}
                          </span>
                          <span className={styles.correctAns}>
                            Correct: {question.correctAnswer ? "T" : "F"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button onClick={handleReset} className={styles.btnPrimary}>
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
