const student = {
  name: "Prachi",
  age: 21,
  marks: [70, 80, 90]
};

console.log(`Name: ${student.name}`);
student.age = 22;

for (let i = 0; i < student.marks.length; i++) {
  console.log(`Mark: ${student.marks[i]}`);
}
