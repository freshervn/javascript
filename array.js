let fruits = ['Banana', 'Apple','Orange','pineapples'];
fruits = new Array('banana','apple','orange','pineapples');
fruits[0]='pear';
console.log(fruits[2]);
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
console.log(fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(),fruits);
console.log(fruits.push("blackberries"),fruits);
console.log(fruits[4]);
fruits[4]='new fruit';
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift('kiwi');
console.log(fruits);

let vegetables =['asparagus','tomato','broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumber =[5,10,2,25,3,255,1,2,5,334,321,2];
console.log(someNumber.sort(function(a,b){return b-a}));
console.log(someNumber.sort(function(a,b){return a-b}));
let emptyArray= new Array;
for (let num=0; num <10 ;num++){
    emptyArray.push(num);
}
console.log(emptyArray);