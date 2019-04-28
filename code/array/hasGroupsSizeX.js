export default deck => {
  if (deck.length < 2) return false;

  let list = {};
  deck.forEach(item => {
    list[item] = list[item] ? ++list[item] : 1;
  });
  let group = Object.values(list);
  let gcd = (a, b) => {
    return b > 0 ? gcd(b, a % b) : a;
  };
  let x = 0;
  for (const item of group) {
    x = gcd(item, x);
  }

  return x > 1;
};
