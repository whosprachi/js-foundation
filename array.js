const fruits = [];

fruits.push("Apple");
fruits.push("Banana");
fruits.push("Mango");

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i}: ${fruits[i]}`);
}

fruits.pop();
console.log("After removing last fruit:", fruits);
