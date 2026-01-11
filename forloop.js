const marks = [70, 80, 90];
let total = 0;

for (let i = 0; i < marks.length; i++) {
  total = total + marks[i];
}

const average = total / marks.length;

console.log("Total:", total);
console.log("Average:", average);
