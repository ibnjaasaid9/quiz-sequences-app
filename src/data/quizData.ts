export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: string;
  explanation: string;
}

export const QUIZ_DATA: Question[] = [
  {
    id: 1,
    question: "What can we say about the sequence Vn = Sigma(k=n+1 to 3n) 1/k?",
    choices: ["Vn < 2/3", "Vn >= 2/3", "Vn = 2/3", "Vn is undefined"],
    correctAnswer: "B",
    explanation: "Vn = Sigma(k=n+1 to 3n) 1/k >= Sigma(k=n+1 to 3n) 1/(3n) = 2n/3n = 2/3"
  },
  {
    id: 2,
    question: "Is the sequence Hn (harmonic series partial sums) a Cauchy sequence?",
    choices: ["Yes, it is Cauchy", "Hn is constant", "Hn is bounded", "Hn is not Cauchy"],
    correctAnswer: "D",
    explanation: "Harmonic series diverges, so partial sums are not Cauchy"
  },
  {
    id: 3,
    question: "If un -> L, what does the Cesaro mean 1/n Sigma(k=1 to n) uk converge to?",
    choices: ["0", "Infinity", "L", "L/n"],
    correctAnswer: "D",
    explanation: "Cesaro mean theorem: if un -> L, then (1/n)Sigma(k=1 to n) uk -> L"
  },
  {
    id: 4,
    question: "If 1/n Sigma(k=1 to n) uk -> L and uk in {0,1} for all k, what is L?",
    choices: ["L = 1", "L = 0", "L can be any value in [0,1]", "L = 1/2"],
    correctAnswer: "B",
    explanation: "By Cesaro, L2 = L => L(L-1) = 0. Since L < 1, L = 0"
  },
  {
    id: 5,
    question: "For 0 < x < 1, what is lim(n->infinity) nx^n?",
    choices: ["Infinity", "1", "0", "x"],
    correctAnswer: "B",
    explanation: "For 0 < x < 1, exponential decay dominates linear growth, so lim(n->infinity) nx^n = 0"
  },
  {
    id: 6,
    question: "If (an) is an integer sequence converging to L in R, what can we say?",
    choices: ["Eventually constant", "Oscillates", "Diverges", "L must be irrational"],
    correctAnswer: "A",
    explanation: "Integer sequence converging to L must have an = L for large n, and L in Z"
  },
  {
    id: 7,
    question: "For an = (-1)^n, what is lim sup an?",
    choices: ["0", "1", "-1", "Does not exist"],
    correctAnswer: "B",
    explanation: "an = (-1)^n oscillates: sup{k>=n} ak = 1 for all n, so lim sup = 1"
  },
  {
    id: 8,
    question: "For an = n, what is lim sup an?",
    choices: ["0", "1", "+infinity", "n"],
    correctAnswer: "C",
    explanation: "an = n -> +infinity, so lim sup = +infinity"
  },
  {
    id: 9,
    question: "If (an) is monotone increasing and bounded above, then (an) is:",
    choices: ["Divergent", "Convergent", "Unbounded", "Oscillating"],
    correctAnswer: "B",
    explanation: "Monotone Convergence Theorem: increasing sequence bounded above converges"
  },
  {
    id: 10,
    question: "According to the Bolzano-Weierstrass theorem, a bounded sequence has:",
    choices: ["No limit", "A unique limit", "A convergent subsequence", "Only finitely many terms"],
    correctAnswer: "D",
    explanation: "Bolzano-Weierstrass theorem: every bounded sequence has a convergent subsequence"
  }
];

export const ANSWER_KEY: Record<number, string> = {
  1: "B",
  2: "D",
  3: "D",
  4: "B",
  5: "B",
  6: "A",
  7: "B",
  8: "C",
  9: "B",
  10: "D"
};

export interface QuizResult {
  score: number;
  maxScore: number;
  percentage: number;
  interpretation: string;
  answers: Array<{
    questionId: number;
    question: string;
    userAnswer: string | null;
    correctAnswer: string;
    isCorrect: boolean;
    explanation: string;
  }>;
}

export function calculateQuizResult(userAnswers: Record<number, string>): QuizResult {
  let correctCount = 0;
  const answers = QUIZ_DATA.map((q) => {
    const userAnswer = userAnswers[q.id] || null;
    const correctAnswer = ANSWER_KEY[q.id];
    const isCorrect = userAnswer?.toUpperCase() === correctAnswer.toUpperCase();
    
    if (isCorrect) correctCount++;

    return {
      questionId: q.id,
      question: q.question,
      userAnswer: userAnswer?.toUpperCase() || null,
      correctAnswer,
      isCorrect,
      explanation: q.explanation
    };
  });

  const percentage = (correctCount / QUIZ_DATA.length) * 100;
  const score = (correctCount / QUIZ_DATA.length) * 20;

  let interpretation = "";
  if (correctCount === 10) {
    interpretation = " Perfect Score - Excellent understanding";
  } else if (correctCount >= 9) {
    interpretation = " 9-10 correct - Excellent understanding";
  } else if (correctCount >= 7) {
    interpretation = " 7-8 correct - Good understanding";
  } else if (correctCount >= 5) {
    interpretation = " 5-6 correct - Average understanding";
  } else {
    interpretation = " 0-4 correct - Needs review of sequence concepts";
  }

  return {
    score: Math.round(score * 10) / 10,
    maxScore: 20,
    percentage: Math.round(percentage * 10) / 10,
    interpretation,
    answers
  };
}
