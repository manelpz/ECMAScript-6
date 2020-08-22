

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