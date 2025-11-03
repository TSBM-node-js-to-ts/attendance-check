import express from 'express';

const router = express.Router();

router.get('/members', (req, res) => {
  res.send('TODO: Members API (GET)');
});

router.post('/members', (req, res) => {
  res.send('TODO: Members API (POST)');
});

router.put('/members/:id', (req, res) => {
  res.send('TODO: Members API (PUT)');
});

router.delete('/members/:id', (req, res) => {
  res.send('TODO: Members API (DELETE)');
});

export default router;