require("dotenv").config();
const express = require("express");
const connnection = require("./api/db/db");
const csv = require("csv-writer");
const router = require("./api/routes/routes");
const bodyParser = require("body-parser");
const app = express();

connnection.sync().then(() => {
  console.log("Synced");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port number ${process.env.PORT}`);
});
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/api", router);
