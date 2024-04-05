import React from 'react';
import '../styles/App.css';


function Impressum() {
  return (
    <div className="container">
      <div className="text-center"> {/*  // to center the text in the container */}
        <h2 className="mb-4 bg-light p-2">Impressum</h2>
        <p className="lead">Hier finden Sie Informationen über den Betreiber dieser Website gemäß den gesetzlichen Anforderungen.</p>
        <p>Firmenname: AnanasAI GmbH</p>
        <p>Vertreten durch: Max Mustermann</p>
        <p>Adresse: Beispielstraße 123, 12345 Musterstadt</p>
        <p>Telefon: +123426470</p>
        <p>E-Mail: info@ananas-ai.de</p>
      </div>
    </div>
  );
}

export default Impressum;
