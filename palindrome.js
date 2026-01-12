let str = "madam";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed = reversed + str[i];
}

if (str === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}




let num = 121;
let original = num;
let reversed = 0;

while (num > 0) {
  let digit = num % 10;
  reversed = reversed * 10 + digit;
  num = Math.floor(num / 10);
}

if (original === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}
