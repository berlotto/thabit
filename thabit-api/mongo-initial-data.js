/*
This is a javascriptfile to create the initial data on mongodb
to be executed in mongo shell

Use:
$ mongo host:27014/thabit mongo-initial-data.js

*/

conn = new Mongo('meuservidor.com');

db = conn.getDB('thabit');

db.client.insert({
	identifier: 'local',
	ip: '127.0.0.1',
	createdAt: new Date(),
	updatedAt: new Date()
});
