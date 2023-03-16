// https://ru.hexlet.io/challenges/js_basics_happy_ticket_exercise

// const isHappyTicket = (num) => {
//   const center = num.length / 2;
//   let sum = 0;
//   for (let i = 0; i < num.length; i += 1) {
//     const curr = Number(num[i]);
//     sum += i < center ? curr : -curr;
//   }

//   return sum === 0;
// };

const isHappyTicket = (num) => {
  let balance = 0;
  for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
    // balance += Number(num[i]);
    // balance -= Number(num[j]);
    balance += +num[i] - +num[j];
  }

  return balance === 0;
};

export default isHappyTicket;
