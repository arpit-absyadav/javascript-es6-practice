async function test() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('hello');
  //     }, 5000);
  //   }); //working
  setTimeout(() => {
    return 'hello';
  }, 5000);
}

async function asyncTest() {
  let test1 = await test();
  console.log('test1');
  console.log(test1);
  console.log('test1');
}

function promTest() {
  return new Promise((resolve, reject) => {
    resolve('hell');
  });
}
promTest().then(res => console.log(res));

// asyncTest();
