import request from 'supertest';
import { app } from '../../src/app';

// tests for password validation api
// mock error response

const errorResponse = {
  errors: [
    'Your password must be at least 5 characters.',
    'Your password contains more than two repeating consecutive characters, which is not allowed.',
    'Your password must contain at least one upper-case character OR one special character.',
    'Your password must contain at least one digit.',
  ],
};

/*
 * POST /passwords
 * WHEN password: Philipp@#5
 */
it('return passed if the strategies valid', async () => {
  const response = await request(app)
    .post('/passwords')
    .set('Content-Type', 'application/json')
    .send({ password: 'Philipp@#5' });

  expect(response.status).toBe(204);
});

/*
 * POST /passwords
 * WHEN password: bbbo
 */
it('returns error if the strategies fail', async () => {
  const response = await request(app)
    .post('/passwords')
    .set('Content-Type', 'application/json')
    .send({ password: 'bbbo' });

  expect(response.status).toBe(400);
  expect(response.body).toEqual(errorResponse);
});
