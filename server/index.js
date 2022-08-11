const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res, res2) => {
  res.download("./fakeGenreService.js");
  res2.download("./fakeReadingService.js");
});

app.listen(4000);
