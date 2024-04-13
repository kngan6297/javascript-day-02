var today = new Date();
var day = today.getDay();
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today is: " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = hour >= 12 ? " PM " : " AM ";
hour = hour >= 12 ? hour - 12 : hour;
console.log(
  "Current time is: " + hour + prepand + ": " + minute + " : " + second
);

//Excercise 2
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
today = mm + "-" + dd + "-" + yyyy;
console.log(today);
today = mm + "/" + dd + "/" + yyyy;
console.log(today);
today = dd + "-" + mm + "-" + yyyy;
console.log(today);
today = dd + "/" + mm + "/" + yyyy;
console.log(today);

//Exercise 3
function cToF(celsius) {
  var cTemp = celsius;
  var cToFahr = (cTemp * 9) / 5 + 32;
  var message = cTemp + "\xB0C is " + cToFahr + " \xB0F";
  console.log(message);
}
function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = ((fTemp - 32) * 5) / 9;
  var message = fTemp + "\xB0F is " + fToCel + "\xB0C";
  console.log(message);
}
cToF(60);
fToC(45);

//Exercise 4
function reverseString(str) {
  const strRev = Array.from(str).reverse().join("");
  console.log(strRev);
}
reverseString("Ly Thi Kim Ngan");

//Exercise 5
function isPossible(x, y, z) {
  if (x + y === z || x - y === z || x * y === z || x / y === z) {
    return true;
  }
  return false;
}
const x = 10;
const y = 30;
const z = 300;
if (isPossible(x, y, z)) {
  console.log(
    `Có thể thay thế $ bằng một trong các toán tử để có được ${x} $ ${y} = ${z}`
  );
} else {
  console.log(
    `Không thể thay thế $ bằng một trong các toán tử để có được ${x} $ ${y} = ${z}`
  );
}

//Excercise 6
function findKthGreatest(arr, k) {
  if (k <= 0 || k > arr.length) {
    return null;
  }
  const uniqueSorted = arr
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => b - a);
  const kthGreatest = uniqueSorted.find((value, index) => index === k - 1);
  return kthGreatest !== undefined ? kthGreatest : null;
}
const array = [3, 1, 4, 4, 2, 3, 5];
const k = 3;
const kthGreatest = findKthGreatest(array, k);
if (kthGreatest !== null) {
  console.log(`Phần tử lớn thứ ${k} trong mảng là: ${kthGreatest}`);
} else {
  console.log(`Đầu vào không hợp lệ hoặc k nằm ngoài phạm vi.`);
}
