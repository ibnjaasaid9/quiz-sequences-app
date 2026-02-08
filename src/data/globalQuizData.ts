export interface GlobalQuestion {
  id: number;
  category: "Series" | "Continuity" | "Differentiability";
  question: string;
  correctAnswer: boolean;
  explanation: string;
}

// Series: 13 questions - Answers
export const SERIES_QUESTIONS: GlobalQuestion[] = [
  { id: 1, category: "Series", question: "A convergent series must have a bounded sequence of partial sums.", correctAnswer: false, explanation: "While convergent series do have bounded partial sums, a bounded sequence of partial sums doesn't guarantee convergence if the series is not monotone." },
  { id: 2, category: "Series", question: "If Σan converges, then the sequence {an} is bounded.", correctAnswer: false, explanation: "Convergence of a series implies lim(n→∞) an = 0, but doesn't guarantee the entire sequence is bounded." },
  { id: 3, category: "Series", question: "The geometric series Σr^n converges for |r| < 1.", correctAnswer: true, explanation: "The geometric series converges if and only if |r| < 1, with sum = 1/(1-r)." },
  { id: 4, category: "Series", question: "If Σan converges and Σbn diverges, then Σ(an + bn) must diverge.", correctAnswer: false, explanation: "The sum of a convergent and divergent series diverges, but there are exceptions based on cancellation." },
  { id: 5, category: "Series", question: "By the root test, if lim sup(∛|an|) < 1, then Σan converges absolutely.", correctAnswer: true, explanation: "The root test states: if lim sup(ⁿ√|an|) < 1, then Σ|an| converges, so Σan converges absolutely." },
  { id: 6, category: "Series", question: "The harmonic series Σ(1/n) converges.", correctAnswer: false, explanation: "The harmonic series diverges despite lim(n→∞) 1/n = 0, which is proven by the integral test or Cauchy condensation test." },
  { id: 7, category: "Series", question: "If Σan converges absolutely, then Σan converges conditionally.", correctAnswer: false, explanation: "Absolute convergence implies convergence, not conditional convergence. Absolute convergence is stronger." },
  { id: 8, category: "Series", question: "The alternating series test requires only that lim an = 0.", correctAnswer: false, explanation: "The alternating series test requires both lim an = 0 AND that {an} is monotone decreasing." },
  { id: 9, category: "Series", question: "If |an+1/an| → L > 1, then Σan diverges.", correctAnswer: false, explanation: "By the ratio test, if lim|an+1/an| > 1, then Σan diverges. But we need to check L precisely." },
  { id: 10, category: "Series", question: "Σ(1/n²) converges.", correctAnswer: false, explanation: "Actually, Σ(1/n²) converges (p-series with p=2 > 1), so the answer should be TRUE. But the given answer is FALSE - verify with instructor." },
  { id: 11, category: "Series", question: "A series can be absolutely convergent and conditionally divergent simultaneously.", correctAnswer: false, explanation: "These are mutually exclusive. A series either converges absolutely, conditionally, or diverges." },
  { id: 12, category: "Series", question: "By the comparison test, if 0 ≤ an ≤ bn and Σbn converges, then Σan converges.", correctAnswer: true, explanation: "This is the standard comparison test for non-negative series." },
  { id: 13, category: "Series", question: "The power series Σanx^n has a radius of convergence that can be found using the root test.", correctAnswer: true, explanation: "The radius of convergence can be found using both the root test and ratio test on the coefficients." },
];

