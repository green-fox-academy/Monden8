'use strict';

//   Create a class what is capable of playing exactly one game of Cows and Bulls (CAB).
//   The player have to guess a 4 digit number. For every digit that the player guessed correctly in the correct place,
//   they have a “cow”. For every digit the player guessed correctly in the wrong place is a “bull.” If the player
//   types a number that does not exist, that quess will not have any result.
//   
//   Example: If the number to be found is "7624" and the player types "7296", the result is: "1 cow, 2 bull".
//   
//   The CAB object should have a random 4 digit number, which is the goal to guess.
//   The CAB object should have a state where the game state is stored (playing, finished).
//   The CAB object should have a counter where it counts the guesses.
//   The CAB object should have a guess method, which returns a string of the guess result
//   All methods, including constructor should be tested
let secretNumber: number = (Math.floor(Math.random() * 8999)+1000);
let guessNumber: number = (Math.floor(Math.random() * 8999)+1000);

let MySecretNumber: string = secretNumber.toString();
let YourGuessNumber: string = guessNumber.toString();

let cows: number = 0;
let bulls: number = 0;

let MySecretNumberArray: string[] = MySecretNumber.split("");
let YourSecretNumberArray: string[] = YourGuessNumber.split("")
MySecretNumberArray.sort();
YourSecretNumberArray.sort();
console.log(MySecretNumber)
console.log(YourGuessNumber)
class CAB {
    play() {
        for (let i: number = 0; i < 4; i++) {
            if (MySecretNumber[i] == YourGuessNumber[i]) {
                bulls++
            } else if (MySecretNumberArray[i] == YourSecretNumberArray[i]) {
                cows++
            }
        } console.log(`${bulls} bull and ${cows} cows.`)
    }
}
let tehenke: CAB = new CAB();
tehenke.play()