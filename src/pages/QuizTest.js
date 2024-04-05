import React, { useState, useEffect } from 'react';
import { Button, Card, ProgressBar, Accordion, Form, Alert } from 'react-bootstrap';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';
import { saveData, loadData } from '../components/localStorageService'; 
import '../styles/Quiz.css';

function QuizTest() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizEnd, setQuizEnd] = useState(false); // ending the Quiz
  const [showResults, setShowResults] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [userName, setUserName] = useState('');
  const [quizStarted, setQuizStarted] = useState(false); 
  const [bestScore, setBestScore] = useState(0); 

  // to save the record and display it at the end
  useEffect(() => {
    const storedBestScore = loadData(`bestScore_${userName}`);
    if (storedBestScore) setBestScore(parseFloat(storedBestScore));
  }, [userName]);

  const questions = [
    {
      text: "Was beschreibt künstliche Intelligenz (KI)?",
      options: [
        { id: 0, text: "Die Erzeugung künstlerischer Inhalte durch Maschinen." },
        { id: 1, text: "Ein Bereich der Informatik, der Maschinen die Fähigkeit gibt, intelligentes Verhalten zu zeigen.", correct: true },
        { id: 2, text: "Ein fortgeschrittener Taschenrechner." },
      ],
    },
    {
      text: "Was ist Cloud Computing?",
      options: [
        { id: 0, text: "Das Speichern von Daten auf lokalen Servern." },
        { id: 1, text: "Das Teilen von Rechenleistung über soziale Netzwerke." },
        { id: 2, text: "Die Bereitstellung von IT-Infrastruktur über das Internet.", correct: true }, // add correct to choose the correct answers
      ],
    },
    {
      text: "Wie funktioniert maschinelles Lernen?",
      options: [
        { id: 0, text: "Durch manuelle Programmierung spezifischer Befehle für jede Aufgabe." },
        { id: 1, text: "Es ermöglicht Computern, aus Daten zu lernen, ohne explizit programmiert zu werden.", correct: true },
        { id: 2, text: "Durch Zufallsgeneratoren, die Entscheidungen treffen." },
      ],
    },
    {
      text: "Was ist ein neuronales Netzwerk?",
      options: [
        { id: 0, text: "Ein soziales Netzwerk für KI-Forscher." },
        { id: 1, text: "Ein Teil des menschlichen Gehirns." },
        { id: 2, text: "Ein computergestütztes Modell, inspiriert von menschlichen Gehirnen.", correct: true },
      ],
    },
    {
      text: "Was sind die Vorteile von Cloud-Speicher?",
      options: [
        { id: 0, text: "Unbegrenzter physischer Speicherplatz." },
        { id: 1, text: "Skalierbarkeit, Flexibilität und Kosteneffizienz.", correct: true },
        { id: 2, text: "Automatische Datenlöschung für Datenschutz." },
      ],
    },
    {
      text: "Was sind Cloud-Services?",
      options: [
        { id: 0, text: "Wettervorhersagedienste im Internet." },
        { id: 1, text: "Lufttransportdienste für IT-Ausrüstung." },
        { id: 2, text: "Über das Internet bereitgestellte Dienste, wie Software- und Plattformdienste.", correct: true },
      ],
    },
    {
      text: "In welchen Bereichen wird KI typischerweise angewendet?",
      options: [
        { id: 0, text: "Nur in der Robotik." },
        { id: 1, text: "Nur in Computerspielen." },
        { id: 2, text: "In Bereichen wie Spracherkennung, Bildanalyse und automatisierten Empfehlungssystemen.", correct: true },
      ],
    },
    {
      text: "Warum ist Cloud-Computing wichtig für KI-Lösungen?",
      options: [
        { id: 0, text: "Es ermöglicht die manuelle Steuerung von KI." },
        { id: 1, text: "Es bietet skalierbaren, flexiblen Zugang zu Rechenressourcen.", correct: true },
        { id: 2, text: "Es reduziert die Intelligenz von KI-Systemen." },
      ],
    },
    {
      text: "Wie wird KI in der Automobilindustrie angewendet?",
      options: [
        { id: 0, text: "Zur Verbesserung des Radioempfangs." },
        { id: 1, text: "Zur Entwicklung autonomer Fahrzeuge.", correct: true },
        { id: 2, text: "Nur für Farbwahl der Fahrzeuge." },
      ],
    },
    {
      text: "Warum sind ethische Überlegungen und Datenschutz wichtig im Kontext von KI und Cloud-Computing?",
      options: [
        { id: 0, text: "Sie sorgen für bessere Werbung." },
        { id: 1, text: "Sie sind nur für Entwickler von Bedeutung." },
        { id: 2, text: "Sie adressieren die Fairness, Transparenz und den Schutz persönlicher Daten.", correct: true },
      ],
    },
  ];

