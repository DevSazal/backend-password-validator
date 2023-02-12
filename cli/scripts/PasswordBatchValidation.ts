import { connection } from './../../src/database/mysql';
import { passwordPolicyTester } from './../services';

const boot = async () => {
  await batchValidator();
  console.log('Cool! Boot method called.');
};

const batchValidator = async () => {
  connection.query('SELECT * FROM passwords', (err, rows) => {
    if (err) throw err.message;

    rows.forEach((tuple: { password: string; valid: number }) => {
      passwordPolicyTester(tuple.password).then((value) => {
        connection.query(
          `UPDATE passwords SET valid = ${value} WHERE password = '${tuple.password}'`,
          (err, result) => {
            if (err) throw err.message;
          },
        );
      });
    });
  });
};

export { boot as PasswordBatchValidation };
