class PrizeCalculator {
  /**
   *
   * @param {[Prize]} prizeList
   */
  constructor(prizeList) {
    this.prizeList = prizeList;
    this.prizeAmount = 0;
    this.prizeClass = 0;
  }

  calculate(winningNumbers, ticketNumbersToCheck) {
    const matches = this.countMatches(winningNumbers, ticketNumbersToCheck);
    let outcome = "\x1b[34mThis ticket did not win a prize\x1b[0m";
    for (let i = 0; i < this.prizeList.length; i++) {
      let prizeOutcome = this.prizeList[i].getOutcome(
        matches.pool1Matches.length,
        matches.pool2Matches.length
      );
      if (prizeOutcome) {
        this.prizeAmount = prizeOutcome.prizeAmount;
        this.prizeClass = prizeOutcome.prizeClass;
        outcome = `\x1b[32mThis ticket won a prize of class ${
          this.prizeClass
        } and amount £${this.prizeAmount.toLocaleString()}\n`;
        outcome += `Matched the numbers ${matches.pool1Matches.join(
          ", "
        )} from pool 1`;

        outcome +=
          matches.pool2Matches.length !== 0
            ? ` and the number ${matches.pool2Matches[0]} from pool 2. \x1b[0m`
            : `.\x1b[0m`;
        break;
      }
    }
    return outcome;
  }

  countMatches(winningNumbers, ticketNumbersToCheck) {
    let pool1Matches = [];
    let pool2Matches = [];
    for (let i = 0; i < 5; i++) {
      if (winningNumbers.slice(0, 5).includes(ticketNumbersToCheck[i])) {
        pool1Matches.push(ticketNumbersToCheck[i]);
      }
    }
    if (winningNumbers.slice(5, 6).includes(ticketNumbersToCheck[5])) {
      pool2Matches.push(ticketNumbersToCheck[5]);
    }
    return {
      pool1Matches,
      pool2Matches,
    };
  }
}

module.exports = { PrizeCalculator };
