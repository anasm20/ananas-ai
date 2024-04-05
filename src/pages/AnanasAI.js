import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';
import '../styles/App.css';

const initialQuestions = [
    {
        id: 1,
        question: "Was ist das Ziel der Lösung?",
        answers: [
          { text: "Datenanalyse", next: 2 },
          { text: "Textgenerierung", next: 3 },
          { text: "Streaming-Data", next: 4 },
          { text: "OpenSource", next: 5 },
          { text: "Hoch skalierbarkeit", next: 6 },
          { text: "Sprachverarbeitung", next: 7 },
          { text: "Datenschutz", next: 8 },
          { text: "Mehrsprachigkeit", next: 10 },
          { text: "Vorhersage", next: 11 },
          { text: "SDK-Unterstützung", next: 13 },
          { text: "Bildverarbeitung", next: 14 },
        ],
    },
    {
      id: 2,
      question: "Bevorzugst du eine benutzerfreundliche Oberfläche oder fortgeschrittene Anpassungsoptionen?",
      answers: [
        { text: "Benutzerfreundlich", product: "PowerBI (Microsoft)" },
        { text: "Fortgeschrittene Anpassung", product: "Tableau (Salesforce)" },
      ],
    },
    {
      id: 3,
      question: "Ist die Integration in bestehende Systeme für dich wichtig?",
      answers: [
        { text: "Ja", product: "Google Cloud Vision API (Google)" },
        { text: "Nein", product: "Clarifai (Clarifai Inc.)" },
      ],
    },
    {
      id: 4,
      question: "Benötigst du Echtzeit-Verarbeitungsfähigkeiten?",
      answers: [
        { text: "Ja", product: "Azure Cognitive Services (Microsoft)" },
        { text: "Nein", product: "IBM Watson (IBM)" },
      ],
    },
    {
      id: 5,
      question: "Möchtest du eine Open-Source-Lösung verwenden?",
      answers: [
        { text: "Ja", product: "TensorFlow (Google)" },
        { text: "Nein", product: "Amazon Rekognition (Amazon Web Services)" },
      ],
    },
    {
      id: 6,
      question: "Sollen die Modelle hoch skalierbar sein?",
      answers: [
        { text: "Ja", product: "Microsoft Azure Machine Learning (Microsoft)" },
        { text: "Nein", product: "OpenAI GPT-3 (OpenAI)" },
      ],
    },
    {
      id: 7,
      question: "Benötigst du natürliche Sprachverarbeitungsfähigkeiten?",
      answers: [
        { text: "Ja", product: "Amazon Comprehend (Amazon Web Services)" },
        { text: "Nein", product: "NLTK (Natural Language Toolkit)" },
      ],
    },
    {
      id: 8,
      question: "Ist die Einhaltung von Datenschutzrichtlinien für dich wichtig?",
      answers: [
        { text: "Ja", next: 9 },
        { text: "Nein", product: "Google Cloud Platform (Google)" },
      ],
    },
    {
      id: 9,
      question: "Arbeitest du in einem regulierten Sektor, wie z.B. Finanzwesen oder Gesundheitswesen?",
      answers: [
        { text: "Ja", product: "Microsoft Azure (Microsoft)" },
        { text: "Nein", product: "Google Cloud Platform (Google)" },
      ],
    },
    {
      id: 10,
      question: "Benötigst du Unterstützung für mehrere Sprachen in deinen Projekten?",
      answers: [
        { text: "Ja", product: "IBM Watson Language Translator (IBM)" },
        { text: "Nein", product: "Google Cloud Translation (Google)" },
      ],
    },
    {
      id: 11,
      question: "Ist es wichtig für dich, Vorhersagemodelle zu erstellen?",
      answers: [
        { text: "Ja", next: 12 },
        { text: "Nein", product: "RapidMiner" },
      ],
    },
    {
      id: 12,
      question: "Möchtest du Vorhersagemodelle für Zeitreihendaten oder für klassische Datensätze nutzen?",
      answers: [
        { text: "Zeitreihendaten", product: "Facebook Prophet (Facebook)" },
        { text: "Klassische Datensätze", product: "Scikit-learn (Open Source)" },
      ],
    },
    {
      id: 13,
      question: "Soll deine Lösung einfach zu integrieren sein und eine breite Palette von SDKs unterstützen?",
      answers: [
        { text: "Ja", product: "AWS SDK (Amazon Web Services)" },
        { text: "Nein", product: "Microsoft Azure SDK (Microsoft)" },
      ],
    },
    {
      id: 14,
      question: "Brauchst du Unterstützung bei der Bildverarbeitung und Analyse?",
      answers: [
        { text: "Ja", next: 15 },
        { text: "Nein", product: "IBM Watson Visual Recognition (IBM)" },
      ],
    },
    {
      id: 15,
      question: "Ist die Erkennung spezifischer Objekte oder eher die allgemeine Bildanalyse für dich relevant?",
      answers: [
        { text: "Spezifische Objekte", product: "YOLO (You Only Look Once) (Open Source)" },
        { text: "Allgemeine Bildanalyse", product: "OpenCV (Open Source)" },
      ],
    },
];


  
  const AnanasAI = () => {
    const [currentQuestion, setCurrentQuestion] = useState(initialQuestions[0]);
    const [chatHistory, setChatHistory] = useState([]);
    const [productRecommendation, setProductRecommendation] = useState('');
    const [noAnswerCount, setNoAnswerCount] = useState(0);
  
    const handleAnswer = (answer) => {
      const newChatHistory = [...chatHistory, { question: currentQuestion.question, answer: answer.text, user: 'user' }];
      setChatHistory(newChatHistory);
  
      if (answer.next) {
        const nextQuestion = initialQuestions.find(question => question.id === answer.next);
        setCurrentQuestion(nextQuestion);
      } else if (answer.product) {
        setProductRecommendation(answer.product);
        setCurrentQuestion(null);
      }
  
      if (answer.text.toLowerCase() === 'nein') {
        setNoAnswerCount(noAnswerCount + 1);
  
        if (noAnswerCount + 1 >= 3) {
          setCurrentQuestion(null);
          setProductRecommendation('Beratungstermin vorschlagen');
        }
      } else {
        setNoAnswerCount(0);
      }
    };
  
    const handleRestart = () => {
      setChatHistory([]);
      setProductRecommendation('');
      setCurrentQuestion(initialQuestions[0]);
      setNoAnswerCount(0);
    };
  
    return (
      <div className="ananasAI-container">
        <h2>AnanasAI - Finde der passende KI-Produkt</h2>
        <div className="chat-history">
          {chatHistory.map((entry, index) => (
            <div key={index} className={`chat-entry ${entry.user}`}>
              <div className="icon">{entry.user === 'user' ? <FaRobot /> : <FaRobot />}</div> {/* FaRobot statt FaRobot */}
              <div className="text">
                <div className="question">{entry.question}</div>
                <div className="answer">
                  {entry.user === 'user' && <span className="user-indicator">Du: </span>}
                  {entry.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        {currentQuestion ? (
          <div className="current-question">
            <h3>{currentQuestion.question}</h3>
            {currentQuestion.answers.map((answer, index) => (
              <button key={index} onClick={() => handleAnswer(answer)}>
                {answer.text}
              </button>
            ))}
          </div>
        ) : (
          productRecommendation && (
            <div className="recommendation">
              <div className="recommendation-text">Wir empfehlen: <strong>{productRecommendation}</strong></div>
              {productRecommendation === 'Beratungstermin vorschlagen' ? (
                <a href="/kontakt" className="contact-link">Vereinbare einen Beratungstermin</a>
              ) : (
                <button className="restart-button" onClick={handleRestart}><MdRefresh /> Neustart</button>
              )}
            </div>
          )
        )}
      </div>
    );
  };
  
  export default AnanasAI;