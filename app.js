const express = require("express");
const cors = require("cors");
const compression = require("compression");

const app = express();
app.use(cors());
app.use(compression());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.render("landing");
});

// US Routes
// Routes for US cases statistics
app.use("/api/usa/coronacases", require("./routes/cases/casesRoutes"));
// Routes for US death statistics
app.use("/api/usa/coronadeaths", require("./routes/deaths/deathRoutes"));
// Routes for US daily report
app.use(
  "/api/usa/dailyreport",
  require("./routes/dailyReports/dailyReportsRoutes")
);

// Global Routes
// Routes for Global cases statistics
app.use("/api/global/coronacases", require("./routes/cases/globalCaseRoutes"));

module.exports = app;
