import React, { useState } from 'react';
import '../styles/FlippCard.css';
import '../styles/App.css';

// FlippCard component definition
const FlippCard = ({ frontContent, backContent, isImage }) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!flipped); // Flip the card on click
  };

  return (
    <div className={`Flipp-card ${flipped ? 'is-flipped' : ''}`} onClick={handleCardClick}>
      <div className="Flipp-card-face Flipp-card-front">
        {isImage ? <img src={frontContent} alt="Fotos" /> : <p><strong>{frontContent}</strong></p>}
      </div>
      <div className="Flipp-card-face Flipp-card-back">
        <p>{backContent}</p>
      </div>
    </div>
  );
};

// Flipp Cards Front and Back Content
const FlippCardD = () => (
  <div className="flipp-card-container">
    <FlippCard
      frontContent="Datenanalyse und Prognosen"
      backContent="Die Implementierung von KI-Algorithmen in der Cloud ermöglicht fortschrittliche Datenanalyse, maschinelles Lernen und prognostische Modelle, um Muster zu erkennen und zukünftige Trends vorherzusagen."
    />
    <FlippCard
      frontContent="Automatisierung von Geschäftsprozessen"
      backContent="KI-gestützte Automatisierungslösungen in der Cloud nutzen Robotic Process Automation (RPA), um manuelle Aufgaben zu automatisieren, sowie NLP und maschinelles Sehen für die Verarbeitung unstrukturierter Daten."
    />
    <FlippCard
      frontContent="Personalisierte Kundenerfahrung"
      backContent="KI-basierte Empfehlungssysteme in der Cloud analysieren das Verhalten und die Vorlieben der Kunden, um maßgeschneiderte Angebote und Inhalte zu liefern, die deren Bedürfnisse und Interessen besser ansprechen."
    />
    <FlippCard
      frontContent="Sicherheits- und Compliance-Management"
      backContent="Die Implementierung von KISicherheitslösungen in Cloud ermöglicht fortgeschrittene Bedrohungsanalyse, Erkennung von Anomalien, automatisierte Reaktionen, um Sicherheitsvorfälle zu verhindern oder darauf reagieren."
    />
    <FlippCard
      frontContent="Optimierung der Lieferkette"
      backContent="KI und Cloud-basierte Analysewerkzeuge optimieren die Lieferkettenplanung, Vorhersage der Nachfrage, Lagerbestandsverwaltung und Routenoptimierung, um die Effizienz und Reaktionsfähigkeit zu verbessern."
    />
    <FlippCard
      frontContent="Einsatz von KI in der medizinischen Diagnostik"
      backContent="KI-Modelle verarbeiten medizinische Bilddaten, genetische Informationen und Patientendaten, um Krankheiten frühzeitig zu erkennen, Behandlungsoptionen zu optimieren und personalisierte Medizin zu ermöglichen."
    />
  </div>
);

export default FlippCardD;
