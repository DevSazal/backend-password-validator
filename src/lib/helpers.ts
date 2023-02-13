import { RuleType } from './../types';

/**
 * To validate string by following the set of regular expression
 * to handle error messages
 * @param {string} password - string value
 * @param {RuleType} rules
 * @return {Object} errors - array object value
 */
export const validator = async (
  password: string,
  rules: RuleType,
): Promise<{ errors: string[] }> => {
  const errors: string[] = [];

  rules.forEach((index: { rule: string; message: string }) => {
    if (password.match(new RegExp(index.rule, 'g'))) {
      errors.push(index.message);
    }
  });

  return { errors };
};
