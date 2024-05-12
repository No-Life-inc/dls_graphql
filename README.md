# dls_frontend_backend

## Contributors

- Morten Bendeke
- Betül Iskender
- Yelong Hartl-He
- Zack Ottesen

## General Use
This is the Graphql component which connects the read-only MongoDB to the Frontend application.<br>
The repo is divided into folders with the respective responsibilities:
- App: Contains code to starting the endpoint.
- Grahpql: Contains the schema and related graphql code.
- Mongoose: Contains code regarding mapping the entities in the MongoDB to be used in Graphql.

## Environment Variables
Create a .Env in the root folder.

- PORT=4000
- MONGOUSER=admin
- MONGOPW=Passw0rd!
- MONGOURL=@localhost:27017/admin
- JWT_SECRET='MmIxM2Q1NjNmNjA1YjNiYjZiNWY0M2VjOTVhMmFhZWVmMWQ3ODAwNDlkOTFkNjJlMGQ3YzA0ZDcwZDQ2ZGU0NA=='


## How To Run
Make sure the environment variables are set.<br>
Run npm i to install dependencies.<br>
Lastly, use the following command:

```bash
npx nodemon app/index.ts
```

## Dependencies
Dependencies are documented in the package.json file located in the root folder.