const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const elasticClient = require("./elasctic-client");

const port = process.env.PORT || 5000;
const app = express();
//apply middleware
app.set("trust proxy", 1);
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());

app.get("/all-profile", async (req, res) => {
  const result = await elasticClient.search({
    index: "profile-scientifique",
    query: { match_all: {} },
  });

  res.send(result);
});

app.listen(port, () => {
  console.log("Its working");
});
