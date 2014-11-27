/*
This is a javascriptfile to create the initial data on mongodb
to be executed in mongo shell

Use:
$ mongo -u thabit -p thabit dbserver.com:27017/thabit mongo-initial-data.js

*/

db.client.insert({
	identifier: 'tester',
	ip: '127.0.0.1',
	createdAt: new Date(),
	updatedAt: new Date()
});
