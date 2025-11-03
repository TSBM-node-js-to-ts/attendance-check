import express from "express";
import memberRoutes from "./routes/member.js";

const app = express();

app.use("/members", memberRoutes);

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
