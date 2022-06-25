const express = require("express");
const cors = require("cors");
const path = require('path')
const usersRoute = require("./route/users");
const env = require ('dotenv');
env.config({ path: path.resolve(__dirname, '../.env') });

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use(usersRoute);


app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
