import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello" });
});

app.listen(PORT, () => {
  console.debug(`Server listening on port ${PORT}...`);
});
