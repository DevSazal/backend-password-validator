import { Request, Response } from 'express';
import { rules } from '../rules.json';
import { validator } from '../lib/helpers';

export const postPasswordValidation = async (request: Request, response: Response) => {
  const { password } = request.body;
  const { errors } = await validator(password, rules);

  if (errors.length > 0) return response.status(400).json({ errors });
  return response.status(204).json();
};
