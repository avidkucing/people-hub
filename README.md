*People Hub

API ini memudahkan pengguna untuk mengatur data-data terkait orang-orang dan identitas, ciri-ciri, ataupun karakteristik mereka.

Dibuat dengan NodeJS, Express, MongoDB.

Cara install lokal (server sering internal error):

1. Clone repo ini
2. Masuk ke folder, jalankan 'npm install'
3. Install mongodb, jalankan 'mongod'
4. Jalankan 'node app.js'

API documentation:

rootURL: localhost:8080

~/hub
    get: get all hub
    post: create a hub, bergantung parameter pada request body
    delete: delete all hub

~/hub/:hubId
    get: get the hub
    post: update the hub, bergantung parameter pada request body
    delete: delete the hub

~/hub/:hubId/people
    get: get all people in the hub
    post: create a people (person), bergantung parameter pada request body
    delete: delete all people

~/hub/:hubId/people/:peopleId
    get: get the people (person)
    post: update a people (person), bergantung parameter pada request body
    delete: delete the people (person)