module.exports = function check(str, bracketsConfig) {
  const brackets = Object.fromEntries(bracketsConfig);
  const notClosedBrackets = [];

  for (e of str.split('')) {
      if (notClosedBrackets[0] == e) {
        notClosedBrackets.shift();
      } else if (brackets[e]) {
        notClosedBrackets.unshift(brackets[e]);
      } else {
          return false;
      }
  }
  return notClosedBrackets.length == 0;  
}
