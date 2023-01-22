const { Lottery } = require("./Lottery");
const { Prize } = require("./Prize");
const { PrizeCalculator } = require("./PrizeCalculator");

// Prize Configurations for LOTTO1
const prize1 = new Prize(1, 5, 1, 10_000_000);
const prize2 = new Prize(2, 5, 0, 100_000);
const prize3 = new Prize(3, 4, 1, 10_000);
const prize4 = new Prize(4, 4, 0, 500);
const prize5 = new Prize(5, 3, 1, 100);
const prize6 = new Prize(6, 3, 0, 30);
const prize7 = new Prize(7, 2, 1, 5);
const prize8 = new Prize(8, 2, 0, 2);

const prizeCalculator = new PrizeCalculator([
  prize1,
  prize2,
  prize3,
  prize4,
  prize5,
  prize6,
  prize7,
  prize8,
]);

const LOTTO1 = new Lottery("LOTTO1", prizeCalculator);

const appConfig = {
  ticketRanges: { pool1: { min: 1, max: 35 }, pool2: { min: 1, max: 10 } },
  lotteries: [LOTTO1],
};

module.exports = { appConfig };
