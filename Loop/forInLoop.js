

var ob= {a:{name: 'Arpit'}, b:{name: 'yadav'}}
for (let [key, value] of Object.entries(ob)) {
    console.log(key, value); // "first", "one"

    console.log('--------------------');
 console.log(key[0]);
 console.log('--------------------')
  }
