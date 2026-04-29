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
    database: '2025_11c' // ide jön az adatbázis neve
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
