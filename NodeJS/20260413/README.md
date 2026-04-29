# A NodeJS használata

## Első projekt

1. Töltsd le az alábbi oldalról a **NodeJS**-t, és telepítsd:  [NodeJS](https://nodejs.org/en/download)
2. **Mappaszerkezet** létrehozása: Hozz létre egy mappát a feladatnak (pl dátum); majd abban 2 mappát: **frontend**, **backend**
   1. mese: Eddig frontendet tanultatok, HTML, CSS, JS fájlok, és a médiatartalmak, a bootstrap mind mind a frontend mappába kerül
   2. most mi a **backend** mappában kezdünk dolgozni
3. A backend mappán belül hozd létre a **serer.js** fájlt az alábbi tartalommal:

    ```js
        const http = require('http');

        const hostname = '127.0.0.1';
        const port = 3000;

        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello World\n');
        });

        server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });
    ```

4. **Futtatás**:
   1. jobb klikk a server.js fájlon, **Open in Integrated Terminal**
   2. terminálba írd be a következőt: **node server.js**
5. **Ellenőrzés**: böngészőbe írd be, hogy **localhost:3000** vagy *127.0.0.1:3000*
6. Szerver **leállítása**: VSCode terminálban **Ctrl + C**

## Framework

Ha szeretnél valami frameworköt használni, akkor az az express legyen.

### Telepítés

Terminálban telepíted:

```sh
npm init -y
npm install express
```

### A kód egy kicsit egyszerűsödik

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/user', (req, res) => {
    res.send('Hello Jani');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

### Futtatás

Nem változik : **node server.js**
