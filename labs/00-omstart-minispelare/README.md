# Labb 00: Omtag - bygg en minispelare från en tom mapp

## Varför gör vi den här labben?

I de tidigare labbarna har du mött många verktyg och ord samtidigt. Här backar vi bandet och bygger en mycket liten webbsida från början. Målet är att du ska förstå vad filerna gör och kunna skapa samma projekt hemma.

Du behöver bara en vanlig mapp, Visual Studio Code och en webbläsare. Node.js, npm, terminalen och localhost kommer tillbaka i slutet när vi jämför med kursappen.

## När du är klar kan du

- förklara att ett projekt är en mapp med filer som hör ihop
- beskriva vad HTML och JavaScript gör i projektet
- koppla en knapp i HTML till ett script
- förklara begreppen variabel, funktion, objekt och event listener på en övergripande nivå
- visa ett enkelt tracking-event som skapas efter ett klick
- säga varför kursappen behöver en server och localhost, även om minispelaren inte gör det

## Del 1: Skapa projektet

1. Skapa en ny mapp på datorn och döp den till `minispelare`.
2. Öppna Visual Studio Code.
3. Välj **File -> Open Folder** och öppna mappen `minispelare`.
4. Skapa tre filer i mappen:
   - `index.html`
   - `styles.css`
   - `app.js`

Detta är projektet. GitHub, Node.js och npm har ännu inte gjort någonting. De är verktyg vi kan använda runt projektet senare.

## Del 2: Bygg det som syns

Kopiera innehållet från `starter/index.html` till din egen `index.html`.

Öppna `index.html` genom att dubbelklicka på filen i datorns filhanterare. Webbläsarens adress börjar nu med `file:///`. Det betyder att webbläsaren läser filen direkt från din dator. Ingen webbserver körs ännu.

Ändra låtens namn i HTML-filen, spara och ladda om webbläsaren. Du har nu ändrat det användaren ser.

## Del 3: Ge sidan ett utseende

Kopiera innehållet från `starter/styles.css` till din egen `styles.css`.

HTML-filen innehåller redan länken:

```html
<link rel="stylesheet" href="styles.css" />
```

Webbläsaren läser därför även CSS-filen. CSS påverkar hur sidan ser ut, men den bestämmer ännu inte vad knappen gör.

## Del 4: Lägg till ett script

Kopiera innehållet från `starter/app.js` till din egen `app.js`.

HTML-filen innehåller redan raden:

```html
<script src="app.js" defer></script>
```

Raden säger till webbläsaren att läsa och köra instruktionerna i `app.js`.

Ladda om sidan och klicka på **Spela låten**. Nu ändras texten och ett event visas på sidan.

## Vad består scriptet av?

- **Variabler** ger namn åt sådant scriptet behöver komma ihåg, till exempel knappen och antalet klick.
- **En funktion** samlar instruktioner som ska köras tillsammans.
- **Ett objekt** samlar flera värden som hör ihop. Här beskriver objektet ett tracking-event.
- **En event listener** väntar på en viss händelse. Här väntar den på ett klick och startar sedan funktionen.

Scriptet arbetar alltså ungefär så här:

1. Hitta knappen.
2. Vänta på ett klick.
3. Kör funktionen.
4. Uppdatera sidan.
5. Skapa ett objekt som beskriver klicket.

## Del 5: Undersök utan att gå vilse

1. Öppna DevTools och välj **Console**.
2. Klicka en gång på knappen.
3. Leta efter texten `Tracking-event skapat`.
4. Öppna objektet bredvid texten.

Console visar vad scriptet skrev ut. Vi använder den för att se att funktionen kördes och vilket event som skapades.

Öppna sedan **Network** och klicka igen. Minispelaren skickar ännu inget tracking-event till en server. Därför ska du inte förvänta dig en rad som heter `/api/events`. Eventet har skapats i webbläsaren, men det har inte skickats vidare.

## Del 6: Jämför med kursappen

Kursappen i repositoryts rot har ytterligare delar:

- `server.js` är ett Node.js-program som fungerar som webbserver.
- `package.json` innehåller bland annat projektets startkommando.
- `npm start` läser startkommandot och ber Node.js köra `server.js`.
- `http://localhost:3000` är adressen där webbläsaren når serverprogrammet på din egen dator.
- kursappens `fetch()` skickar ett HTTP-meddelande till `/api/events` och väntar på serverns svar.

I minispelaren stannar eventet i webbläsaren. I kursappen går kedjan vidare:

`klick -> JavaScript -> eventobjekt -> request -> server -> response`

## Genomförd när

Du kan skapa projektmappen igen utan facit, ändra låtens namn och få knappen att fungera. Du kan även peka ut en variabel, funktionen, eventobjektet och event listenern i `app.js` och med egna ord säga vad var och en gör.

## Om något inte fungerar

- Ser du bara text utan utseende? Kontrollera filnamnet `styles.css` och länken i HTML.
- Gör knappen ingenting? Kontrollera filnamnet `app.js`, script-raden i HTML och den första röda felraden i Console.
- Visas en gammal version? Spara filerna och ladda om sidan.
- Hittar scriptet inte knappen? Kontrollera att HTML använder `id="play-button"` och att JavaScript söker efter `#play-button`.
