const companyName = 'Effable Hedgehog';
var quillCount = 0;
function scriptTest(){
    alert('This is a test!');
}
function promptUser(){
    var name = document.getElementById('name').value;
    var mood = document.getElementById('mood').value;
    var greeting = "The " + companyName + " welcomes you, " + name + "! We're glad you are doing " + mood;
    document.getElementById('greeting').innerHTML = greeting;
}

function getTodaysDate(){
    var todaysDate = new Date();
    var dateString = 'Today is ' + todaysDate.getHours() + ':' + todaysDate.getMinutes() + ' on ' + todaysDate.toLocaleString('default', {weekday: 'long'}) + ', ' + todaysDate.getDate() + ' ' + todaysDate.toLocaleString('default', {month: 'long'}) + ', ' + todaysDate.getFullYear();
    return dateString;
}

function incrementQuillCount(){
    quillCount += 1;
    document.getElementById('quillCount').innerHTML = 'Quill Count: ' + quillCount;
}

function findPerimeterOfRectangle(length, width){
    return (2 * width) + (2 * length);
}

function perimeterTask(){
    var length = parseFloat(prompt("Enter the length of the rectangle: "));
    var width = parseFloat(prompt('Enter the width of the rectangle: '));
    var perimeter = findPerimeterOfRectangle(length, width);
    document.getElementById('perimeter').innerHTML = 'Perimeter of Rectangle with width ' +
        width + ' and length ' + length + ' is ' + perimeter;
}

document.getElementById('date').innerHTML = getTodaysDate();