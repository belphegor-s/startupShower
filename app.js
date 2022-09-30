const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "/public")));

const appRoutes = require("./routes/appRoutes");

app.use(appRoutes);

app.listen(PORT, () => {
  console.log(`Express server listening on - http://localhost:${PORT}`);
});
