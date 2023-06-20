const isSeller = (person) => person.slice(-1) === 'm';

const breadthFirstSearch = (name, graph) => {
  const queue = [];
  queue.push(...graph[name]);
  const searched = [];
  while (queue.length > 0) {
    const person = queue.shift();
    if (!searched.includes(person)) {
      if (isSeller(person)) {
        // console.log(`${person} is mango seller!`);
        return person;
      }
      queue.push(...graph[person]);
      searched.push(person);
    }
  }
  return false;
};

export default breadthFirstSearch;
