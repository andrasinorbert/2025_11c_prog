# A NodeJS használata

## Előző órai kódunk

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get(`/:name`, (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

## MySQL adatbázi kapcsolat

### Futtatás

```sh
npm install express mysql2
```

### Teljes kód

```js
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(express.json());

// MySQL kapcsolat
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',        // ide jön a MySQL jelszavad
    database: 'teszt_db' // ide jön az adatbázis neve
});

db.connect((err) => {
    if (err) {
        console.error('MySQL kapcsolódási hiba:', err);
        return;
    }

    console.log('Sikeres MySQL kapcsolat.');
});

// Főoldal
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Összes felhasználó lekérése
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json(results);
    });
});

// Egy felhasználó lekérése név alapján
app.get('/users/:name', (req, res) => {
    const name = req.params.name;

    db.query(
        'SELECT * FROM users WHERE name = ?', [name],
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (results.length === 0) {
                return res.status(404).json({ error: 'Nincs ilyen felhasználó' });
            }

            res.json(results[0]);
        }
    );
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```
