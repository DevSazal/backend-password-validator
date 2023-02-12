import { PasswordBatchValidation } from './scripts/PasswordBatchValidation';

const KernelRegistry = (async () => {
  /**
   * register script
   * which will run by console
   */
  await PasswordBatchValidation();

  console.log('CLI works fine!');
})();
