class Lottery {
  /**
   *
   * @param {string} name
   * @param {PrizeCalculator} prizeCalculator
   */
  constructor(name, prizeCalculator) {
    this.name = name;
    this.prizeCalculator = prizeCalculator;
    this.winningNumbers = [];
  }

  // This method is used to set the winning numbers as it is unknown at the time of instantiation.
  setWinningNumbers(numbers) {
    this.winningNumbers = numbers;
  }

  // Given a list ticket numbers calculate its result in this lottery
  checkWin(ticket) {
    if (!this.winningNumbers || this.winningNumbers.length === 0) {
      throw new Error("Winning numbers are empty.");
    }
    return this.prizeCalculator.calculate(this.winningNumbers, ticket);
  }
}

module.exports = { Lottery };
