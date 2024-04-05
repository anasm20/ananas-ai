import React from 'react';
import '../styles/App.css';

function Help() {
  return (
    <div className="container">
      <div className="text-center">
        <h2 className="mb-4 bg-light p-2">Willkommen im Hilfebereich</h2>
        <p className="lead">Wir sind hier, um Ihnen zu helfen!</p>
        <p>Unsere Plattform ist darauf ausgelegt, Ihre Erfahrung so reibungslos wie möglich zu gestalten. Hier finden Sie Antworten auf häufig gestellte Fragen und Hilfestellungen zur Nutzung unserer Dienste.</p>
        <p>Für individuelle Unterstützung steht Ihnen unser Support-Team gerne zur Verfügung. Sie können uns jederzeit unter <a href="mailto:support@ananas.com">support@ananas.com</a> erreichen.</p>
      </div>

      <div className="mt-5">
        <h3 className="text-center">ANANAS Teile</h3>
        <p>
          <a href="/"><strong>Hauptseite:</strong></a> Die Hauptseite begrüßt Besucher mit einer Einführung in Ihr Lernportal über KI und Cloud Computing. Sie bietet einen Überblick über die Hauptabschnitte der Website, darunter Informationen, Flipp-Card-Rätsel, Quiztests und Jobchancen im Bereich AI und Cloud. Ein FAQ-Akkordeon für häufig gestellte Fragen ergänzt die Inhalte.
        </p>
        <p>
          <a href="/information"><strong>Information:</strong></a> Der Informationsbereich bietet tiefergehende Einblicke in KI und Cloud Computing durch ein Akkordeon-Layout, das verschiedene Aspekte dieser Technologien behandelt. Hier können Nutzer auch ein Quiz starten, um ihr Wissen zu testen.
        </p>
        <p>
          <a href="/ananasai"><strong>AnanasAI:</strong></a> AnanasAI ist ein interaktiver Produktfinder, der Benutzern hilft, das passende KI-Produkt basierend auf ihren Antworten auf eine Reihe von Fragen zu finden. Am Ende des Prozesses erhalten sie Produktvorschläge oder die Empfehlung, einen Beratungstermin zu vereinbaren.
        </p>
        <p>
          <a href="/quiz-test"><strong>QuizTest:</strong></a> Im QuizTest-Bereich können Besucher ihr Wissen über KI und Cloud Computing in einem Quiz testen. Nutzer geben ihren Namen ein, beantworten Fragen und erhalten am Ende eine Bewertung ihres Wissens.
        </p>
        <p>
          <a href="/aboutus"><strong>Über uns:</strong></a> Diese Seite stellt Ihr Unternehmen, ANANAS, vor und erklärt dessen Mission, Inhalte und die angebotene Technologie. Ihr Ziel ist es, eine umfassende Lernplattform zu bieten, die es Neugierigen und Fachleuten ermöglicht, tiefer in die Konzepte, Anwendungen und Auswirkungen von KI und Cloud-Computing einzutauchen.
        </p>
        <p>
          <a href="/flipp-card"><strong>FlippCard:</strong></a> Der FlippCard-Abschnitt bietet interaktive Karten, die beim Anklicken Informationen über verschiedene Anwendungen von KI in der Cloud enthüllen, wie Datenanalyse, Geschäftsprozessautomatisierung und personalisierte Kundenerfahrungen.
        </p>
        <p>
          <a href="/contact"><strong>Kontakt:</strong></a> Auf der Kontaktseite können Besucher Ihre Kontaktdaten finden, einschließlich E-Mail-Adresse, Telefonnummer und physischer Adresse, um Fragen, Anregungen oder Anfragen zu stellen.
        </p>
        <p>
          <a href="/help"><strong>Hilfe:</strong></a> Der Hilfebereich bietet Antworten auf häufig gestellte Fragen und allgemeine Hilfestellungen zur Nutzung Ihrer Dienste. Besucher werden ermutigt, sich bei individuellen Anliegen an das Support-Team zu wenden.
        </p>
        <p>
          <a href="/impressum"><strong>Impressum:</strong></a> Das Impressum enthält rechtliche Informationen über den Betreiber der Website, inklusive Firmenname, Vertretung, Adresse, Telefonnummer und E-Mail-Adresse.
        </p>
        <p>Wenn Ihre Frage hier nicht beantwortet wird, zögern Sie nicht, uns zu kontaktieren.</p>
      </div>
    </div>
  );
}

export default Help;
