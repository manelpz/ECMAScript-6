

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



//ES5 example THIS

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        //key value
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number '+ self.position + ' and it is '+ self.color;
            alert(str);
        });
    }
}
box5.clickMe();


//ES6

const box6 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', function(){
            let str = 'This is box number '+ this.position + ' and it is '+ this.color;
            alert(str);
        });
    }
}
box6.clickMe();


//ES5

function Person(name) {
    this.name = name;    
}
//for accessing to THIS adding binding()
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el){
        return this.name + ' is friends with '+ el;
    }.bind(this));
    
    console.log(arr);
}

var friends = ['Bob','Jane', 'Mark'];

new Person('john').myFriends5(friends);


//ES6
function Person(name) {
    this.name = name;    
}
//for accessing to THIS adding binding()
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`
    );
    
    console.log(arr);
}


//destructuring

//ES5
var john = ['John', 29];
var name = john[0];
var age = john[1];

//ES6

const [name, age] = john['john', 29];

//Objects

const obj = {
    firstName: 'john',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;

const {firstName: a, lastName: b} = obj;

//fucntions
function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);


//Arrays

const boxes = document.querySelectorAll('.box');

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

//ES6
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');



//array ES5

for(var i = 0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue'){
        continue;
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}

//array ES6
for(const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

//array ES5

var ages = [12,14,22,11];

var full = ages.map(function(cur){
    return cur >= 18;
});

console.log(full);// false false true false
console.log(full.indexOf(true));// 2
console.log(ages[full.indexOf(true)]);


//array ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));


//spread

    function addFourAges(a,b,c, d){
        return a+b+c+d;
    }
    var sum1 = addFourAges(12,13,15,34);
    console.log(sum1);

    //ES5 send from array to variable
    var ages = [12, 13, 15, 34];
    var sum2 = addFourAges.apply(null, ages);
    console.log(sum2);

    //ES6

    const sum3 = addFourAges(... ages);
    console.log(sum3);

//example
const familySmith = ['john', 'Jane', 'Mark'];
const familyMiller = ['Mary','bob'];
const bigFamily = [...familySmith, 'lilly',...familyMiller];

//example
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');


//Rest parameters

//ES5
function isFullAge5(){
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur){
        console.log((2016 - cur) >= 18);
    })
}

isFullAge5(1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(...years){
    years.forEach(cur => console.log((2016 - cur)>= 18));

}

isFullAge6(1990, 1999, 1965, 2016, 1987);












