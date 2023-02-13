import express from 'express';
const router = express.Router();

router.get('/*', (req, res) => {
  res.status(200).send({
    message: 'Guten Tag! Sie haben sich erfolgreich mit dem API-Endpunkt verbunden.',
  });
});

export { router as defaultAPI };
