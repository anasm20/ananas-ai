import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/Card';
import infoImage from '../img/a1.png';
import flippImage from '../img/a3.png';
import quizImage from '../img/a4.png';
import chatAI from '../img/ChatAI.png';
import '../styles/App.css';


const HomePage = () => {
  const [showAnswerOne, setShowAnswerOne] = useState(false);
  const [showAnswerTwo, setShowAnswerTwo] = useState(false); // show the answer to the second question when the button is clicked
  const [showAnswerThree, setShowAnswerThree] = useState(false);
  const [showAnswerFour, setShowAnswerFour] = useState(false);

  return (
    <div className="container mt-1">
      <div className="row align-items-center my-4 bg-primary p-2">
        <div className="col-md-3">
          <a href="/ananasAI"> {/*  link to AnanasAI */}
            <img 
              src={chatAI} 
              alt="Chat AI" 
              className="img-fluid" 
              style={{ maxWidth: '110px' }}
            />
          </a>
        </div>
        <div className="col-md-9">
          <h2>Willkommen in AnanasAI</h2>
          <p>Brauchst du Hilfe beim Finden des passenden AI-Produkts für dich? Starte jetzt den AnanasAI.</p>
        </div>
      </div>
      <br></br>
      <h2 className="text-center mb-4 bg-light p-2">Abschnitte der Webseite</h2>
      <div className="row">
        <Card 
          title="Information" 
          text="Hier kannst du die Grundlagen der künstlichen Intelligenz und des Cloud Computings erkunden und dein Wissen vertiefen. Tauche ein in eine Welt voller faszinierender Konzepte und Technologien!" 
          buttonText="JETZT STARTEN" 
          link="/information" 
          image={infoImage} 
        />
        <Card 
          title="Flipp-Card" 
          text="Trainiere dein Gehirn und verbessere deine kognitive Flexibilität mit unseren Flipp-Card-Rätseln. Fordere dich selbst heraus und werde zum Meister des Denksports!" 
          buttonText="JETZT STARTEN" 
          link="/flipp-card" 
          image={flippImage} 
        />
        <Card 
          title="Quiz" 
          text="Teste dein Wissen und deine Fähigkeiten in unseren unterhaltsamen und lehrreichen Quizzen. Finde heraus, wie gut du dich in den Themen künstliche Intelligenz und Cloud Computing auskennst!" 
          buttonText="JETZT STARTEN" 
          link="/quiz-test" 
          image={quizImage} 
        />
      </div>
      <h2 className="text-center my-4 bg-light p-2">Job Chancen für AI und Cloud</h2>
      <div className="row">
        <div className="col-md-6  bg-light p-4">
          <div className="embed-responsive embed-responsive-16by9">
          {/* !! did not use this youtube video !! */}
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/MvlyAOuWDmE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bg-light p-4">
            <h3>Was ist künstliche Intelligenz (AI) und Cloud?</h3>
            <p>Künstliche Intelligenz bezieht sich auf die Simulation von menschlicher Intelligenz in Maschinen, die dazu befähigt sind, Aufgaben auszuführen, die normalerweise menschliche Intelligenz erfordern würden. Cloud Computing bezeichnet die Bereitstellung von Computing-Services über das Internet</p>
            <h3>Was ist Cloud Computing?</h3>
            <p>In Europa bieten sich vielfältige Jobmöglichkeiten im Bereich künstliche Intelligenz (AI) und Cloud Computing. Einige häufige Jobtitel in diesen Bereichen sind: AI-Entwickler, Data Scientist, Cloud-Architekt, Machine Learning-Ingenieur, Cloud Security-Spezialist...</p>
          </div>
        </div>
      </div> 
      <h2 className="text-center my-4 bg-light p-2">Q&A</h2>
      <div className="accordion" id="faqAccordion"> 
        <div className="card">
          <div className="card-header" id="headingOne"> {/* heading the first question */}
            <h2 className="mb-0">
              <button className="btn btn-block text-left" type="button" onClick={() => setShowAnswerOne(!showAnswerOne)}>
                <span style={{color: 'blue'}}>Wie lange dauert das Quiz?</span>
              </button>
            </h2>
          </div>
          {showAnswerOne && (
            <div className="card-body">  {/* // show the answer to the first question when the button is clicked} */}
              Die Dauer des Quizzes kann variieren, je nachdem, wie viele Fragen es umfasst und wie schnell der Teilnehmer antwortet. Üblicherweise dauert ein Quiz jedoch etwa 10 bis 30 Minuten.
            </div>
          )}
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button className="btn btn-block text-left" type="button" onClick={() => setShowAnswerTwo(!showAnswerTwo)}>
                <span style={{color: 'blue'}}>Was sind die Vorteile von Cloud Computing?</span>
              </button>
            </h2>
          </div>
          {showAnswerTwo && (
            <div className="card-body">
              Die Vorteile von Cloud Computing umfassen unter anderem:
              <ul>
                <li>Skalierbarkeit: Unternehmen können ihre Ressourcen je nach Bedarf skalieren, ohne physische Hardware kaufen oder verwalten zu müssen.</li>
                <li>Kosteneffizienz: Durch die Nutzung von Cloud-Services können Unternehmen Kosten für Hardware, Wartung und Energie sparen.</li>
                <li>Flexibilität: Cloud Computing ermöglicht es Mitarbeitern, von überall aus auf ihre Arbeitsumgebung zuzugreifen, was die Flexibilität und Effizienz erhöht.</li>
              </ul>
            </div>
          )}
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button className="btn btn-block text-left" type="button" onClick={() => setShowAnswerThree(!showAnswerThree)}>
                <span style={{color: 'blue'}}>Was sind die Anwendungen von künstlicher Intelligenz im täglichen Leben?</span>
              </button>
            </h2>
          </div>
          {showAnswerThree && (
            <div className="card-body">
              Die Anwendungen von künstlicher Intelligenz im täglichen Leben sind vielfältig und umfassen unter anderem:
              <ul>
                <li>Personalisierte Empfehlungssysteme in Online-Shops und Streaming-Diensten.</li>
                <li>Spracherkennung und virtuelle Assistenten wie Siri und Alexa.</li>
                <li>Automatisierung in der Fertigung und im Transportwesen.</li>
                <li>Medizinische Diagnoseunterstützungssysteme und Predictive Analytics in der Gesundheitsbranche.</li>
              </ul>
            </div>
          )}
        </div>
        <div className="card">
          <div className="card-header" id="headingFour">
            <h2 className="mb-0">
              <button className="btn btn-block text-left" type="button" onClick={() => setShowAnswerFour(!showAnswerFour)}>
                <span style={{color: 'blue'}}>Wie kann künstliche Intelligenz in Unternehmen eingesetzt werden?</span>
              </button>
            </h2>
          </div>
          {showAnswerFour && (
            <div className="card-body">
              Künstliche Intelligenz kann in Unternehmen für verschiedene Zwecke eingesetzt werden, darunter:
              <ul>
                <li>Verbesserung des Kundenservice durch Chatbots und automatisierte Supportsysteme.</li>
                <li>Optimierung von Geschäftsprozessen durch Predictive Analytics und maschinelles Lernen.</li>
                <li>Entwicklung von personalisierten Marketingstrategien mithilfe von Datenanalyse und Kundenprofilierung.</li>
                <li>Steigerung der Produktivität durch Automatisierung wiederkehrender Aufgaben und Prozesse.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div style={{ height: '30px' }}></div>
    </div>
  );
  
};

export default HomePage;
