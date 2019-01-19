
const test ={hey: 'Hey!!'}
const check ={
    __proto__: test
}
// can directly access property through check. 
console.log(check.hey);


// Second Example
const parent ={
    y:'tesing', 
    test:()=> 'Ting tiding'
}

const child ={
    __proto__: parent, 
    test(){
        return super.test() + ' Surprize'
    }
}
console.log(child.test());
