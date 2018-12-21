# People Hub

API ini memudahkan pengguna untuk mengatur data-data terkait orang-orang dan identitas, ciri-ciri, ataupun karakteristik mereka.

Dibuat dengan NodeJS, Express, MongoDB.

Cara install lokal (server sering internal error):

1. Clone repo ini
2. Masuk ke folder, jalankan 'npm install'
3. Install mongodb, jalankan 'mongod'
4. Jalankan 'node app.js'

API documentation:

~ means rootURL: localhost:8080

> ~/hub

GET: Get all hub.

POST: Create a hub, bergantung parameter pada request body.

DELETE: Delete all hub.

> ~/hub/:hubId

GET: Get the hub.

POST: Update the hub, bergantung parameter pada request body.

DELETE: Delete the hub.

> ~/hub/:hubId/people

GET: Get all people in the hub.

POST: Create a people (person), bergantung parameter pada request body.

DELETE: Delete all people.

> ~/hub/:hubId/people/:peopleId

GET: Get the people (person).

POST: Update a people (person), bergantung parameter pada request body.

DELETE: Delete the people (person).