// chack the abswers 
  const handleAnswer = (optionId) => {
    setUserAnswers({ ...userAnswers, [currentQuestionIndex]: optionId });
    setShowWarning(false);
  };

  // to start the Quiz
  const startQuiz = () => {
    if (userName.trim() === '') {
      setShowWarning(true);
      return;
    }
    setQuizStarted(true);
  };

  const goToNextQuestion = () => {
    if (userAnswers[currentQuestionIndex] === undefined) {
      setShowWarning(true);
      return;
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setQuizEnd(true);
    const score = calculateScore();
    const storedBestScore = loadData(`bestScore_${userName}`);
    if (!storedBestScore || score > parseFloat(storedBestScore)) {
      setBestScore(score);
      saveData(`bestScore_${userName}`, score.toString());
    }
  };

  const restartQuiz = () => {
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setQuizEnd(false);
    setShowResults(false);
    setShowWarning(false);
  };

  const calculateScore = () => {
    let score = 0;
    Object.entries(userAnswers).forEach(([questionIndex, selectedOptionId]) => {
      const question = questions[questionIndex];
      const selectedOption = question.options.find(option => option.id === selectedOptionId);
      if (selectedOption && selectedOption.correct) {
        score++;
      }
    });
    return (score / questions.length) * 100;
  };

  // to go back to the last Question
  const goToPreviousQuestion = () => {
    const previousQuestionIndex = currentQuestionIndex - 1;
    if (previousQuestionIndex >= 0) {
      setCurrentQuestionIndex(previousQuestionIndex);
    }
  };

  return (
    <Card style={{ maxWidth: '900px', margin: 'auto', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card.Body> 
      {/* here is the code for the Quiz component */}
        <h2 className="text-center mb-4 bg-light p-2">Teste dein Wissen mit den Quizfragen</h2>
        {!quizStarted ? (
          <div style={{ textAlign: 'center' }}>
            <Form.Group>
              <Form.Label>Bitte gib deinen Namen ein:</Form.Label>
              <Form.Control
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            {showWarning && <Alert variant="danger">Bitte gib deinen Namen ein.</Alert>}
            <br></br>
            <Button variant="primary" onClick={startQuiz}>Start Quiz</Button>
          </div>
        ) : !quizEnd ? (
          <>
            <ProgressBar now={(currentQuestionIndex / questions.length) * 100} />
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <p>Hallo, {userName}!</p>
              <p>Frage {currentQuestionIndex + 1} von {questions.length}</p>
              <Card.Title>{questions[currentQuestionIndex].text}</Card.Title>
            </div>
            <Form>
              {questions[currentQuestionIndex].options.map((option) => (
                <Form.Check
                  key={option.id}
                  type="radio" 
                  id={`option-${option.id}`}
                  label={option.text}
                  name="options"
                  checked={userAnswers[currentQuestionIndex] === option.id}
                  onChange={() => handleAnswer(option.id)}
                />
              ))}
            </Form>
            {showWarning && <Alert variant="danger">Bitte wähle eine Antwort aus.</Alert>}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <Button onClick={goToNextQuestion}>Nächste Frage</Button>
            </div>
          </>
        ) : (
          <>
            <Card.Title style={{ textAlign: 'center' }}>Super "{userName}" deine Quiz-Test ist Fertig!</Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>Dein Score ist: {calculateScore().toFixed(2)}%</Card.Text>
            <Card.Text style={{ textAlign: 'center' }}>Dein Rekord ist: {bestScore.toFixed(2)}%</Card.Text>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <Button onClick={restartQuiz}>Neustart</Button>
              <Button onClick={() => setShowResults(!showResults)}>Ergebnisse</Button>
            </div>
            {showResults && (
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Quiz Antworten</Accordion.Header>
                  <Accordion.Body>
                    {questions.map((question, index) => {
                      const selectedOptionId = userAnswers[index];
                      const selectedOption = question.options.find(option => option.id === selectedOptionId);
                      return (
                        <div key={index}>
                          <p>
                            Frage {index + 1}: {question.text} -
                            Deine Antwort: {selectedOption ? selectedOption.text : 'Keine Antwort ausgewählt'} -
                            {selectedOption && selectedOption.correct ? <BsCheckCircle color="green" /> : <BsXCircle color="red" />}
                          </p>
                        </div>
                      );
                    })}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            )}
          </>
        )}
        {/* Last Question Button */}
        {quizStarted && !quizEnd && currentQuestionIndex > 0 && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button onClick={goToPreviousQuestion}>Letzte Frage</Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );  
}

export default QuizTest;
