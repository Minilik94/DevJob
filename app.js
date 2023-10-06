const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const jobRouter = require("./routes/jobRoutes");
// const { handler } =  require('./client/build/handler');

const app = express();
app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname, "client", "dist")));

// // Handle all other routes with the Svelte app
// app.use(express.static(`${__dirname}/client`));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client"));
// });

// app.get('/', (req, res) => {
//   res.send('Welcome To Books API');
// });

app.use(express.static(`${__dirname}/client/build`));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.get("*", (req, res) => {
//   res.sendFile(`${__dirname}/client/app.html`);
//   console.log(`${__dirname}`);
// });
app.use("/api/v1/jobs", jobRouter);
// Handle client-side routing with SvelteKit
import("././client/build/handler.js").then(({ handler }) => {
  app.use(handler);
});

module.exports = app;
