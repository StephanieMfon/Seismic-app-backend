# Seismic-app-backend

### Brief Section

This is the backend codebase repo for MIS (Management Information Systems) services.

### Pre-requisite

To clone this repository, you can head over to [GitHub Repository](https://github.com/StephanieMfon/Seismic-app-backend.git). the major requirements for this API is shown below

- NodeJS (npm)
- Mongoose
- .env (Environment Variables)

| Variable | Data Type | Allowed Values                       |
| -------- | --------- | ------------------------------------ |
| PORT     | Number    | Default: 3001                        |
| NODE_ENV | String    | production&nbsp;\|&nbsp; development |
| DB_URL   | String    | mongodb url                          |

> These variables are required and the API cannot work well without them! :joy:

### Starting the API

first run `npm install` to install the necessary dependencies

after the dependencies are installed, type `npm start` and visit the api from `http://localhost:{port}/`. default port is `3001`

### Current Available Endpoints

> All endpoints accept JSON objects and returns JSON objects

### Author

[Stephanie Okpo-Mfon](https://github.com/StephanieMfon)
