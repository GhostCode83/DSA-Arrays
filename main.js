const Array = require('./array')

function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  arr.pop();
  arr.pop();
  arr.pop();

  arr.get(0)
  arr._resize(1)
  arr.push("tauhida");


  console.log(arr)
}

main()
console.log('hello')


function URLify(string) {
  let newString = string.replace(' ', '%20')
  return newString
}

console.log(URLify('tauhida parveen'))
console.log(URLify('www.thinkful.com /tauh ida parv een'))

function filter(array) {

}

console.log(filter(1, 2, 4, 5, 6, 7, 8, 9))
console.log(filter(5, 6, 7, 8, 9))
console.log(filter(1, 2, 4, 5, 6))