import express from "express";
import path from "path";

const app = express();
const port = 5000;
const publicPath = path.resolve(import.meta.dirname, "..");

app.use(express.static(publicPath));

app.get("/", (_req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Static server serving on port ${port}`);
});