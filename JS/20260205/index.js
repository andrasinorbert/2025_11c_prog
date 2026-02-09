function varakozas(ms) {
    return new Promise((resolve, reject) => {
        //setTimeout(() => {
            resolve(`Vártam ${ms} ms-t`);
        //}, ms);
    });
}

/*
varakozas(1500).then(uzenet => {
    console.log(uzenet);
});
*/

function jelszoEllenorzes(jelszo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (jelszo.length >= 8) {
                resolve("Erős jelszó");
            } else {
                reject("Túl rövid jelszó");
            }
        }, 1000);
    });
}

/*
jelszoEllenorzes("titok")
    .then(eredmeny => console.log(eredmeny))
    .catch(hiba => console.error(hiba));
*/

function duplaz(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n * 2), 500);
    });
}

/*
duplaz(2)
    .then(x => duplaz(x))
    .then(x => duplaz(x))
    .then(vegso => console.log(vegso)); // 16
*/

// HA nem használunk promise-t
async function szamitas() {
    try {
        let x = await duplaz(2);
        x = await duplaz(x);
        x = await duplaz(x);
        console.log(x); // 16
    } catch (e) {
        console.error(e);
    }
}

//szamitas();


function feladat(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Feladat ${id} kész`),  500);
    });
}

/*
Promise.all([
    feladat(1),
    feladat(2),
    feladat(3)
]).then(eredmenyek => {
    console.log(eredmenyek);
});
*/

function fajlBeolvas(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.onerror = () => {
            reject("Hiba a fájl beolvasása közben");
        };

        reader.readAsText(file);
    });
}

document.getElementById("fileInput").addEventListener("change", async (e) => {
    const file = e.target.files[0];

    try {
        const tartalom = await fajlBeolvas(file);
        document.getElementById("output").textContent = tartalom;
    } catch (err) {
        console.error(err);
    }
});
