# Anleitung

## Dev Server

- Node.js installieren, überprüfen mit `node -v` (getestet mit v16.13.1) und `npm -v` (getestet mit v8.1.2)
- Im Projektordner beim ersten Mal `npm install` ausführen (installiert alle Dependecies)
- `npm run dev` startet den Dev Server (mit Live Reload etc.) auf `localhost:3000`

## Deploy

Zum Deployen einfach einen git commit pushen, dieser wird dann automatisch von Vercel erkannt und
das Projekt wird neu gebuildet und deployed.

## Projektstruktur

```
.
|-- components
| |-- icons
| |-- sections
|-- data
|-- hooks
|-- pages
|-- public
| |-- images
| | |-- models
| | |-- projects
|-- styles
```

### Daten

Die meisten veränderlichen Daten können in `/data/data.js` angepasst werden. Die Social-Links als
volle URL zum Profil (nicht nur Username). Skills einfach im Array hinzufügen, für zusätzliche Projekte
am besten ein Projekt-Objekt kopieren und entsprechend anpassen. Die Pfadangaben der Bilder sind immer relativ
zum enstprechenden Ordner (siehe Assets Abschnitt). Bei den Models sind `main` die im Grid einzeln dargestellten,
`houses` werden für den Kartenstapel verwendet.

### Assets

Statische Assets (favicon und Bilder) sind im Ordner `/public`. Bilder für Projekte sind in `/public/images/projects`,
für 3D-Models in `/public/images/models` und für den 3D-Model-Stapel in `/public/images/models/houses`.
Der Pfad der eigentlichen Datei (relativ zum jeweiligen Ordner) muss dann in `data/data.js`
bei den entsprechenden Arrays angebeben werden.

### Components

Alle Components, aus denen die Seite aufgebaut wird, sind im Ordner `/components`. Die einzelnen Sections
sind in `/components/sections`, geteilte oder aufgesplittete Components sind im direkt im Ordner.

### Styling

Grundsätzlich wird Tailwind CSS verwendet [(Docs)](https://tailwindcss.com/docs/), d.h. den HTML (bzw. JSX)
Elementen werden mit `className` (entspricht `class` in HTML, ist in JavaScript aber ein Keyword, deswegen `className`)
Utilityklassen gegeben (eine Utilityklasse entspricht meistens einer CSS Property). Mit der VS Code Extension
"Tailwind CSS IntelliSense" kann man einfach über die Klassen hovern um zu sehen, was dahintersteckt.

Alternativ kann man auch in `/styles/globals.css` _globale_ Styles schreiben, also wie gewohnt den gewünschten
Elementen eine Klasse geben uns dann mit einem CSS-Selector ansprechen.
