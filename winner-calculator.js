#!/usr/bin/env node
const { appConfig } = require("./Configuration");
const { Ticket } = require("./Ticket");

try {
  const args = process.argv.slice(2);
  // Check if enough number of parameters are passed.
  if (args.length < 3) {
    throw new Error(
      "Not enough parameters. Please provide at least 3 parameters."
    );
  }

  // Setting up the default values and adding user input to them.
  let lotterryName;
  let winnningNumbers;
  let tickets = [];
  args.forEach(function (a, index) {
    // First parameter is lottery
    if (index === 0) {
      lotterryName = a;
    }
    // Second parameter is winning numbers
    else if (index === 1) {
      winnningNumbers = a;
    }
    // Rest are tickets to check so add them to tickets array
    else {
      tickets.push(a);
    }
  });

  const winnningTicket = new Ticket(winnningNumbers, appConfig.ticketRanges);
  const lotterySelected = appConfig.lotteries.filter((lottery) => {
    return lottery.name === lotterryName;
  })[0];

  if (!lotterySelected) {
    throw new Error(
      "No lottery found with given name. Please try again with a valid value."
    );
  }

  lotterySelected.setWinningNumbers(winnningTicket.ticketNumbers);

  for (let i = 0; i < tickets.length; i++) {
    const ticketToCheck = new Ticket(tickets[i], appConfig.ticketRanges);
    console.log(`\x1b[34mTicket: ${ticketToCheck.ticketNumbers}\x1b[0m`);
    console.log(lotterySelected.checkWin(ticketToCheck.ticketNumbers));
    if (i !== tickets.length - 1) console.log("=============");
  }
} catch (error) {
  console.log(`\x1b[31mError: ${error.message}\x1b[0m`);
}
