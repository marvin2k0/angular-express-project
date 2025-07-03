# Übersicht

Ziel dieser Aufgabe ist es, ein System, bestehend aus Frontend (Angular) und Backend (Express) zu erstellen, das uns erlaubt, Nutzer über ein GUI anzulegen, zu bearbeiten und zu löschen.

## Aufgabe 1

Erstelle zunächst Projektordner für Front- und Backend. Das Frontend soll im Ordner `./frontend/` und das Backend in `./backend/` erstellt werden.

Die Ordner-Struktur sollte nun wie folgt aussehen:

```
angular-express-project/
├─ frontend/
├─ backend/
```

<details>
    <summary>⚠️ Hinweis</summary>
    Erstelle den Frontend-Ordner mit `ng new frontend`, damit automatisch alle Angular-Dateien erstellt werden.
</details>

## Aufgabe 2

a. Begebe dich in den `backend`-Ordner und installiere express:

```bash
npm install express
```

---

b. Erstelle eine `index.js` und starte darin den Express-Server auf Port `3000`.

<details>
    <summary>⚠️ Hinweis</summary>
    Erstelle zunächst eine Variable `app`, weise ihr den richtigen Wert zu und rufe dann die `listen`-Methode darauf auf.
</details>

---

c. Erstelle eine `users.js`. Diese Datei imitiert eine Datenbank und enthält unsere Nutzerdaten. Erstelle im Frontend eine Model-Klasse `model/user.model.ts`, die den Aufbau eines Nutzers beschreibt. Erstelle nun in der `users.js` im Backend eine Variable `users` vom Datentyp array und speichere darin drei oder mehr Demonutzer mit ausgedachten IDs, Namen, E-Mails, etc.

---

d. Erstelle einen GET-Endpunkt, der alle in der `users.js` gespeicherten Nutzer als JSON-Array zurückgibt.

## Aufgabe 3

a. Erstelle im Frontend eine Nutzerservice-Klasse mit:

```bash
ng generate service services/user
```

Dieser Service wird unsere Methoden enthalten, über die wir mit den Endpunkten aus dem Backend kommunizieren.

---

b. Binde den `HttpClient` in dein Angularprojekt ein, indem du den benötigten Eintrag in die `app.config.ts` schreibst. Nutze dann die `inject()`-Methode im Nutzerservice, um den `HttpClient` per Dependency-Injection abzurufen und speichere ihn in eine globale Variable `http`.

---

c. Erstelle im Nutzerservice eine Methode `getAllUsers()`, die den `HttpClient` benutzt, um den entsprechenden GET-Endpunkt im Backend anzusprechen. Returne den `Observable`

<details>
    <summary>⚠️ Hinweis</summary>
    Eventuell müssen CORS-Einstellungen im Backend verändert werden, damit Angular auf die Endpunkte zugreifen kann.
</details>

---

d. Erstelle nun eine Komponente, die dafür gedacht ist, einen Nutzer anzuzeigen:

```bash
ng generate component components/user
```

Diese Komponente soll einen `@Input`-Parameter `user` entgegennehmen.

---

e. Erstelle nun eine Komponente, die dafür gedacht ist, eine Liste von Nutzern anzuzeigen:

```bash
ng generate component components/user-list
```

Die Komponente soll einen `@Input`-Parameter `users` entgegennehmen, der vom Typ Nutzerarray ist. Bette diese Komponente in die Appkomponente ein, sodass sie angezeigt wird, wenn man auf [http://localhost:4200](http://localhost:4200) navigiert.

---

e. Nun müssen wir die `getAllUsers()`-Methode aus dem Nutzerservice in der `.ts`-Datei der Appkomponente aufrufen und die erhaltenen Nutzerdaten in einer globalen Variable `users` speichern, sodass wir die Nutzerdaten im nächsten Schritt der `user-list`-Komponente übergeben können.

---

f. Navigiere in die `.html`-Datei der User-List-Komponente und nutze `@for`, um über die `users`-Variable zu iterieren und jeden einzelnen Nutzer, inklusive Namen und E-Mail Adresse anzuzeigen. Dabei soll jeder nutzer auf einer eigenen Zeile sein.

## Aufgabe 4

a. Erstelle im Backend einen GET-Endpunkt, der nun nur einen Nutzer anhand der ID abfragt, z.B `/user/:id`

---

b. Erweitere die `user.service.ts` im Frontend um eine Methode `getUserById(id)`, achte auf richtige Syntax.

---

c. Erstelle eine neue Komponente `user-profile` und erstelle im Frontend eine Route, sodass `/user/:id` auf diese Komponente weiterleitet. Injeziere in diese Komponente `ActivatedRoute`, um auf Routen-Paremter, wie die ID zugreifen zu können und rendere darin dann den Nutzer anhand der ID.

<details>
    <summary>⚠️ Hinweis</summary>
    `router-outlet` nicht vergessen
</details>

---

d. Überlege, welche Lifecycle-Methode aus Angular du benutzen kannst, um etwas direkt beim Laden der Komponente ausführen lassen zu können. Speichere die ID aus der URL innerhalb dieser Methode in eine Variable und lade die Nutzerdaten des Nutzers, der über diese ID verfügt aus dem Backend.

---

e. Erstelle eine globale `user`-Variable und weise ihr den Nutzer zu, den du aus dem Backend abgefragt hast und gebe sie als Input in eine passende Komponente, um einen einzelnen Nutzer anzuzeigen.

## Aufgabe 5

a. Erstelle im Backend einen POST Endpunkt, um einen neuen Nutzer anzulegen.

---

b. Erstelle in der `user.service.ts` eine neue Methode `createUser(user)`, um einen neuen Nutzer anzulegen.

---

c. Erstelle im Frontend eine neue Komponente, die Nutzerinformationen abfragt und bei Klick auf einen Knopf die `createUser()`-Methode aus dem Service aufruft.

## Aufgabe 6

Implementiere eine Löschfunktionalität: In der Übersicht mit allen Nutzern, soll für jeden Nutzer ein Löschknopf existieren, mit dem man diesen Nutzer löschen kann.
