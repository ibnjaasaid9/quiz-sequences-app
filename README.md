# Mentoring Math - Quiz Correction Tool

##  Project Overview

An innovative, fast, and user-friendly quiz correction tool for mathematics sequences. This web application allows students to enter their answers to a 10-question multiple-choice quiz and instantly receive detailed feedback with their score on a scale of 20.

**Technologies:** Next.js  React  TypeScript  Tailwind CSS

---

##  Features

###  Interactive Quiz Interface
- Clean, intuitive form to enter answers (A, B, C, or D)
- Real-time progress tracking
- Responsive design for both desktop and mobile devices
- Form validation to ensure all questions are answered

###  Instant Results & Analysis
- Score calculation on a scale of /20
- Percentage-based performance display
- Circular progress indicator with dynamic color coding
- Detailed results table showing:
  - Question number
  - Your answer vs. correct answer
  - Explanation for each question
  - Visual indicators (/) for correct/incorrect answers

###  Performance Interpretation
- **9-10 correct:**  Excellent understanding
- **7-8 correct:**  Good understanding
- **5-6 correct:**  Average understanding
- **0-4 correct:**  Needs review of sequence concepts

###  Additional Features
- Print results for study notes
- Retake quiz button to reset and try again
- Professional, gradient-based UI design
- Fully responsive layout (mobile-first approach)
- Smooth animations and transitions

---

##  Quiz Content

**Subject:** Mathematical Sequences
**Instructor:** Prof. Said Ibn Jaa
**Number of Questions:** 10
**Question Format:** Multiple choice (A, B, C, D)

### Topics Covered:
- Series convergence and bounds
- Cauchy sequences
- Cesàro mean theorems
- Limit behavior of sequences
- Monotone convergence
- Bolzano-Weierstrass theorem
- Limit superior and inferior
- Integer sequence properties

---

##  Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/quiz-sequences-app.git
   cd quiz-sequences-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000`

---

##  Project Structure

```
quiz-sequences-app/
 app/
    layout.tsx          # Root layout with metadata
    page.tsx            # Home page
    globals.css         # Global styles
 src/
    components/
       QuizForm.tsx    # Main quiz form component
       ResultsDisplay.tsx  # Results display component
    data/
        quizData.ts     # Quiz questions and scoring logic
 package.json            # Dependencies
 README.md              # This file
```

---

##  Component Details

### `QuizForm.tsx`
- Manages quiz state (user answers, submission)
- Renders interactive form with radio buttons
- Progress tracking
- Form submission and validation

### `ResultsDisplay.tsx`
- Displays score with animated circular indicator
- Shows performance interpretation
- Renders detailed results table
- Print and retake functionality

### `quizData.ts`
- Quiz questions and answer options
- Correct answer key
- Scoring logic
- Performance interpretation

---

##  Build & Deploy

### Development Build
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

```bash
# Or use Vercel CLI
npm install -g vercel
vercel
```

---

##  Design Features

- **Gradient backgrounds:** Blue  Indigo  Purple theme
- **Color-coded scores:**
  - Perfect (100%): Gold/Yellow
  - Excellent (70%+): Green
  - Good (50%+): Blue
  - Below average (<50%): Red
- **Responsive layout:** Adapts seamlessly from mobile to desktop
- **Smooth transitions:** Animations and hover effects
- **Accessible design:** Clear typography and contrast ratios

---

##  Browser Support

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

##  Technologies Used

- **Framework:** Next.js 16+
- **UI Library:** React 19+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Runtime:** Node.js

---

##  License

This project is licensed under the MIT License - see the LICENSE file for details.

---

##  Attribution

- **Course:** Mathematical Sequences
- **Instructor:** Prof. Said Ibn Jaa
- **Created:** February 2026

---

##  Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

---

##  Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**Happy studying! **
