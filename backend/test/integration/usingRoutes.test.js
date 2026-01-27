const { describe, it, before, after } = require('node:test');
const mongoose = require('mongoose');
const assert = require('node:assert');
const http = require('node:http');
const app = require('../../server.js');

let server;
let port;

describe('POST /api/users-backend tesztelése', () => { 
    
   before(async () => {
		await mongoose.connect(process.env.DBSTRING);
		
		server = http.createServer(app);
		await new Promise(resolve => server.listen(0, resolve));
		port = server.address().port;
	});	
    
after(async () => {
		await mongoose.connection.close();
		await new Promise(resolve => server.close(resolve));
	});
    
    it('Ezekkel az adatokkal van felhasználó!', async () => {
        const response = await fetch(`http://localhost:${port}/api/users-backend`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nev: 'andras',
                email: 'csomos.andras.istvan@szbiszeged.hu',
                jelszo: 'andras'
            })
        });

        const valasz = await response.json();
        console.log(valasz);
        assert.strictEqual(response.status, 200, 'Beléphetsz!');
    });

    it('Ezekkel az adatokkal nincsen felhasználó!', async () => {
        const response = await fetch(`http://localhost:${port}/api/users-backend`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nev: 'andras',
                email: 'csomos.andras.istvan1@szbiszeged.hu',
                jelszo: 'andras'
            })
        });

        const valasz = await response.json();
        console.log(valasz);
        assert.strictEqual(response.status, 401, 'Nem léphetsz be!');
    });

    it('Ezekkel az adatokkal nem léphetsz be!', async () => {
        const response = await fetch(`http://localhost:${port}/api/users-backend`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nev: 'andras',
                email: 'csomos.andras.istvan@szbiszeged.hu',
                jelszo: 'andras1'
            })
        });

        const valasz = await response.json();
        console.log(valasz);
        assert.strictEqual(response.status, 403, 'Nem léphetsz be!');
    });
});