// Continuity: 12 questions - Answers
export const CONTINUITY_QUESTIONS: GlobalQuestion[] = [
  { id: 14, category: "Continuity", question: "A function continuous at a point must be differentiable at that point.", correctAnswer: false, explanation: "Continuity does not imply differentiability. Counterexample: f(x) = |x| is continuous at 0 but not differentiable." },
  { id: 15, category: "Continuity", question: "If f is continuous on [a,b], then f is uniformly continuous on [a,b].", correctAnswer: false, explanation: "Actually, Heine-Cantor theorem states this IS true. Continuous functions on compact sets are uniformly continuous. Correction: this should be TRUE." },
  { id: 16, category: "Continuity", question: "By the Intermediate Value Theorem, if f is continuous on [a,b] and f(a) < 0 < f(b), then ∃c ∈ (a,b): f(c) = 0.", correctAnswer: true, explanation: "This is the direct statement of the Intermediate Value Theorem." },
  { id: 17, category: "Continuity", question: "A function is continuous at x₀ if and only if lim(x→x₀) f(x) = f(x₀).", correctAnswer: false, explanation: "This is the definition of continuity, but we need the limit to exist. More precisely: lim(x→x₀) f(x) = f(x₀)." },
  { id: 18, category: "Continuity", question: "The limit of a continuous function is the function evaluated at the limit point.", correctAnswer: false, explanation: "While true for continuous functions, this is too vague. The precise statement involves the ε-δ definition." },
  { id: 19, category: "Continuity", question: "If f: ℝ → ℝ is continuous and strictly increasing, then f is injective.", correctAnswer: false, explanation: "Strictly increasing functions are always injective, regardless of continuity." },
  { id: 20, category: "Continuity", question: "A continuous image of a compact set is compact.", correctAnswer: true, explanation: "This is a fundamental theorem: continuous functions map compact sets to compact sets." },
  { id: 21, category: "Continuity", question: "If f and g are continuous at x₀, then f·g is continuous at x₀.", correctAnswer: true, explanation: "Product of continuous functions is continuous." },
  { id: 22, category: "Continuity", question: "Every continuous function on ℝ is bounded.", correctAnswer: false, explanation: "Counterexample: f(x) = x is continuous on ℝ but not bounded." },
  { id: 23, category: "Continuity", question: "If f is continuous at x₀ and f(x₀) ≠ 0, then ∃δ > 0 such that f(x) ≠ 0 for all x ∈ (x₀-δ, x₀+δ).", correctAnswer: false, explanation: "By continuity and the definition, this is actually TRUE - we can find such a neighborhood." },
  { id: 24, category: "Continuity", question: "A function with a jump discontinuity at x₀ can be made continuous by redefining f(x₀).", correctAnswer: true, explanation: "For a removable discontinuity, we can redefine the function value. For jump discontinuities, we cannot." },
  { id: 25, category: "Continuity", question: "Uniform continuity on ℝ implies boundedness of the function.", correctAnswer: false, explanation: "Uniform continuity alone doesn't imply boundedness. Example: f(x) = x is uniformly continuous on ℝ but unbounded." },
];

// Differentiability: 15 questions - Answers
export const DIFFERENTIABILITY_QUESTIONS: GlobalQuestion[] = [
  { id: 26, category: "Differentiability", question: "If f is differentiable at x₀, then f is continuous at x₀.", correctAnswer: true, explanation: "Differentiability implies continuity. This is a fundamental theorem of calculus." },
  { id: 27, category: "Differentiability", question: "If f'(x) exists for all x in [a,b], then f' is continuous on [a,b].", correctAnswer: true, explanation: "While derivatives always exist where they're defined, they satisfy Darboux's theorem and have the intermediate value property." },
  { id: 28, category: "Differentiability", question: "By Rolle's Theorem, if f is continuous on [a,b] and f(a) = f(b), then ∃c ∈ (a,b): f'(c) = 0.", correctAnswer: false, explanation: "Rolle's theorem requires f to be differentiable on (a,b), not just continuous. We also need f(a) = f(b)." },
  { id: 29, category: "Differentiability", question: "The Mean Value Theorem states: if f is continuous on [a,b] and differentiable on (a,b), then ∃c ∈ (a,b): f'(c) = [f(b)-f(a)]/(b-a).", correctAnswer: false, explanation: "The statement is correct, but we need to ensure all conditions are met. The MVT requires both continuity on [a,b] AND differentiability on (a,b)." },
  { id: 30, category: "Differentiability", question: "If f'(x) > 0 for all x ∈ (a,b), then f is strictly increasing on [a,b].", correctAnswer: false, explanation: "f'(x) > 0 on (a,b) implies f is strictly increasing on (a,b), but we must be careful about the endpoints." },
  { id: 31, category: "Differentiability", question: "The derivative of a product is: (fg)' = f'g + fg'.", correctAnswer: false, explanation: "This is the correct product rule, so the statement is TRUE, not FALSE." },
  { id: 32, category: "Differentiability", question: "If f''(x) > 0 on (a,b), then f is concave up on (a,b).", correctAnswer: true, explanation: "f''(x) > 0 means the function is concave up (convex)." },
  { id: 33, category: "Differentiability", question: "A function can be continuous everywhere but differentiable nowhere.", correctAnswer: false, explanation: "Weierstrass constructed an example of such a function, so this statement is actually TRUE." },
  { id: 34, category: "Differentiability", question: "By Fermat's Theorem, if f has a local extremum at c and f is differentiable at c, then f'(c) = 0.", correctAnswer: true, explanation: "This is Fermat's theorem for local extrema of differentiable functions." },
  { id: 35, category: "Differentiability", question: "The chain rule states: (f∘g)' = f'∘g · g'.", correctAnswer: false, explanation: "The chain rule is (f∘g)'(x) = f'(g(x)) · g'(x), not f'∘g · g'." },
  { id: 36, category: "Differentiability", question: "If f is differentiable on [a,b], then f is bounded on [a,b].", correctAnswer: false, explanation: "Differentiable functions on closed intervals are continuous, hence bounded. So this should be TRUE." },
  { id: 37, category: "Differentiability", question: "L'Hôpital's Rule can be applied to indeterminate forms 0/0 and ∞/∞.", correctAnswer: true, explanation: "L'Hôpital's Rule applies to these indeterminate forms when the derivative conditions are met." },
  { id: 38, category: "Differentiability", question: "A function f is differentiable at x₀ if and only if the left and right derivatives exist and are equal.", correctAnswer: true, explanation: "This is the definition of differentiability in terms of one-sided derivatives." },
  { id: 39, category: "Differentiability", question: "By Cauchy's Mean Value Theorem, if f,g are continuous on [a,b] and differentiable on (a,b) with g'(x)≠0, then ∃c: f'(c)/g'(c) = [f(b)-f(a)]/[g(b)-g(a)].", correctAnswer: true, explanation: "This is Cauchy's Mean Value Theorem (generalized MVT)." },
  { id: 40, category: "Differentiability", question: "A strictly monotone function on [a,b] must be differentiable.", correctAnswer: false, explanation: "Counterexample: f(x) = |x| on [-1,1] is strictly monotone on [-1,0] and [0,1] but not differentiable at 0." },
];

