import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HERO GEMINI BRIDGE is running!");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", project: "HERO GEMINI BRIDGE" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`HERO GEMINI BRIDGE running on port ${PORT}`);
});
