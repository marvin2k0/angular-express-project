## Aufgabe 1

Erstelle eine einfache Szenerie mit grüner Wiese und blauem Himmel und einer scheinenden Sonne mit Sonnenstrahlen. Die Aufgabe ist, die Sonne um die eigene Achse zu drehen. **Optional** kann auch der Verlauf der Sonne animiert werden.

Beispiel:<br>
![Demo](./assets/sun-demo.gif)

## Aufgabe 2

Gegeben ist ein Express-Backend, das Witze liefert, mit folgenden Endpunkten:

**Erhalte einen neuen Witz:**

```
GET /new-joke
```

**Erhalte alle bereits abgefragten Witze:**

```
GET /jokes
```

**Bewerte einen bereits abgefragten Witz:**

```
POST /rate/{jokeId}

Body {
    rating: number, (Zahl Zwischen 1 und 10)
}
```

Erstelle ein Nutzerinterface in der `index.html`, das erlaubt, neue Witze zu generieren (`/new-joke`), diese zu bewerten (`/rate/{jokeId}`) und alle Witze abzufragen (`/jokes`). Nutze für die Anfragen jeweils die `fetch()`-Methode.

<details>
    <summary>💡 Tipp</summary>
    Damit das Backend Projekt funktioniert, müssen zuerst mit `npm install` seine Dependencies installiert werden.
</details>

## Aufgabe 3

Nutze den Express-Server aus [Aufgabe 2](#aufgabe-2), um ein Angular Frontend dafür zu erstellen. Ähnlich wie in der voherigen Aufgabe, sollen Nutzer die Möglichkeit haben, neue Witze zu generieren, diese Witze mit einer Bewertung von 1-10 zu versehen und alle Witze anzuzeigen.

Achte darauf, Angular-spezifische Methoden zur Lösung dieser Aufgaben zu verwenden: `HttpClient` statt `fetch()`; Komponenten statt alles in einer .html zu schreiben; Service-Klassen statt einer globalen Logik datei und Routing mit dem Angular Router.
