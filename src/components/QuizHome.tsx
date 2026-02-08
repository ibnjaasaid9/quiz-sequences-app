"use client";

import { useState } from "react";
import Image from "next/image";
import QuizForm from "./QuizForm";
import GlobalQuizForm from "./GlobalQuizForm";
import styles from "./QuizHome.module.css";

type ViewType = "home" | "sequences" | "global";

export default function QuizHome() {
  const [currentView, setCurrentView] = useState<ViewType>("home");

  const handleDownloadPDF = (filename: string) => {
    const link = document.createElement("a");
    link.href = `/${encodeURIComponent(filename)}.pdf`;
    link.download = `${filename}.pdf`;
    link.click();
  };

  return (
    <div className={styles.container}>
      {currentView === "home" && (
        <>
          <header className={styles.mainHeader}>
            <div className={styles.headerWrapper}>
              <div className={styles.imageLeft}>
                <Image 
                  src="/P1.png" 
                  alt="Left decoration"
                  width={220}
                  height={220}
                  priority
                />
              </div>
              <div className={styles.headerContent}>
                <h1 className={styles.mainTitle}>📐 Quiz Real Analysis</h1>
                <p className={styles.subtitle}>Prof. IBNJAA Said</p>
                <p className={styles.tagline}>Groups M6 - M11</p>
              </div>
              <div className={styles.imageRight}>
                <Image 
                  src="/P2.png" 
                  alt="Right decoration"
                  width={220}
                  height={220}
                  priority
                />
              </div>
            </div>
          </header>

          <div className={styles.quizGrid}>
            {/* Quiz Sequences Card */}
            <div className={styles.quizCard}>
              <div className={styles.cardHeader} style={{ borderColor: "#3498DB" }}>
                <h2 className={styles.cardTitle}>📊 Quiz Sequences</h2>
              </div>
              <p className={styles.cardDescription}>
                Test your understanding of sequence concepts, limits, and convergence.
              </p>
              <div className={styles.cardStats}>
                <span className={styles.stat}>10 Questions</span>
                <span className={styles.stat}>Multiple Choice</span>
              </div>
              <div className={styles.buttonGroup}>
                <button
                  className={styles.btnPrimary}
                  onClick={() => setCurrentView("sequences")}
                >
                  ▶ Take Quiz
                </button>
                <button
                  className={styles.btnSecondary}
                  onClick={() => handleDownloadPDF("Quiz Sequences")}
                >
                  ⬇ Download PDF
                </button>
              </div>
            </div>

            {/* Quiz Global Card */}
            <div className={styles.quizCard}>
              <div className={styles.cardHeader} style={{ borderColor: "#E74C3C" }}>
                <h2 className={styles.cardTitle}>🎯 Quiz Global</h2>
              </div>
              <p className={styles.cardDescription}>
                Comprehensive assessment covering Series, Continuity, and Differentiability.
              </p>
              <div className={styles.cardStats}>
                <span className={styles.stat}>40 Questions</span>
                <span className={styles.stat}>True/False</span>
              </div>
              <div className={styles.buttonGroup}>
                <button
                  className={styles.btnPrimary}
                  onClick={() => setCurrentView("global")}
                >
                  ▶ Take Quiz
                </button>
                <button
                  className={styles.btnSecondary}
                  onClick={() => handleDownloadPDF("Quiz Global")}
                >
                  ⬇ Download PDF
                </button>
              </div>
            </div>
          </div>

          <footer className={styles.footer}>
            <p>© 2026 Prof. IBNJAA Said - Real Analysis Assessment Platform</p>
          </footer>
        </>
      )}

      {currentView === "sequences" && (
        <div className={styles.quizWrapper}>
          <button
            className={styles.backButton}
            onClick={() => setCurrentView("home")}
          >
            ← Back to Home
          </button>
          <QuizForm />
        </div>
      )}

      {currentView === "global" && (
        <div className={styles.quizWrapper}>
          <button
            className={styles.backButton}
            onClick={() => setCurrentView("home")}
          >
            ← Back to Home
          </button>
          <GlobalQuizForm />
        </div>
      )}
    </div>
  );
}
