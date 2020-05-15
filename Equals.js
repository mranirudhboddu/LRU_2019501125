function deepEqual(a, b) {
    if (a === b) {
     
      return true;
    } else if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
       
      let keys = Object.keys(a).concat(Object.keys(b));
      
      for (p of keys) {
        if (typeof a[p] === 'object' && typeof b[p] === 'object') {
          if (deepEqual(a[p], b[p]) === false) {
            return false;
          }
        } else if (a[p] !== b[p]) {
          return false;
        }
      }
      return true;
    } else {
     return false; 
    }
  }

obj1 = {fn:"Anirudh",ls:"Boddu"}
obj2 = {fn:"Anirudh",number:125}
obj3 = {fn:"Anirudh",ls:"Boddu"}

str1 = "Anirudh"
str3 = "good"
str2 =  125
console.log(deepEqual(obj1,obj2))
console.log(deepEqual(obj1,obj3))
console.log(deepEqual(str2,str1))
console.log(deepEqual(str1,str1))