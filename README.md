# Lottery Prize Winner Calculator
## Overview
This Node.js program is designed to determine which prize a ticket wins in the lottery "LOTTO1". The program takes three string arguments: the lottery name, the winning numbers for a draw in that Lottery, and the details of a single ticket that entered into that draw. The program can be called from the command line.

## Lottery Rules
The winning numbers are picked from two pools of numbers. The first pool contains the numbers 1-35, and the second pool contains the numbers 1-10.
A draw entry consists of 5 numbers picked from the first pool and 1 number picked from the second pool.
The same number cannot be picked more than once within a single pool.
The order of the numbers in each pool does not matter, but the pool of 5 numbers always comes before the pool of 1 number.
The prize table for this lottery is as follows:
Match 5 numbers from pool 1 and 1 number from pool 2: Prize class 1 (£1,000,000)
Match 5 numbers from pool 1: Prize class 2 (£10,000)
Match 4 numbers from pool 1 and 1 number from pool 2: Prize class 3 (£1,000)
Match 4 numbers from pool 1: Prize class 4 (£100)
Match 3 numbers from pool 1 and 1 number from pool 2: Prize class 5 (£100)
Match 3 numbers from pool 1: Prize class 6 (£10)
Match 2 numbers from pool 1 and 1 number from pool 2: Prize class 7 (£5)
Match 2 numbers from pool 1: Prize class 8 (£2)
Match 1 number from pool 1 and 1 number from pool 2: Prize class 9 (£1)
A ticket can be matched to a maximum of one prize tier, and it should always be the highest tier possible.
## Usage
To run the program, open a terminal and navigate to the directory where the program is located.
Then, run the command
`node winner-calculator.js LOTTO1 <winning numbers> <ticket numbers>` where <winning numbers> and <ticket numbers> are the comma-separated values for the winning numbers and the ticket numbers respectively.

## Output
The program will output one of the following:

If the ticket won a prize, the program will output a line with the format “This ticket won a prize of class X and amount Y.”, where X is the relevant prize class from the table for the lottery and Y is the prize amount won using a UK format. For example “This ticket won a prize of class 5 and amount £100”.
If the ticket did not win a prize, the program will output “This ticket did not win a prize.”
If the ticket did win a prize, the program will print a third line containing the details of how the ticket won the prize in the format “Matched the numbers X, Y, Z from pool 1 and the number N from pool 2.”
  
 ## Handling Multiple Tickets
 The script can also handle multiple tickets:
  `node winner-calculator.js LOTTO1 <winning numbers> <ticket numbers1> <ticket numbers2> <ticket numbers3> ..`
node winner-calculator.js LOTTO1 <winning numbers> <ticket numbers>
