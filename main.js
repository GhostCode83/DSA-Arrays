const Array = require('./array')
const memory = require('./memory')


let arr = new Array();

function main() {
  Array.SIZE_RATIO = 3;

  arr.push(3);
  //length and capacity go from zero to one and three respectively
  arr.push(5);
  //length increases, capacity stays the same because we made extra room.  constant
  arr.push(15);
  //length and capacity at three
  arr.push(19);
  //memory address/pointer changes for the first time to three.  length to four, capacity to 12
  arr.push(45);
  arr.push(10);
  //the length increases by one as each memory address is filled with data. the capacity increases by multiplying the currenct capacity plus 1 times three.((3 +1)*3) 

  arr.pop();
  arr.pop();
  arr.pop();
  //length reduced to three, capacity and address did not change.  the capacity would not change, because the length of the array did not change, just the content in each index.
  console.log(arr)
}
main()


function lessThanFive(val) {
  for (let i = 0; i < val.length; i++) {
    if (val[i] < 5) {
      console.log('val', val[i])
      console.log('arr', arr)
    }
  }
  return val
}

console.log(lessThanFive([1, 2, 4, 5, 6, 7, 8, 9]))
console.log(lessThanFive([5, 6, 7, 8, 9]))
console.log(lessThanFive([1, 2, 5, 6]))


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