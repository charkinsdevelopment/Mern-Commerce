import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.listen(port, () => {
  console.log("serve at http://localhost:" + port);
});
