import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate importieren

function Welcome() {
  const navigate = useNavigate(); // Navigate-Funktion initialisieren

  // Funktion zur Navigation
  const goToAbout = () => {
    navigate("/about"); // Programmatisch zur Seite "/about" navigieren
  };

  return (
    <div className="flex flex-col items-center justify-center text-center py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Willkommen zu meinem Nachrichtenportal
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
        Dies ist ein Übungsprojekt, das ich erstellt habe, um meine Fähigkeiten in React, JavaScript und der Integration von APIs zu demonstrieren. Die App ruft in Echtzeit Nachrichten von der Guardian API ab und zeigt die neuesten Weltnachrichten an.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        <strong>Was Sie erwarten können:</strong>
      </p>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
        <li>⚡ Echtzeit-Nachrichtenupdates mit der Guardian API</li>
        <li>🌎 Anzeige der wichtigsten Weltnachrichten, einschließlich Schlagzeilen und Zusammenfassungen</li>
        <li>🔄 Einfache Navigation mit responsiver Seitenleiste und Dunkelmodus-Umschalter</li>
        <li>🎨 Sauberes, modernes Design mit Tailwind CSS</li>
        <li>🛠️ Erstellt mit React, Context API und Reducern für das Zustandsmanagement</li>
      </ul>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Dieses Projekt soll sowohl die Benutzer informieren als auch mein Verständnis moderner React-Funktionen demonstrieren. Ich hoffe, Sie finden es nützlich und ansprechend!
      </p>

      <div className="mt-8">
        {/* Button für programmatische Navigation */}
        <button
          onClick={goToAbout} 
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          Mehr über dieses Projekt erfahren &rarr;
        </button>
      </div>
    </div>
  );
}

export default Welcome;
