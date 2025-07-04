# Übersicht

Ziel dieser Aufgabe ist es, ein System zu entwickeln, das es Nutzern erlaubt, Echtzeit-Wetterdaten von deutschen Städten einzusehen. Die Nutzer haben außerdem die Möglichkeit, Notizen zu einer Stadt zu schreiben, zu aktualisieren und zu löschen.

## Aufgabe 1

a. Erstelle zunächst Projektordner für Front- und Backend. Das Frontend soll im Ordner `./frontend/` und das Backend in `./backend/` erstellt werden.

Die Ordner-Struktur sollte nun wie folgt aussehen:

```
weather-app/
├─ frontend/
├─ backend/
```

<details>
    <summary>⚠️ Hinweis</summary>
    Erstelle den Frontend-Ordner mit `ng new frontend`, damit automatisch alle Angular-Dateien erstellt werden.
</details>

---

b. Recherchiere und finde eine kostenlose API, mit der du Wetterdaten zu Städten in Deutschland abrufen kannst und erstelle dir dort ein Konto.

<details>
  <summary>⚠️ Hinweis</summary>
  Eine gute API, die ich gefunden habe ist https://www.weatherapi.com
</details>

---

## Aufgabe 2

a. Erstelle im Frontend einen Wetterservice und darin eine Methode `getWeather(city: string)`:

```BASH
ng generate service services/weather
```

---

b. Bereite dein Angular Projekt vor, sodass es den `HttpClient` verwenden kann.

<details>
  <summary>⚠️ Hinweis</summary>
  Dazu musst du die `app.config.ts` bearbeiten.
</details>

---

c. Lese die Dokumentation deiner gewählten API und fülle die Methode `getWeather(city: string)` aus, sodass mit ihr Wetterdaten für eine gegebene Stadt abgerufen werden können. Nutze den `HttpClient`.

## Aufgabe 3

a. Erstelle im Frontend ein `model/weather-data.model.ts`, das Wetterinformationen, wie `temperature`, `humidity` und `city_name`, enthält.

---

b. Erstelle im Frontend eine `weather-card`-Komponente, die per `@Input()` eine Instanz von `weather-data.model.ts` entgegennehmen kann:

```BASH
ng generate component components/weather-card
```

---

c. Fülle das Template und das Stylesheet der `weather-card`-Komponente aus, sodass die Informationen aus dem `weather-data`-Model schön angezeigt werden. Es soll mindestens der Name der Stadt, das Land und die Temperatur angezeigt werden. Optional kann auch ein Icon angezeigt werden, welches das aktuelle Wetter in der Stadt darstellt, z.B eine Sonne bei Sonnenschein.

<details>
  <summary>⚠️ Hinweis</summary>
  Es wäre sinnvoll, zunächste eine Demo-Instanz des `weather-models` zu erstellen, um die Funktion der `weather-card`-Komponente zu testen.
</details>

## Aufgabe 4

a. Begebe dich in das Backend und installiere `express`:

```BASH
npm install express
```

---

b. Erstelle eine `index.js` und starte darin den Express-Server auf Port `3000`.

<details>
    <summary>⚠️ Hinweis</summary>
    Erstelle zunächst eine Variable `app`, weise ihr den richtigen Wert zu und rufe dann die `listen`-Methode darauf auf.
</details>

---

c. Erstelle eine `notes.js`. Diese Datei imitiert eine Datenbank und entält in unserem Beispiel Notizen für einzelne Städte. Ein sinnvolles Format für ein einzelnes Notes-Objekt könnte z.B wie folgt aussehen:

```JSON
{
    "id": 1,
    "city_name": "Essen",
    "notes": [
        {
            "id": 1,
            "content": "Hat einen schönen See -> besuchen"
        },
        {
            "id": 2,
            "content": "Nächste Woche: Im Limbecker Platz einkaufen"
        }
    ]
}
```

Lege ein paar Demo-Einträge an.

<details>
    <summary>⚠️ Hinweis</summary>
    Beachte, dass das obige Objekt keine Wetterdaten enthält. Diese Daten werden nämlich durch die API des externen Anbieters, z.B weatherapi.com, bereitgestellt und müssen von uns nicht zwingend gespeichert werden.
</details>

---

d. Erstelle einen GET-Endpunkt `/notes`der alle in der `notes.js` befindlichen Daten zurückgibt.

---

e. Erstelle GET-Endpunkte `/notes/id/:id` und `/notes/city/:name`, die Notizen abhängig von ID, bzw. Name der Stadt zurückggeben.

<details>
    <summary>⚠️ Hinweis</summary>
    Die Suche nach dem Namen der Stadt soll unabhängig von Groß- bzw. Kleinschreibung funktionieren.
</details>

---

f. Erstelle POST- und PUT-Endpunkte (z.B für PUT `/notes/id/:id/:noteId` und `/notes/city/:name/:noteId`), die es ermöglichen Notizen für eine Stadt anzulegen, bzw. zu aktualisieren.

<details>
    <summary>⚠️ Hinweis</summary>
    Überlege, wie die Pfade der Endpunkte genau aussehen sollten und welche Variablen sie enthalten sollten.
</details>

---

g. Erstelle DELETE-Endpunkte `/notes/id/:id/:noteId` und `/notes/city/:name/:noteId`, die das Löschen einer Notiz einer Stadt ermöglichen.

---

h. Überlege dir, wie die Funktionen der in den vorherigen Teilaufgaben erstellten Endpunkte sinnvoll in das User-Interface integriert werden können und implementiere die Funktionen in das Frontend.

---

i. Erstelle einen `services/notes.service.ts` und darin Methoden, um die gerade erstellen Endpunkte im Backend anzusprechen. Nutze dafür den Angular `HttpClient` und mindestens einmal die native `fetch()`-Methode

## Aufgabe 5

a. Erstelle im Frontend eine Seite `/cities`, die alle Städte, inklusive Wetterdaten anzeigt, über die Notizen im Backend verfügbar sind. Für jede Stadt soll eine einzelne `weather-card` genutzt werden und die Wetterdaten sollen über den `@Input()` an die Komponente übergeben werden. Die Anzeige soll responsiv sein, d.h auf verschiedenen Bildschirmgrößen gut aussehen. Nutze dafür eine Methode deiner Wahl (z.B `flexbox`, `grid`, `media-queries` oder Kombination davon)

---

b. Binde die Notizen sinnvoll in dein User-Interface ein.

---

c. Erstelle eine Seite `/cities/:name`, die eine Stadt mit ihren Wetterdaten und Notizen anzeigt.
