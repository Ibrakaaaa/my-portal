import React from "react";
import { Link } from "react-router-dom"; // Navigation (zurück zur Startseite oder anderen Seiten)

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Über Dieses Projekt
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
        Willkommen auf meinem Nachrichtenportal! Dieses Projekt wurde als Übung erstellt, um mein Wissen über moderne Webentwicklung, insbesondere React.js, und die Integration von Drittanbieter-APIs zu demonstrieren.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Was ist dieses Projekt?
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        Dies ist eine Nachrichtenaggregator-App, die Echtzeit-Nachrichtendaten von der Guardian API abruft. Die App zeigt die neuesten Nachrichten, einschließlich Schlagzeilen, Zusammenfassungen und Veröffentlichungsdetails.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Verwendete Technologien:
      </h3>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
        <li>React.js - Frontend-Framework</li>
        <li>Context API - Für das Zustandsmanagement</li>
        <li>Tailwind CSS - Für Styling und responsives Design</li>
        <li>Fetch API - Um Nachrichtendaten von der Guardian API abzurufen</li>
        <li>React Router - Für die Navigation zwischen Seiten</li>
        <li>useReducer - Für die Verwaltung von Zustandsübergängen</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Warum habe ich dieses Projekt gebaut?
      </h3>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        Ich habe dieses Projekt erstellt, um mein Verständnis moderner Webentwicklungskonzepte wie React, Context API und API-Integration zu demonstrieren. Ich bin leidenschaftlich an Nachrichten interessiert und wollte etwas bauen, das Benutzern hilft, über die neuesten Weltereignisse informiert zu bleiben. Darüber hinaus ermöglicht mir dieses Projekt, das Programmieren zu üben und meine Fähigkeiten zu verbessern, während ich mit realen APIs arbeite.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Funktionen:
      </h3>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
        <li>⚡ Echtzeit-Nachrichtenaktualisierungen, die von der Guardian API abgerufen werden</li>
        <li>🌍 Neueste Weltnachrichten, kategorisiert (Politik, Sport usw.)</li>
        <li>🌙 Dunkelmodus-Umschalter für komfortables Surfen bei Nacht</li>
        <li>📰 Responsives Design, optimiert für Mobilgeräte und Desktops</li>
        <li>🔄 Seitenleiste für einfache Navigation</li>
        <li>🔍 Filtersystem, mit dem Benutzer Nachrichten nach Kategorien filtern können, um ein individuell angepasstes Surferlebnis zu erhalten.</li>
      </ul>

      <div className="mt-8">
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-700 transition-colors"
        >
          Zurück zur Startseite &rarr;
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;

