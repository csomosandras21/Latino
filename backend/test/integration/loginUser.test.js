const { describe, it, before, after } = require('node:test');
const mongoose = require('mongoose');
const assert = require('node:assert');
const http = require('node:http');
const app = require('../../server.js');

let server;
let port;

describe('POST /api/new-user-login tesztelése', () => { 
    
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
    
    it('Felhasználó beléptetése!', async () => {
        const response = await fetch(`http://localhost:${port}/api/new-user-login`, {
            method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: 'lazar@gmail.com',
                password: 'lazar'
			})

    
        });
        const valasz = await response.json();

		console.log(valasz);
		assert.equal(response.status, 200, 'Sikeres belépés!!');    
    });
});