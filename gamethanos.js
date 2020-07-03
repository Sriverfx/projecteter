const readlineSync = require('readline-sync');
const Player = require('./classes.js')
const clear = require('clear');
const rooms = require('./rooms.js')

clear();
let playerName = readlineSync.question('Whats your name? ');
Player.name = playerName;
clear();
console.log(`your journey will start now ${ Player.name}` + '\n');


let currentRoom = rooms.room1;


while (currentRoom.terminatingRoom !== true) {

  if (currentRoom.name != 'room12') {
    clear();
    ; 

    var answer = readlineSync.keyIn(Player.name + ', ' + currentRoom.question + '\n' + '\n' + '1.  ' + currentRoom.options[1].weapon + '\n' + '2.  ' + currentRoom.options[2].weapon, {
      limit: '12'
    });
    myNextRoom = currentRoom.options[answer].nextRoom;
    
    currentRoom = rooms[myNextRoom];
  } else {
    console.log('\n' + `That wasn't a wise choice ${ Player.name}. Your game ends here !`);


    return;
  }
}

console.log('\n' + `Your choices in the battle were fantastic ${ Player.name}. You won the last boss and you take his treasure!`);