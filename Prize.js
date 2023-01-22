class Prize {
  /**
   *
   * @param {string} prizeClass
   * @param {number} matchesNeededPool1
   * @param {number} matchesNeededPool2
   * @param {number} prizeAmount
   */
  constructor(prizeClass, matchesNeededPool1, matchesNeededPool2, prizeAmount) {
    this.prizeClass = prizeClass;
    this.matchesNeededPool1 = matchesNeededPool1;
    this.matchesNeededPool2 = matchesNeededPool2;
    this.prizeAmount = prizeAmount;
  }
  /* 
    Given number of matches from pool 1 and 2, return the class and amount this prize gives.
    Return null if nothing matches.
  */
  getOutcome(matches1, matches2) {
    if (
      matches1 === this.matchesNeededPool1 &&
      matches2 === this.matchesNeededPool2
    ) {
      return { prizeAmount: this.prizeAmount, prizeClass: this.prizeClass };
    }
    return null;
  }
}

module.exports = { Prize };
