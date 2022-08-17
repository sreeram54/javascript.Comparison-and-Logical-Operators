var a = 10, 
    b = 20; 

console.log(a >= b);  // false
console.log(a == 10); // true

var  name1 = 'alice',
    name2 = 'bob';    

var result = name1 < name2;
console.log(result); // true
console.log(name1 == 'alice'); // true

var apple = {
    valueOf: function () {
      return 10;
    },
  };
  
  var orange = {
    toString: function () {
      return '20';
    },
  };
  console.log(apple > 10); // false
  console.log(orange == 20); // true
  