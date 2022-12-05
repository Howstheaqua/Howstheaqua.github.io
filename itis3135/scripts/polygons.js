let num_of_sides = 0
function getNumber()
{
    num_of_sides = Math.abs(parseInt(prompt("The Effable Hedgehog would like to know how many sides your polygon has(0-10): ")));
    while(num_of_sides < 0 || num_of_sides > 10)
    {
        num_of_sides = Math.abs(parseInt(prompt("*Invalid Input*\nThe Effable Hedgehog would like to know how many sides your polygon has(0-10): ")));
    }
    getShape(num_of_sides);
}

function getShape(num_of_sides)
{
    let shapes = 
    {
        1 : 'monogon',
        2 : 'bigon',
        3 : 'triangle',
        4 : 'quadrilateral',
        5 : 'pentagon',
        6 : 'hexagon',
        7 : 'heptagon',
        8 : 'octagon',
        9 : 'nonagon',
        10: 'decagon'
    };
    alert('Your polygon is ' + shapes[num_of_sides]);
    
}