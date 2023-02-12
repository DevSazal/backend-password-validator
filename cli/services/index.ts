import { app } from './../../src/app';
import colors from 'colors/safe';
import request from 'supertest';

export const passwordPolicyTester = async (password: string) => {
  const response = await request(app)
    .post('/api/v1/passwords')
    .set('Content-Type', 'application/json')
    .send({ password });

  console.log('\n');

  if (response.body.errors) {
    console.log(colors.yellow(`${password} is invalid.`));
    console.log(colors.red(response.body));
    return 0;
  }
  console.log(colors.green(`${password} is valid.`));
  return 1;
};
