var readlineSync = require('readline-sync');
const Player = require('./classes.js')
var clear = require('clear');

// const rl = readlineSync.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


   clear();
let playerName = readlineSync.question('Whats your name? ');
   
Player.name = playerName;
clear();
console.log(`your journey will start soon ${ Player.name}` + '\n');
    
    
    
   
let a = true;  
// Store JSON data in a JS variable
var room1 = `{"question": "you see a giant venomous snake blocking the next door. You can fight the dangerous snake or run to a secret door on your right. What do you do?", "age": 22, "country": "United States"}`;
var room2a = `{"question": "Your fight almost kill you $playerName but you managed to survive. Gods are with you. The door led you to a room with two magic statues which are covering a trap door. One statue is gold and the other one is silver. You can attack only one of them. Which one ? ", "age": 22, "country": "United States"}`;

// Converting JSON-encoded string to JS object
var obj1 = JSON.parse(room1);
var obj2 = JSON.parse(room2a);
// console.log(obj.question1);
// Accessing individual value from JS object 

while (a==true)  {             
  clear();
  answer = readlineSync.keyIn(Player.name + ', ' + obj1.question +  '\n' + '\n' + '1) attack snake with your shiny sword.' + '\n' + '2) run to the door.' + '\n');
  if (answer == '1' || answer == '2'){
  a = false;
  clear();

  }
}           
        

        switch(answer) {  
                case "1":
                  
                    console.log(`Risky choice ${ Player.name} but you did it. You are in the next room! ` + '\n' );
                    let a = true; 
                    while (a==true)  {   
                    
                    answer2 = readlineSync.keyIn(obj2.question +  '\n' + '\n' + '1) Attack the gold statue' + '\n' + '2) attack the silver statue' + '\n');
                    clear();
                    if (answer2 == '1' || answer2 == '2'){
                      a = false;
                    }
                   }         
                  break;            
                default:
                    console.log('awesome choice2');
             }   
           










 

        // if (answer === 'red'){
        //     console.log(`awesome choice ${ Player.name}`);
            
        //     //console.log(`you are in level 2: ${answer}`);
        //     //rl.question('what to do next2? ', (answer) => {
                
        // }  
        // else {
        //     console.log('awesome choice2');
            
        // }

  
    // TODO: Log the answer in a database
    //console.log(`Thank you for your valuable feedback: ${answer}`);