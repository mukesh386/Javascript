let Arr = [ 10,20,30,40,50];
console.log(Arr[0]);
console.log(Arr.length);
Arr[5]=7;
console.log(Arr);
console.log(Arr.pop());
// array metbod ----- date 30/9/26\
// 1 pop() -> delete from last // modify orginal array
// 2 shift()-> delete from start   // modify orginal array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

let myList = fruits.toString();
console.log(myList);
console.log(typeof myList);
console.log(myList[0]);
console.log(myList.length);
const fruits2= ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits2.join(" ");
console.log(fruits.copyWithin(2, 0));


/**push()     → add    → end
pop()      → remove → end

unshift()  → add    → beginning
shift()    → remove → beginning
 * 
 */
