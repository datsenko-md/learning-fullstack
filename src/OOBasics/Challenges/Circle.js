/*
Circle.js
Реализуйте и экспортируйте по умолчанию класс Circle описывающий круг.
У круга есть только одно свойство - его радиус. Реализуйте методы getArea()
и getCircumference(), которые вычисляют и возвращают площадь и длину
окружности соответственно.

Примеры
const circle = new Circle(3);
circle.getArea(); // 28.274...
Подсказки
Площадь круга: πr2
Длина окружности: 2*πR
*/

// @ts-check

// BEGIN (write your solution here)
export default class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}
// END
