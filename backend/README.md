# Research Survey Backend

This server-side application is the backend to the research-survey web application

## Project Details

- Developed with Express.js
- Persists data to MongoDB Atlas
- Deployed to Heroku

Link to [research-survey-frontend](../frontend/README.md) details

## Installation

Navigate in the terminal to backend/src directory, and execute

```
$ npm install
```

## Running the App

Navigate in the terminal to backend/src directory, and execute

```bash
# development
$ npm run dev

# production mode
$ npm run start
```

## Configuring

This application utilizes dotenv to host environment variables. Add a file named config.env to the 'src/config' directory, then include the contents of the config.env.example found within this folder

## Deploying to Heroku

To deploy to Heroku you will need to push the backend/src subdirectory specifically. When ready to deploy, navigate to the root level of the project in the terminal and execute:

```bash
# create a new branch 'deploy' containing only the src subdirectory content
$ git subtree split --prefix backend/src -b deploy

# push the newly created branch to Heroku
$ git push heroku deploy:master
```

## Deployed URL

https://research-survey.herokuapp.com/
