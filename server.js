const express = require("express");
const app = express();
const mongoose = require("mongoose");

const users = require("./routes/users");
const profile = require("./routes/profile");
const posts = require("./routes/posts");

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/users", users);
// app.use("/api/posts", posts);
// app.use("/api/profile", profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server runnin on port ${port}`));
