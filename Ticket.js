class Ticket {
  /**
   * Ticket class for processing ticket strings into number list.
   * Throws errors under certain conditions:
   * 1. String cannot be parsed in csv format
   * 2. There is not enough numbers in the string i.e 6 numbers
   * 3. Numbers in the string is out of a given range i.e 1 to 35 and 1 to 10.
   * @param {string} ticketString
   * @param {Object} ranges
   */
  constructor(ticketString, ranges) {
    let ticketNumbers = this.stringToNumberList(ticketString);

    // Checking if first 5 numbers is in between 1 and 35 and last number 1 and 10.
    this.isInrange(
      ticketNumbers.slice(0, 5),
      ranges.pool1.min,
      ranges.pool1.max
    );
    this.isInrange(
      [ticketNumbers[ticketNumbers.length - 1]],
      ranges.pool2.min,
      ranges.pool2.max
    );

    // Check for duplicates in first 5 numbers.
    this.checkForDuplicatesAndThrowError(ticketNumbers.slice(0, 5));
    this._ticketNumbers = ticketNumbers;
  }

  get ticketNumbers() {
    return this._ticketNumbers;
  }
  /**
   * Checks if a given list of numbers is in a given range of number, returns true
   * Throws error if input is out of range.
   * @param {*} numbers
   * @param {*} range
   */
  isInrange(numbers, min, max) {
    for (let i = 0; i < numbers.length; i++) {
      if (max < numbers[i] || min > numbers[i]) {
        throw new Error(
          `Input string contains number out of range: ${min}-${max}, number=${numbers[i]}. Please provide valid numbers and try again.`
        );
      }
    }
    return numbers;
  }

  /**
   * Input strings must have 6 number seperatd by  commas.
   * This function throws an error if that condition is not met.
   * Otherwise, it converts string to a list of numbers
   */
  stringToNumberList(str) {
    // Split the string by comma
    let values = str.split("," || ", ");
    // Check if there are 6 values
    if (values.length !== 6) {
      throw new Error(
        `Input string must have 6 values separated by commas: ${str}. Please provide valid numbers and try again.`
      );
    }

    // Check if any of the values are empty or not a number
    for (let i = 0; i < values.length; i++) {
      if (values[i].trim() === "" || isNaN(values[i])) {
        throw new Error(
          `Input string cannot contain empty values or non-numeric values: ${values[i]}. Please provide valid numbers and try again.`
        );
      }
    }
    return values.map((numString) => Number(numString));
  }

  checkForDuplicatesAndThrowError(arr) {
    let set = new Set(arr);
    if (arr.length !== set.size) {
      throw new Error(
        "Duplicate numbers found in the ticket. Please provide valid numbers and try again."
      );
    }
  }
}

module.exports = { Ticket };
