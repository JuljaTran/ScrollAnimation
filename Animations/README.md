# Scrollanimations-Projekt

Dieses Projekt demonstriert verschiedene scrollbasierte Animationstechniken in modernen Webanwendungen. Ziel ist der Vergleich zwischen nativem CSS und JavaScript-basierten Animationen mit GSAP und dem ScrollTrigger-Plugin in einer React-Anwendung.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Features

Vergleichbare Testszenarien für Progress-Animation, Parallax-Effekte, komplexe Sequenzen, Pinning und lange Scrollseiten.

Implementierung sowohl mit CSS-Keyframes als auch GSAP/ScrollTrigger.

Reproduzierbare Messungen durch automatisiertem Scrollmechanismus.

Performance-Analyse über Chrome DevTools.
[Performanceanalyse Datenauswertung](../performanceAnalyse/BA_PerformanceAnalyse_TranJulia.pdf)

## Technologien 

React (17+) für komponentenbasierte Implementierung
Vite als Build-Tool für schnelle Entwicklung
GSAP (GreenSock Animation Platform) + ScrollTrigger
CSS @keyframes und moderne Scroll-Timelines (animation-timeline)
JavaScript für Automatisierung und dynamische Inhaltsgenerierung

## Projektstruktur 
/src
    /images         # Implementierte Images der Testszenarien
    /scennarios             # React-Komponenten für jedes Testszenario
        /css                # CSS Szenarien & zugehörige Stylesheets
        /gsap               # GSAP Szenarien & zugehörige Stylesheets
index.html                  # Einstiegspunkt der App

##  Installation

git clone https://github.com/JuljaTran/ScrollAnimation.git
cd Animations
npm install
npm run dev

## Nutzung

Die Anwendung startet lokal unter http://localhost:5173 (Vite Standardport).
Scrollen wird automatisch simuliert, sodass Performance und Animationen konsistent überprüft werden können.
Szenarien können einzeln aktiviert/deaktiviert werden über die jeweiligen Komponenten in /src/App.jsx.
Um den Performancetest sauber ausführen zu können müssen alle nicht verwendeten Imports der Szenarien auskommentiert werden.

## Zweck
Dieses Projekt dient als experimentelle Testumgebung, um die Leistungsfähigkeit, Flexibilität und Skalierbarkeit verschiedener scrollbasierter Animationstechniken zu vergleichen. 
