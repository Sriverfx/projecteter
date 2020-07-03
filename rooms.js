const {
  Player
} = require("./classes");

const rooms = {

  'room1': {
    "name": "Room1",
    "description": "11",
    "question": "You see a giant venomous snake blocking the next door. You can fight the dangerous snake or run to a secret door on your right?",
    "options": {
      1: {
        'weapon': 'Attack snake with your shiny sword.',
        'nextRoom': 'room2a'
      },
      2: {
        'weapon': 'Run to the door.',
        'nextRoom': 'room2b'
      },
    },
    terminatingRoom: false
  },

  'room2a': {
    "name": "room 2a",
    "description": "Risky choice buy you made it to the next room",
    "question": "Your fight almost kill you but you managed to survive. Gods are with you. The door led you to a room with two magic statues which are covering a trap door. One statue is gold and the other is silver. You can attack and break only one. Which one ? ",
    "options": {
      1: {
        'weapon': 'Attack the gold statue',
        'nextRoom': 'room3'
      },
      2: {
        'weapon': 'Attack the silver statue',
        'nextRoom': 'room7'
      },
    },
    terminatingRoom: false
  },

  'room2b': {
    "name": "Room2b",
    "description": "This door led you to an empty room. You should better go back.",
    "question": "Quest 2b",
    "options": {
      1: {
        'weapon': 'Go back to room 1',
        'nextRoom': 'room1'
      },
      2: {
        'weapon': 'End game',
        'nextRoom': 'room111'
      },
    },
    terminatingRoom: false
  },

  'room3': {
    "name": "Room3",
    "description": "",
    "question": "The glod statue breaks and its magic dust covers your body and increases your armor points.While you celebrate your vivtory, you enter the next room. A dark room with that smells like corpse. You have to find the way to the next room.",
    "options": {
      1: {
        'weapon': 'Trust your other senses and find the next door being blind. ',
        'nextRoom': 'room4a'
      },
      2: {
        'weapon': 'You remember that you have also have some magic matches.',
        'nextRoom': 'room4b'
      },
    },

    terminatingRoom: false
  },

  'room4a': {
    "name": "room4a",
    "description": "",
    "question": "this room is blocked. Do you want to go back to room 3 or end the game",
    "options": {
      1: {
        'weapon': 'Go back to room 3',
        'nextRoom': 'room3'
      },
      2: {
        'weapon': 'end game',
        'nextRoom': 'room111'
      },
    },

    terminatingRoom: false
  },


  'room4b': {
    "name": "Room4b",
    "description": "",
    "question": "using your matches worked! You have arrived to the kings room. The king is waiting you in the red carpet and he is ready to fight you.",
    "options": {
      1: {
        'weapon': 'Attack him him with your sword. ',
        'nextRoom': 'room12'
      },
      2: {
        'weapon': 'Try to block his first attack and then attack him',
        'nextRoom': 'room5b'
      },
    },

    terminatingRoom: false
  },

  'room5a': {
    "name": "room5a",
    "description": "",
    "question": "the room is blocked. Do you want to go back to room 3 or end the game",
    "options": {
      1: {
        'weapon': 'Go back to room 4b',
        'nextRoom': 'room4b'
      },
      2: {
        'weapon': 'end game',
        'nextRoom': 'room111'
      },
    },

    terminatingRoom: false
  },

  'room5b': {
    "name": "room5b",
    "description": "",
    "question": "the door leds to a dead end. Do you want to go back to room 3 or end the game",
    "options": {
      1: {
        'weapon': 'Go back to room 4b',
        'nextRoom': 'room4b'
      },
      2: {
        'weapon': 'end game',
        'nextRoom': 'room111'
      },
    },

    terminatingRoom: false
  },


  'room7': {
    "name": "Room7",
    "description": "",
    "question": "Silver statues breaks and covers your shiny sword with a silver dust that increases your damage. When you enter the next room, you see a group of shamans that are ready to attack you.",
    "options": {
      1: {
        'weapon': 'You believe in the power of the silver dust and you attack them.',
        'nextRoom': 'room111'
      },
      2: {
        'weapon': 'Try to avoid their fireball and atack them with your power skill.',
        'nextRoom': 'room8'
      },
    },

    terminatingRoom: false
  },

  'room8': {
    "name": "Room8",
    "description": "",
    "question": "Wow, that was an amazing strike. Last door leads you to a dragons cave. The dragon was expecting your arrival and he is ready to attack you with fire.",
    "options": {
      1: {
        'weapon': 'Dragons doesnt exist this is in my imagination. Attack! ',
        'nextRoom': 'room12'
      },
      2: {
        'weapon': 'You are experienced after all this battles. Avoid his fire and stab him in the neck.',
        'nextRoom': 'room222'
      },
    },

    terminatingRoom: false
  },

  'room111': {
    "name": "room111",
    "description": "",
    "question": "your fairytale ends here. Do you maybe want to try again?",
    "options": {
      1: {
        'weapon': 'Try again',
        'nextRoom': 'room1'
      },
      2: {
        'weapon': 'end game',
        'nextRoom': 'room12'
      },
    },

    terminatingRoom: false
  },


  'room12': {
    "name": "room12",
    "description": "",
    "question": "The room is blocked",
    "options": {
      1: {
        'weapon': 'Try again',
        'nextRoom': 'room1'
      },
      2: {
        'weapon': 'Come on give it a try',
        'nextRoom': 'room1'
      },
    },
    terminatingRoom: false
  },


  'room222': {
    "name": "room222",
    "description": "",
    "question": "The room is blocked",
    "options": {
      1: {
        'weapon': 'Try again',
        'nextRoom': 'room1'
      },
      2: {
        'weapon': 'Come on give it a try',
        'nextRoom': 'room1'
      },
    },
    terminatingRoom: true
  },
}

module.exports = rooms;