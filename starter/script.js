

//blocks IFFEs


{
    const a = 1;
    let b = 1;
    var c = 3;
}

(fucntion(){
    var  c = 3;
})();




//strings

/*
template literals
*/

console.log(`some random text and then ${variable} and other ${variable2}`);

const n = `emmanuel lopez`;
console.log(n.startsWith('e'));
console.log(n.endsWith('z'));
console.log(n.includes('z'));

console.log(`${variable}`.repeat(5));


//arrow fucntions
const years = [1990, 1980, 2000, 2010];

//ES5
var ages5 = years.map(function(el){
    return 2020 - el;
});

console.log(ages5);

//ES6

let ages6 = years.map(el => 2020 - el);
console.log(ages6);

//two parameters
ages6 = years.map((el, index) => `Age element ${index +1}: $ ${el}.`);
console.log(ages6);

//more thatn 1 line

ages6  = years.map((el, index)=>{
    const now = new Date().getFullYear();

    const age = now - el;
    return `Age element ${index + 1}: ${age}`;
});

console.log(ages6);
