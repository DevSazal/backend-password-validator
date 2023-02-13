import express from 'express';
import { postPasswordValidation } from '../controllers/password';

const router = express.Router();

// initialize password related routes
router.post('/passwords', postPasswordValidation);

export { router as passwordValidatorAPI };
