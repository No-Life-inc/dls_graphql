# How to initialize frontend_backend_db from scratch

## For Docker image:
open terminal in initialization folder

### 'docker build -t mongo_db .'

When it has completed you can start a container:

### 'docker run -d --name mongo_db_instance -p 27017:27017 mongo_db'

in MongoDB Compass access the server through:

### 'mongodb://admin:Passw0rd!@localhost:27017/admin'