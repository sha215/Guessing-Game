#! usr/bin/env node
import inquirer from "inquirer";
console.log("Number Guessing Game With Shahwar Ali");



const Randomnumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt ([
    {
        name : "userguessnumber",
        type : "number",
        message : "Enter a guess number (Number limit from 1 to 5): "
    },
    
]);
if (answer.userguessnumber === Randomnumber) {
    console.log("Congratulation! you guessed a correct number ");
}else {
    console.log("Sorry you have not guessed a correct number!");
}