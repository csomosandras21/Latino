const { describe, it, before, after } = require('node:test');
const mongoose = require('mongoose');
const assert = require('node:assert');
const http = require('node:http');
const app = require('../../server.js');

let server;
let port;

describe('GET /api/parfumes-backend tesztelése', () => { 
    
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
    
    it('A parfümök lekérése!', async () => {
        const response = await fetch(`http://localhost:${port}/api/parfumes-backend`);
        
        // const valasz = await response.json();
        
        assert.equal(response.status, 200, 'Sikeres lelérés!');
    });
});