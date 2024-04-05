import React, { useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

function Information() { 
  const [activeKey, setActiveKey] = useState('0');
  const navigate = useNavigate();
// 
  const handleSelect = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  const startQuiz = () => { 
    navigate('/quiz-test');
  };

  return (
    <div className="home-container">
    {/* the code for the banner  */}
      <h2 className="text-center mb-4 bg-light p-2">Wichtige Informationen über AI und Cloud</h2>
      <Accordion activeKey={activeKey} onSelect={handleSelect}>
        <Accordion.Item eventKey="0">
          <Accordion.Header><strong>Was ist künstliche Intelligenz (KI)?</strong></Accordion.Header>
          <Accordion.Body>
            Künstliche Intelligenz ist ein Bereich der Informatik, der sich damit beschäftigt, Maschinen die Fähigkeit zu geben, intelligentes Verhalten zu zeigen.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><strong>Was ist Cloud Computing?</strong></Accordion.Header>
          <Accordion.Body>
            Cloud Computing bezeichnet die Bereitstellung von IT-Infrastruktur und Rechenleistung über das Internet, wobei Nutzer auf Ressourcen zugreifen können, ohne diese physisch vor Ort haben zu müssen.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header><strong>Wie funktioniert maschinelles Lernen?</strong></Accordion.Header>
          <Accordion.Body>
            Maschinelles Lernen ist ein Teilbereich der künstlichen Intelligenz (KI), der es Computern ermöglicht, aus Daten zu lernen und Entscheidungen zu treffen oder Vorhersagen zu treffen, ohne explizit programmiert zu werden.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header><strong>Was ist ein Neuronales Netzwerk?</strong></Accordion.Header>
          <Accordion.Body>
            Neuronale Netzwerke sind computergestützte Modelle, die von der Arbeitsweise menschlicher Gehirne inspiriert sind und aus Schichten von Knoten oder "Neuronen" bestehen, die komplexe Muster in Daten erkennen können.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header><strong>Vorteile von Cloud-Speicher</strong></Accordion.Header>
          <Accordion.Body>
            Cloud-Speicher bietet Skalierbarkeit, Flexibilität und Kosteneffizienz, da Unternehmen nur für den Speicherplatz zahlen, den sie tatsächlich nutzen, und den Speicher bei Bedarf erweitern können.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header><strong>Was sind Cloud-Services?</strong></Accordion.Header>
          <Accordion.Body>
            Cloud-Services sind Dienste, die über das Internet bereitgestellt werden und reichen von Software- und Plattformdiensten bis hin zu Infrastrukturlösungen, die herkömmliche On-Premise-Systeme ersetzen oder ergänzen.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header><strong>Welchen Bereichen wird sie typischerweise angewendet?</strong></Accordion.Header>
          <Accordion.Body>
            Die Anwendungen von KI sind vielfältig und reichen von Spracherkennung, Bildanalyse, und automatisierten Empfehlungssystemen bis hin zu autonomem Fahren und personalisierter Medizin. Diese Technologien werden in fast allen Branchen eingesetzt, um Effizienz zu steigern, menschliche Fähigkeiten zu erweitern und neue Möglichkeiten zu erschließen.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header><strong>Was ist Cloud-Computing und warum ist es besonders wichtig für die Entwicklung und Implementierung von KI-Lösungen?</strong></Accordion.Header>
          <Accordion.Body>
            Cloud-Computing bezeichnet die Bereitstellung von Rechenleistung, Speicherplatz und Anwendungen über das Internet, wodurch Unternehmen auf leistungsstarke IT-Infrastrukturen zugreifen können, ohne sie selbst vor Ort installieren zu müssen. Dies ist für KI-Anwendungen von großer Bedeutung, da KI-Systeme oft erhebliche Rechenressourcen benötigen, um Daten zu verarbeiten und Modelle zu trainieren. Die Cloud ermöglicht einen skalierbaren, flexiblen und kosteneffizienten Zugang zu diesen Ressourcen, wodurch auch kleinere Unternehmen und Start-ups die Möglichkeit haben, fortschrittliche KI-Lösungen zu entwickeln und einzusetzen.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header><strong>Wie wird Künstliche Intelligenz in verschiedenen Branchen wie dem Gesundheitswesen, dem Finanzwesen und der Automobilindustrie angewendet?</strong></Accordion.Header>
          <Accordion.Body>
            Im Gesundheitswesen wird KI für die Analyse medizinischer Bilder, die Vorhersage von Krankheitsverläufen und die Personalisierung von Behandlungsplänen eingesetzt. Im Finanzwesen helfen KI-Systeme bei der Betrugserkennung, Risikoanalyse und Automatisierung von Kundendiensten. In der Automobilindustrie treibt KI die Entwicklung autonomer Fahrzeuge voran und verbessert Sicherheitssysteme durch fortgeschrittene Erkennungsalgorithmen. Diese Anwendungen zeigen, wie KI spezifische Branchenprobleme adressiert, Prozesse optimiert und neue Innovationsmöglichkeiten schafft.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header><strong>Welche Vorteile bietet Cloud-Computing für Unternehmen und welche Herausforderungen können dabei auftreten?</strong></Accordion.Header>
          <Accordion.Body>
            Cloud-Computing bietet Unternehmen wesentliche Vorteile wie Kosteneffizienz, Skalierbarkeit, Flexibilität und Zugang zu fortschrittlichen Technologien. Unternehmen können ihre IT-Infrastruktur nach Bedarf erweitern oder reduzieren und müssen nicht in teure Hardware investieren. Herausforderungen umfassen Datenschutz- und Sicherheitsbedenken, da sensible Daten außerhalb des eigenen Unternehmensnetzwerks gespeichert und verarbeitet werden, sowie die Abhängigkeit von Cloud-Anbietern und potenzielle Ausfallzeiten, die den Geschäftsbetrieb beeinträchtigen können.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header><strong>Warum sind ethische Überlegungen und Datenschutz besonders wichtig im Kontext von KI und Cloud-Computing?</strong></Accordion.Header>
          <Accordion.Body>
            Ethik und Datenschutz sind im Kontext von KI und Cloud-Computing von entscheidender Bedeutung, da diese Technologien tiefgreifende Auswirkungen auf die Gesellschaft haben und das Potenzial besitzen, Privatsphäre und individuelle Freiheiten zu beeinträchtigen. Ethische Überlegungen betreffen die Fairness, Transparenz und Verantwortlichkeit von KI Systemen, um sicherzustellen, dass sie ohne Vorurteile handeln und ihre Entscheidungen nachvollziehbar sind. Datenschutz ist besonders wichtig, da sowohl KI als auch Cloud-Computing auf die Verarbeitung großer Mengen persönlicher Daten angewiesen sind, was ohne strenge Sicherheitsmaßnahmen und Einhaltung von Datenschutzgesetzen zu Missbrauch und Datenlecks führen kann.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Button onClick={startQuiz} className="mt-3">Quiz Test Anfangen</Button> {/*  // Button zum Starten des Quiz */}
    </div>
  );
}

export default Information;
