This project was developed using node version `14.17.4` and was also tested on node version `17.3.0`. It's preferable to use one of these versions for running the project if you can.

## Installation

`yarn`

## Start the Project

start both client and fake server:

`yarn server:dev`

This will start the dev server on port `3000`. You can manually change the port in the `vite.config.ts` file.
Fake server can be reached on port `3001`. You can change the fake server port in the `server/serve.js` file.

To run each of them individually:

`yarn dev` runs the client

`yarn server` runs the server

To get a better performance, you can also build the project first:

`yarn build && yarn start`

This will serve a production build on port `3000`.

## Notes

- File/Folder names are based on [AirBnB style guide](https://github.com/airbnb/javascript/tree/master/react#naming) 
- Creating new Google Map API key requires a billing account and I can't create one. A development version of the map will be shown, but if you want, you can add your own API key to the `VITE_GOOGLE_MAPS_API_KEY` variable of the `.env` file.
- If you decided to change the fake server port, don't forget to also update the `VITE_API_BASE` variable inside the `.env` file. 
