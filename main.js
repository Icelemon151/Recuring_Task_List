var recuringTasks = {
"Wash Hair": 4,
"Cut Nails": 56,
"Haircut" : 60,
"Exfoliate": 7,
"Exercises": 1,
"Laundry": 14,
"Change Bedsheets": 21,
"Vacuum Room": 7,
"Clean Towels": 21,
"Mantain Churches": 182,
"Shave": 3.5,
"Trim": 21
}

//Work out what day of the year we're on
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
day += 4;






//Returns true if a whole number is put though it
function isWholeNumber(value) {

    var er = /^-?[0-9]+$/;
    return er.test(value);
}


function addingList(lists) {
    
  

Object.keys(lists).forEach(item => { //do below for each Key Title item in the object

var decider = day / lists[item];
    
   
    
    
if(isWholeNumber(decider) === true){
    
    
   
    var block = document.createElement('li'); //make div element
    
    var place = document.getElementById('sendRecurs'); //find the space in the HTML document

    block.innerHTML += item; //Describe what content goes in the space
    place.appendChild(block); //Add the div to the space
   
    
}

})}

addingList(recuringTasks);


/*
1W,7D
2W,14D
3W,21D  
4W,28D,1MONTH
5W,35D  
6W,42D 
7W,49D 
8W,56D,2MONTHS
9W,63D
10W,70D 
11W,77D 
12W,84D,3MONTHS
13W,91D
14W,98D 
15W,105D
16W,112D,4MONTHS
17W,119D
18W,126D
19W,133D
20W,140D, 5
21W,147D,5MONTHS
22W,154D
23W,161D
24W,168D
25W,175D
26W,182D, 6MONTHS


*/