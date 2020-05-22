const express = require("express");
const cors = require("cors");
const compression = require("compression");

const app = express();
app.use(cors());
app.use(compression());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("landing");
});

// Routes for death statistics
app.use("/api/usa/coronadeaths", require("./routes/deaths/deathRoutes"));
// Routes for cases statistics
app.use("/api/usa/coronacases", require("./routes/cases/casesRoutes"));
// Routes for daily report
app.use(
  "/api/usa/dailyreport",
  require("./routes/dailyReports/dailyReportsRoutes")
);

module.exports = app;
