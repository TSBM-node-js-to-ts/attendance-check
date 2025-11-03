import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("TODO: Members API (GET)");
});

router.post("/", (req, res) => {
  res.send("TODO: Members API (POST)");
});

router.put("/:id", (req, res) => {
  res.send("TODO: Members API (PUT)");
});

router.delete("/:id", (req, res) => {
  res.send("TODO: Members API (DELETE)");
});

export default router;
