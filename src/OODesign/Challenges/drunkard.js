/*
Пьяница — карточная игра, в которой побеждает тот игрок, который собирает все
карты. В нашей задаче используется модификация игры с двумя игроками. Игрокам
раздаётся равное количество карт. Игроки не смотрят в свои карты, а кладут их
в стопку рядом с собой. Затем каждый игрок снимает верхнюю карту и показывает
её сопернику. Тот игрок, чья карта оказалась большего номинала, берёт обе карты
и кладёт их к себе в колоду снизу (так что своя карта идёт первой). Если карты
имеют одинаковый номинал, то они выкидываются из игры. В игре возможны три
исхода:

У обоих игроков не осталось карт
Игра не может закончиться
Победил один из игроков
drunkard.js
Реализуйте и экспортируйте по умолчанию класс с методом run(), принимающим на
вход два списка чисел, которые представляют собой карты для первого и второгоигроков.

Если выиграл первый игрок, то метод должен вернуть First player. Round: <номер раунда>.
Если выиграл второй игрок, то метод должен вернуть Second player. Round: <номер раунда>.
Если у игроков не осталось карт, то метод должен вернуть Botva!
Если за 100 раундов не удалось выявить победителя то также возвращается Botva!
Реальные примеры смотрите в тестах.
*/

/* eslint-disable class-methods-use-this */
import _ from 'lodash';

// BEGIN (write your solution here)
// export default class Drunkard {
//   round() {
//     const card1 = this.cards1.pop();
//     const card2 = this.cards2.pop();
//     if (card1 > card2) {
//       this.cards1.unshift(card2, card1);
//     } else if (card1 < card2) {
//       this.cards2.unshift(card1, card2);
//     }
//     this.roundsCount += 1;
//   }

//   playable() {
//     return this.cards1.length > 0
//     && this.cards2.length > 0
//     && this.roundsCount < 100;
//   }

//   getResult() {
//     const { roundsCount, cards1, cards2 } = this;
//     const checks = [
//       {
//         message: 'Botva!',
//         check: () => (cards1.length === 0 && cards2.length === 0)
//           || roundsCount >= 100,
//       },
//       {
//         message: `Second player. Round: ${roundsCount}`,
//         check: () => cards1.length === 0,
//       },
//       {
//         message: `First player. Round: ${roundsCount}`,
//         check: () => cards2.length === 0,
//       },
//     ];
//     const { message } = checks.find(({ check }) => check());
//     return message;
//   }

//   run(cards1, cards2) {
//     this.cards1 = _.cloneDeep(cards1);
//     this.cards2 = _.cloneDeep(cards2);
//     this.roundsCount = 0;
//     while (this.playable()) {
//       this.round();
//     }
//     return this.getResult();
//   }
// }

export default class Drunkard {
  run(cards1, cards2) {
    const deck1 = _.cloneDeep(cards1);
    const deck2 = _.cloneDeep(cards2);

    for (let round = 0; round < 100; round += 1) {
      const deck1IsEmpty = deck1.length === 0;
      const deck2IsEmpty = deck2.length === 0;

      if (deck1IsEmpty && deck2IsEmpty) {
        return 'Botva!';
      } if (deck1IsEmpty) {
        return `Second player. Round: ${round}`;
      } if (deck2IsEmpty) {
        return `First player. Round: ${round}`;
      }

      const card1 = deck1.shift();
      const card2 = deck2.shift();

      if (card1 > card2) {
        deck1.push(card1, card2);
      } else if (card2 > card1) {
        deck2.push(card2, card1);
      }
    }

    return 'Botva!';
  }
}
// END
