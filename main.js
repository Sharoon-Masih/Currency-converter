import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgGray.whiteBright.bold("\n\t\t\tCurrency Converter\n"));
let Exit;
let reqCurr;
do {
    reqCurr = await inquirer.prompt([{
            type: "list",
            name: "inputCurr",
            message: chalk.bold.italic.yellow("Select the following Currency for input:"),
            choices: ["Dollar", "Euro", "PKR", "IND rupee", "Dirham"]
        },
        {
            type: "number",
            name: "userInput",
            message: chalk.bold.italic.yellow("\nenter the amount:"),
            validate: (ans) => {
                if (isNaN(ans) || !ans) {
                    return "please enter a amount in numeric";
                }
                else
                    return true;
            }
        },
        {
            type: "list",
            name: "convert",
            message: chalk.bold.italic.yellow("\nSelect the following Currency for Conversion:"),
            choices: ["Dollar", "Euro", "PKR", "IND rupee", "Dirham"]
        }]);
    if (reqCurr.inputCurr === "Dollar") {
        if (reqCurr.convert === "Dollar") {
            console.log("Same");
        }
        else if (reqCurr.convert === "Euro") {
            console.log(`the amount in Euro is: ${Math.floor(reqCurr.userInput * 0.913)}`);
        }
        else if (reqCurr.convert === "PKR") {
            console.log(`the amount in PKR is: ${Math.floor(reqCurr.userInput * 280.900)}`);
        }
        else if (reqCurr.convert === "IND rupee") {
            console.log(`the amount in IND rupee is: ${Math.floor(reqCurr.userInput * 83.010)}`);
        }
        else if (reqCurr.convert === "Dirham") {
            console.log(`the amount in Dirham is: ${Math.floor(reqCurr.userInput * 3.672)}`);
        }
    }
    else if (reqCurr.inputCurr === "Euro") {
        if (reqCurr.convert === "Euro") {
            console.log("Same");
        }
        else if (reqCurr.convert === "Dollar") {
            console.log(`the amount in Dollar is: ${Math.floor(reqCurr.userInput * 1.095)}`);
        }
        else if (reqCurr.convert === "PKR") {
            console.log(`the amount in PKR is: ${Math.floor(reqCurr.userInput * 307.018)}`);
        }
        else if (reqCurr.convert === "IND rupee") {
            console.log(`the amount in IND rupee is: ${Math.floor(reqCurr.userInput * 91.02)}`);
        }
        else if (reqCurr.convert === "Dirham") {
            console.log(`the amount in Dirham is: ${Math.floor(reqCurr.userInput * 4.021)}`);
        }
    }
    else if (reqCurr.inputCurr === "PKR") {
        if (reqCurr.convert === "PKR") {
            console.log("Same");
        }
        else if (reqCurr.convert === "Dollar") {
            console.log(`the amount in Dollar is: ${Math.floor(reqCurr.userInput * 0.004)}`);
        }
        else if (reqCurr.convert === "Euro") {
            console.log(`the amount in Euro is: ${Math.floor(reqCurr.userInput * 0.003)}`);
        }
        else if (reqCurr.convert === "IND rupee") {
            console.log(`the amount in IND rupee is: ${Math.floor(reqCurr.userInput * 0.296)}`);
        }
        else if (reqCurr.convert === "Dirham") {
            console.log(`the amount in Dirham is: ${Math.floor(reqCurr.userInput * 0.013)}`);
        }
    }
    else if (reqCurr.inputCurr === "IND rupee") {
        if (reqCurr.convert === "IND rupee") {
            console.log("Same");
        }
        else if (reqCurr.convert === "Dollar") {
            console.log(`the amount in Dollar is: ${Math.floor(reqCurr.userInput * 0.012)}`);
        }
        else if (reqCurr.convert === "Euro") {
            console.log(`the amount in Euro is: ${Math.floor(reqCurr.userInput * 0.011)}`);
        }
        else if (reqCurr.convert === "PKR") {
            console.log(`the amount in PKR is: ${Math.floor(reqCurr.userInput * 3.373)}`);
        }
        else if (reqCurr.convert === "Dirham") {
            console.log(`the amount in Dirham is: ${Math.floor(reqCurr.userInput * 0.044)}`);
        }
    }
    else if (reqCurr.inputCurr === "Dirham") {
        if (reqCurr.convert === "Dirham") {
            console.log("Same");
        }
        else if (reqCurr.convert === "Dollar") {
            console.log(`the amount in Dollar is: ${Math.floor(reqCurr.userInput * 0.272)}`);
        }
        else if (reqCurr.convert === "Euro") {
            console.log(`the amount in Euro is: ${Math.floor(reqCurr.userInput * 0.248)}`);
        }
        else if (reqCurr.convert === "PKR") {
            console.log(`the amount in PKR is: ${Math.floor(reqCurr.userInput * 76.244)}`);
        }
        else if (reqCurr.convert === "IND rupee") {
            console.log(`the amount in IND rupee is: ${Math.floor(reqCurr.userInput * 22.604)}`);
        }
    }
    Exit = await inquirer.prompt({
        type: "input",
        name: "stop",
        message: chalk.bold.italic.yellow("\npress Y if you want to do another conversion")
    });
} while (Exit.stop === "Y" || Exit.stop === "y");
