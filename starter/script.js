

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


//ES5
function isFullAge5(limit){
    var argsArr = Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function(cur){
        console.log((2016 - cur) >= limit);
    })
}

isFullAge5(16, 1990, 1999, 1965, 2016, 1987);

//ES6
function isFullAge6(limit, ...years){
    years.forEach(cur => console.log((2016 - cur)>= limit));

}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);



//Default parameters

//ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality){
    lastName === undefined ? lastName = 'smith' : lastName = lastName;
    nationality === undefined ? nationality = 'mexican' : nationality = nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('john', 1990);



//ES6

function SmithPerson(firstName, yearOfBirth, lastName = 'smith', nationality = 'mexican'){
    
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('john', 1990);

//Maps

const question = new Map();
question.set('question','What is the official name of the latest major JavaScript');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set('correct', 3);
question.set('false','Wrong, please try again');

console.log(question.get('question'));
console.log(question.size);

if(question.has(4)){
    question.delete(4);
    console.log('answer 4 is here');
}

//delete all of them
question.clear();


question.forEach((value, key) => 
    console.log(`This is ${key} and it's set to ${value}`)
);


//hash table, distructuring
for (let [key, value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));

//class

//ES5
//function constructor
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
//function
Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

//function constructor
var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals){

    Person5.call(this, name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
}

//inheritance function
Athlete5.prototype = Object.create(Person5.prototype);

//function
Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
};

var john = new Athlete5('john', 1990, 'teacher', 3, 10);

john.calculateAge();
john.wonMedal();




//ES6

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6{
    constructor (name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();




// CODING CHALLENGE

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;
    }
    
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    
    classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}


const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {
    
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    
    return [sum, sum / arr.length];
    
}


function reportParks(p) {
    
    console.log('-----PARKS REPORT-----');
    
    // Density
    p.forEach(el => el.treeDensity());
    
    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
    
    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
    
}


function reportStreets(s) {
    
    console.log('-----STREETS REPORT-----');
    
    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
    
    // CLassify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);






const elements = [
    {
      "id": 1,
      "name": "oil",
      "parentId": [],
      "childrenIds": [2,3],
    },
    {
      "id": 2,
      "name": "olive oil",
      "parentId": [1],
      "childrenIds": [],
    },
    {
      "id": 3,
      "name": "sunflower oil",
      "parentId": [1],
      "childrenIds": [4],
    },
    {
      "id": 4,
      "name": "extra virgin olive oil",
      "parentId": [3],
      "childrenIds": [],
    },
  ];
  
  function getName(element) {
    let str = "";
    if (element.parentId[0]) {
      str += getName(elements[element.parentId[0] - 1]) + ", "
    } 
    return str += element.name;
  }
  
  elements.forEach(e => console.log(getName(e)));