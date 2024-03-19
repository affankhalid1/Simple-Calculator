#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enter First Number : ",
    type: "number",
    name: "Firstnumber",
  },
  {
    message: "Enter Second Number : ",
    type: "number",
    name: "Secondnumber",
  },
  {
    message: "Select one of the operators to perform the action :\n",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Modulus",
      "Exponent",
    ],
  },
]);

if (answer.operator === "Addition") {
  console.log(answer.Firstnumber + answer.Secondnumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.Firstnumber - answer.Secondnumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.Firstnumber * answer.Secondnumber);
} else if (answer.operator === "Division") {
  console.log(answer.Firstnumber / answer.Secondnumber);
} else if (answer.operator === "Modulus") {
  console.log(answer.Firstnumber % answer.Secondnumber);
} else if (answer.operator === "Exponent") {
  console.log(answer.Firstnumber ** answer.Secondnumber);
} else {
  console.log("Please Select Valid Operator");
}
