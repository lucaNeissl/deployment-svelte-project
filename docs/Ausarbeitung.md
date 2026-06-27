# <-- Webshop  -->


<-- Webshop mit Produkte (https://fakestoreapi.com) -->

<-- Übersichtsseite (Screenshot) -->
<img width="1902" height="1105" alt="image" src="https://github.com/user-attachments/assets/da12a04d-9516-45c4-9b58-9f62f67cab8c" />


<-- Übersichtsseite Responsive (Screenshot) -->
<img width="535" height="1060" alt="image" src="https://github.com/user-attachments/assets/c4059ecd-dbd2-48ee-a843-b0ec238fc170" />


## Verwendete KI-Tools

<-- ChatGPT - Styling
    Gtihub Copilot - Deployment & Bugfixing
    Perplexity - Deployment
-->

### Erfahrungen mit KI-Unterstützung

<-- Bei Styling und Bugfixes sehr gute Erfahrungen, Deployment nicht funktionsfähig und Problem bei Github Copilot ist das Token System -->

## Allgemeine Fragen

- Wieviele Stunden habt ihr ungefähr an diesem Projekt gearbeitet? In welche Teile des Projekts habt ihr die meiste Zeit investiert?
  Ca. 20 Stunden - Deployment

- Was waren die größten Herausforderungen bei der Umsetzung dieses Projekts und wie habt ihr diese überwunden?
  Deployment - Tutorials, KI

- Welche neuen Konzepte oder Technologien habt ihr im Zuge dieses Projekts gelernt und wie habt ihr diese in eurer Webanwendung umgesetzt?
  Stores - Verbundstücke zur Datenübertragung zwischen Components

## Technische Fragestellungen

- Für welche Komponenten haben Sie sich entschieden? Abbildungen der Komponenten und deren Kommunikation untereinander (z.B. mittels Props, Events, Stores) übersichtlich darstellen und erklären. Welche Entscheidungen mussten Sie treffen, wofür (und wogegen) haben Sie sich entschieden und warum?

- Erklären Sie, welche Daten in den local-Storage gespeichert werden und wie Sie diese Daten verwalten (z.B. Warenkorb, Favoriten, etc.). Wie stellen Sie sicher, dass die Daten im local storage konsistent bleiben und korrekt aktualisiert werden?
  Im local storage wird nur das Cart gespeichert, wird nur vom CartStore verwendet

- Dokumentieren Sie auf HTTP Request-Ebene den gesamten Workflow anhand eines durchgängigen Beispiels (Abruf der Daten bis hin zur Detailansicht und filterung). Sie können ein Tool Ihrer Wahl einsetzen, z. B. Postman Workflows, VS Code, etc. HTTP-Requests inkl. HTTP-Verb, URL, Parametern, Body und Headern
- Start
 │
 ▼
GET /products
 │
 ▼
Response(products[])
 │
 ▼
Filter(category=electronics)
 │
 ▼
ProductCard(id=5)
 │
 ▼
GET /products/5
 │
 ▼
Response(product)
 │
 ▼
Detailansicht

- Wie stellen Sie sicher, dass manche Requests fehlschlagen und Ihre Webanwendung trotzdem reagiert? Beschreiben Sie mindestens zwei Fehlerfälle, die in Ihrer Webanwendung auftreten können, und wie Sie diese behandelt haben.
  Fehlerhafte Sucheingabe - "Keine Produkte gefunden", keine Datenrückgabe - erneuter Versuch + "Keine Produkte gefunden"

- Erläutern Sie, welche Überlegungen Sie bezüglich responsive Design angestellt haben. Welche Mechanismen von Tailwind CSS haben Sie eingesetzt, um Ihre Webanwendung responsiv zu gestalten? Mindestens drei konkrete Beispiele mit Abbildungen ausarbeiten.
  Listenbreite + Sidebar 

## Zusätzliche Features

- Welche zusätzlichen Features (Seiten, Endpunkte, Designs etc.) haben Sie implementiert, um die Anforderungen für ein *Gut* zu erfüllen?

## Deployment

- Falls die Webanwendung deployed wurde, beschreiben Sie kurz, wie Sie das Deployment durchgeführt haben (z.B. mit Github Pages). Listen Sie die notwendigen Schritte auf, die Sie unternommen haben, um die Webanwendung erfolgreich zu deployen.
