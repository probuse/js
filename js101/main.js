var names = new Array('etwin', 'ray', 'magic');

names.push('Him');
names.push('Pro');

names.forEach(function(number) {
    console.log(number);
});

// objects 
var person = {
    name: "etwin",
    name2: "Nimar",
    age: 100,
    children: ['Him', 'Ray', 'Glaucon'],
    address: {
        city: "Earth",
        number: "00002992929",
        location: "some where on earth"
    }, 
    fullName: function() {
        return this.name + " " + this.name2;
    }
}
// object constructor
function Animal(name, color, owner) {
    this.name = name;
    this.color = color;
    this.owner = owner;

    this.describe = function() {
        return this.owner + " owns " + this.name;
    }
}

var scooby = new Animal("Scooby", "black", person.name);

//  alert(scooby.describe());

// events
function doClick() {
    alert("You clicked Me!")
}

function changeText() {
    var heading = document.getElementById("heading");
    heading.innerHTML = "You Clicked the Button!"
}

function showDate() {
    var time = document.getElementById('time');
    time.innerHTML = Date();
}

function clearDate() {
    var time = document.getElementById('time');
    time.innerHTML = "";
}

// forms
function changeBackground(x) {
    var heading = document.getElementById("heading");
    heading.style.color = x.value;
}

function validateForm() {
    var firstName = document.forms["myForm"]["firstName"].value;

    if (firstName == null || firstName == ""){
        alert("First Name is required");
        return false;
    }
    if (firstName.length < 3) {
        alert("First Name must be atleast 3 characters");
        return false;
    }
}