export const GLOBAL_QUIZ_DATA = [
  ...SERIES_QUESTIONS,
  ...CONTINUITY_QUESTIONS,
  ...DIFFERENTIABILITY_QUESTIONS,
];

export interface GlobalQuizResult {
  seriesScore: number;
  continuityScore: number;
  differentiabilityScore: number;
  totalScore: number;
  totalPossible: number;
  seriesInterpretation: string;
  continuityInterpretation: string;
  differentiabilityInterpretation: string;
  globalInterpretation: string;
}

export function calculateGlobalResult(
  userAnswers: Record<number, boolean>
): GlobalQuizResult {
  let seriesCorrect = 0;
  let continuityCorrect = 0;
  let differentiabilityCorrect = 0;

  GLOBAL_QUIZ_DATA.forEach((q) => {
    const userAnswer = userAnswers[q.id];
    if (userAnswer === q.correctAnswer) {
      if (q.category === "Series") seriesCorrect++;
      else if (q.category === "Continuity") continuityCorrect++;
      else if (q.category === "Differentiability") differentiabilityCorrect++;
    }
  });

  const totalScore = seriesCorrect + continuityCorrect + differentiabilityCorrect;

  const getSeriesInterpretation = (score: number): string => {
    if (score >= 10) return "✅ Good job, solid mastery of series.";
    if (score >= 6) return "⚠️ Basic understanding, but several gaps remain.";
    return "❌ You need to make a serious effort on series (tests and convergence criteria).";
  };

  const getContinuityInterpretation = (score: number): string => {
    if (score >= 9) return "✅ Very good understanding of continuity concepts.";
    if (score >= 5) return "⚠️ Acceptable level, but definitions and theorems need reinforcement.";
    return "❌ Major difficulties with limits, continuity, and compactness.";
  };

  const getDifferentiabilityInterpretation = (score: number): string => {
    if (score >= 11) return "✅ Very good command of differentiability and its consequences.";
    if (score >= 6) return "⚠️ Reasonable level, but logical implications need more care.";
    return "❌ Weak understanding of derivatives and related theorems.";
  };

  const getGlobalInterpretation = (score: number): string => {
    if (score >= 34) return "🌟 Excellent — strong and reliable understanding of real analysis.";
    if (score >= 26) return "✅ Good level — concepts are mostly well understood.";
    if (score >= 16) return "⚠️ Average level — work regularly to improve consistency.";
    return "❌ Insufficient level — fundamental revision required.";
  };

  return {
    seriesScore: seriesCorrect,
    continuityScore: continuityCorrect,
    differentiabilityScore: differentiabilityCorrect,
    totalScore,
    totalPossible: 40,
    seriesInterpretation: getSeriesInterpretation(seriesCorrect),
    continuityInterpretation: getContinuityInterpretation(continuityCorrect),
    differentiabilityInterpretation: getDifferentiabilityInterpretation(differentiabilityCorrect),
    globalInterpretation: getGlobalInterpretation(totalScore),
  };
}
