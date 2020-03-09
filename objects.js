let student={
    first:'Rafeh', 
    last:'Qazi',
    age:19,
    height:170,
    fullname: function () {
        return this.first+" Thanh "+this.last;
    }
 };
console.log(student.first);
console.log(student.last);
student.first="Bui";
student.last="Dat";
console.log(student.fullname());
console.log("\n",student.age);