// задача №1
const fill = (arraySize, value) => {
  return Array(arraySize).fill(value);
}

const data = 3;
const valueToFill = 'a';
console.log(fill(data, valueToFill))

// задача №2
const reverse = (array) => {
  return array.reverse()
 }

const data = [1, 2, 3];
console.log(reverse(data)); // [3, 2, 1]

// задача №3
const compact = (array) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number' && array[i] !== 0) {
      arr.push(array[i]);
    }
  }

  return arr;
}


const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]
