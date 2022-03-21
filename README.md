This project was developed using node version `14.17.4`. It's preferable to use the same version for running the project if you can.

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

- If you decided to change the server port, don't forget to also update the `VITE_API_BASE` variable inside the `.env` file. 
- In some places, some `window` properties have been memoized to improve performance. If you're using DevTools to check responsiveness, it's better to refresh the page after each change in viewport size. This way, memoized values will get updated.
