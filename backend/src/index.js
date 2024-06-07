require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./database");
const Analytics = require("./analyticsSchema");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ success: "You accessed home route" });
});
app.get("/analytics", async (req, res) => {
  const analytics = await Analytics.find({});

  if (analytics) {
    return res.status(200).json(analytics);
  } else {
    return res
      .status(404)
      .json({ "Not Found": "The analytics data was'nt found" });
  }
});
app.get("/analytics/:email", async (req, res) => {
  const { email } = req.params;

  const analytics = await Analytics.find({ email: email }).exec();

  if (analytics) {
    return res.status(200).json(analytics);
  } else {
    return res
      .status(404)
      .json({ "Not Found": "The analytics data was'nt found" });
  }
});
app.post("/analytics", async (req, res) => {
  const { email, totalComponents, percentualMicroplastic, quantityTests } =
    req.body;

  console.log(req.body)

  if (email && totalComponents && percentualMicroplastic && quantityTests) {
    return res.status(200).json(
      await Analytics.create({
        email: email.toLowerCase(),
        totalComponents: totalComponents,
        percentualMicroplastic: percentualMicroplastic,
        quantityTests: quantityTests,
      })
    );
  } else {
    return res.status(400).json({ Error: "Bad Request" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
