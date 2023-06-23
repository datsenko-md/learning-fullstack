/**
 * Валидация - процесс проверки корректности данных. В вебе происходит
 * всегда при отправке форм, например, регистрация на многих сайтах проверяет
 * корректность введённого емейла, его уникальность (что такого пользователя ещё нет).
 * Каждый тип валидации в таких системах обычно представлен классом-валидатором, который
 * принимает на вход опции и предоставляет интерфейс в виде функции validate().
 * Эта функция принимает на вход то, что проверяется (валидируется) и возвращает массив или
 * объект с ошибками. Если объект пустой, значит ошибок нет.

solution.js
Реализуйте и экспортируйте по умолчанию класс PasswordValidator, ориентируясь на тесты.

Этот валидатор поддерживает следующие опции:

minLength (по умолчанию 8) - минимальная длина пароля
containNumbers (по умолчанию true) - требование содержать хотя бы одну цифру
Опции передаются одним объектом в конструктор валидатора.

const validator = new PasswordValidator({ containNumbers: false });
validator.validate('qwertyui'); // {}
validator.validate('qwerty'); // { minLength: 'too small' }
Объект ошибок в ключах содержит название опции, а в значениях текст, указывающий
на ошибку (тексты можно подсмотреть в тестах).
*/

const hasNumber = (string) => (string.search(/\d/) !== -1);

// BEGIN (write your solution here)
class PasswordValidator {
  static checks = {
    minLength: {
      check: (password, length) => password.length < length,
      message: 'too small',
    },
    containNumbers: {
      check: (password, containNumbers) => hasNumber(password) !== !!containNumbers,
      message: 'should contain at least one number',
    },
  };

  constructor(options = {}) {
    const defaultOptions = {
      minLength: 8,
      containNumbers: true,
    };
    this.options = { ...defaultOptions, ...options };
  }

  validate(password) {
    return Object.entries(this.constructor.checks)
      .filter(([key, { check }]) => check(password, this.options[key]))
      .reduce((acc, [key, { message }]) => ({ ...acc, [key]: message }), {});
  }
}

export default PasswordValidator;
// END
