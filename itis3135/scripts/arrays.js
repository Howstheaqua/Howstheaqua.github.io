let person = [];
let salaries = [];

window.onload = function ()
{
    document.getElementById("addSalary").onclick = addSalary;
    document.getElementById("displaySalary").onclick = displaySalary;
    document.getElementById("displayResults").onclick = displayResults;
    setFocusOnEmployee();
}

function displayResults(){
    // get average of salaries
    let total = 0;
    for(let i = 0; i < salaries.length; i++){
        total += salaries[i];
    }
    let average = total / salaries.length;
    // get highest salary
    let highest = 0;
    for(let i = 0; i < salaries.length; i++){
        if(salaries[i] > highest){
            highest = salaries[i];
        }
    }
    resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = '<h2>Results</h2><p>Average Salary: ' + average + '</p><p>Highest Salary: ' + highest + '</p>';
}
function addSalary(){
    let select = document.getElementById("employee");
    let value = select.options[select.selectedIndex].value;
    if(value === "default"){
        alert("Please select an employee");
        setFocusOnEmployee();
        return;
    }
    let salary = parseFloat(document.getElementById("salary").value);
    if(isNaN(salary)){
        alert("Salary must be a number");
        document.getElementById("salary").focus();
        return;
    }
    else{
        person.push(value);
        salaries.push(salary);
        setFocusOnEmployee();
    }
}

function displaySalary(){
    table = document.getElementById('results-table');
    table.innerHTML = '<tr><th>Name</th><th>Salary</th></tr>';
    for(let i = 0; i < person.length; i++){
        table.innerHTML += '<tr><td>' + person[i] + '</td><td>' + salaries[i] + '</td></tr>';
    }
}
function setFocusOnEmployee(){
    document.getElementById("employee").focus();
}