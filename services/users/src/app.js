const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const db = require("./models");
const { v1Router } = require("./routes");
console.log(db.url);
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use("/api/v1", v1Router);

const PORT = process.env.USERS_DOCKER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Users services running on port: ${PORT}`);
});
