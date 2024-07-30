import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import "./App.css";
import MainPage from './MainPage';

function Quiz() {
  const questionsData = [
    {
      questiontext: "日",
      answeroptions: [
        { answertext: "yıl", iscorrect: false },
        { answertext: "gün", iscorrect: true },
        { answertext: "saat", iscorrect: false },
        { answertext: "araba", iscorrect: false },
      ],
    },
    {
      questiontext: "時",
      answeroptions: [
        { answertext: "insan", iscorrect: false },
        { answertext: "araba", iscorrect: false },
        { answertext: "görmek", iscorrect: false },
        { answertext: "saat", iscorrect: true },
      ],
    },
    {
      questiontext: "後",
      answeroptions: [
        { answertext: "arka/sonra", iscorrect: true },
        { answertext: "ön/önce", iscorrect: false },
        { answertext: "gitmek", iscorrect: false },
        { answertext: "altın", iscorrect: false },
      ],
    },
    {
      questiontext: "高",
      answeroptions: [
        { answertext: "görmek", iscorrect: false },
        { answertext: "küçük", iscorrect: false },
        { answertext: "arka/sonra", iscorrect: false },
        { answertext: "yüksek/pahalı", iscorrect: true },
      ],
    },
    {
      questiontext: "私",
      answeroptions: [
        { answertext: "buluşmak", iscorrect: false },
        { answertext: "sen", iscorrect: false },
        { answertext: "ben", iscorrect: true },
        { answertext: "yemek", iscorrect: false },
      ],
    },
    {
      questiontext: "読む",
      answeroptions: [
        { answertext: "okumak", iscorrect: true },
        { answertext: "yazmak", iscorrect: false },
        { answertext: "konuşmak", iscorrect: false },
        { answertext: "gitmek", iscorrect: false },
      ],
    },
    {
      questiontext: "夜",
      answeroptions: [
        { answertext: "gece", iscorrect: false },
        { answertext: "öğlen", iscorrect: false },
        { answertext: "sabah", iscorrect: false },
        { answertext: "akşam", iscorrect: true },
      ],
    },
    {
      questiontext: "会う",
      answeroptions: [
        { answertext: "sevmek", iscorrect: false },
        { answertext: "konuşmak", iscorrect: false },
        { answertext: "buluşmak", iscorrect: true },
        { answertext: "yüksek/pahalı", iscorrect: false },
      ],
    },
    {
      questiontext: "朝",
      answeroptions: [
        { answertext: "sabah", iscorrect: true },
        { answertext: "küçük", iscorrect: false },
        { answertext: "arka/sonra", iscorrect: false },
        { answertext: "yüksek/pahalı", iscorrect: false },
      ],
    },
    {
      questiontext: "雨",
      answeroptions: [
        { answertext: "sabah", iscorrect: false },
        { answertext: "dolu", iscorrect: false },
        { answertext: "güneş", iscorrect: false },
        { answertext: "yağmur", iscorrect: true },
      ],
    },
    {
      questiontext: "小",
      answeroptions: [
        { answertext: "sabah", iscorrect: false },
        { answertext: "büyük", iscorrect: false },
        { answertext: "küçük", iscorrect: true },
        { answertext: "gelmek", iscorrect: false },
      ],
    },
    {
      questiontext: "百",
      answeroptions: [
        { answertext: "araba", iscorrect: false },
        { answertext: "beyaz", iscorrect: false },
        { answertext: "görmek", iscorrect: false },
        { answertext: "yüz", iscorrect: true },
      ],
    },
    {
      questiontext: "千",
      answeroptions: [
        { answertext: "bin", iscorrect: true },
        { answertext: "sene", iscorrect: false },
        { answertext: "öğlen", iscorrect: false },
        { answertext: "altın", iscorrect: false },
      ],
    },
    {
      questiontext: "水",
      answeroptions: [
        { answertext: "zaman", iscorrect: false },
        { answertext: "dinlenmek", iscorrect: false },
        { answertext: "su", iscorrect: true },
        { answertext: "yüksek/pahalı", iscorrect: false },
      ],
    },
    {
      questiontext: "男",
      answeroptions: [
        { answertext: "ne", iscorrect: false },
        { answertext: "erkek", iscorrect: true },
        { answertext: "ben", iscorrect: false },
        { answertext: "arka", iscorrect: false },
      ],
    },
    {
      questiontext: "食",
      answeroptions: [
        { answertext: "yemek", iscorrect: true },
        { answertext: "yazmak", iscorrect: false },
        { answertext: "konuşmak", iscorrect: false },
        { answertext: "gitmek", iscorrect: false },
      ],
    },
    {
      questiontext: "何",
      answeroptions: [
        { answertext: "nasıl", iscorrect: false },
        { answertext: "ne zaman", iscorrect: false },
        { answertext: "ne", iscorrect: true},
        { answertext: "kim", iscorrect: false },
      ],
    },
    {
      questiontext: "友",
      answeroptions: [
        { answertext: "arkadaş", iscorrect: true },
        { answertext: "konuşmak", iscorrect: false },
        { answertext: "buluşmak", iscorrect: false },
        { answertext: "okumak", iscorrect: false },
      ],
    },
    {
      questiontext: "休",
      answeroptions: [
        { answertext: "okumak", iscorrect: false },
        { answertext: "küçük", iscorrect: false },
        { answertext: "dinlenmek", iscorrect: true },
        { answertext: "yüksek/pahalı", iscorrect: false },
      ],
    },
    {
      questiontext: "来",
      answeroptions: [
        { answertext: "yürümek", iscorrect: false },
        { answertext: "koşmak", iscorrect: false },
        { answertext: "gitmek", iscorrect: false },
        { answertext: "gelmek", iscorrect: true },
      ],
    },
  ];

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const shuffledQuestions = questionsData.sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
  }, []);

  useEffect(() => {
    if (showScore) {
      const timer = setTimeout(() => {
        navigate('/mainpage');
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showScore, navigate]);

  const handleAnswerOptionClick = (iscorrect, answerText) => {
    setSelectedAnswer(answerText);
    setShowAnswer(true);

    if (iscorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setShowAnswer(false);
      setSelectedAnswer(null);

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const handleRetry = () => {
    const shuffledQuestions = questionsData.sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="scoresection">
          <div>
            {questions.length} tane sorudan {score} tanesine doğru yanıt verdiniz!
            <p>Ana sayfaya yönlendiriliyorsunuz...</p>
          </div>
        </div>
      ) : (
        <>
          <div className="questionsection">
            <div className="questioncount">
              <span>Soru {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="questiontext">
              {questions[currentQuestion]?.questiontext}
            </div>
          </div>
          <div className="answersection">
            {questions[currentQuestion]?.answeroptions.map((answeroptions, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answeroptions.iscorrect, answeroptions.answertext)}
                className={
                  showAnswer
                    ? answeroptions.iscorrect
                      ? "correct"
                      : selectedAnswer === answeroptions.answertext
                      ? "incorrect"
                      : ""
                    : ""
                }
              >
                {answeroptions.answertext}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </Router>
  );
}