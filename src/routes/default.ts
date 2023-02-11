import express from 'express';
const router = express.Router();

router.get('/api/v1/*', (req, res) => {
  res.status(200).send({ message: 'Guten Tag! Sie haben sich erfolgreich mit dem API-Endpunkt verbunden.' });
});

export { router as defaultAPI };
