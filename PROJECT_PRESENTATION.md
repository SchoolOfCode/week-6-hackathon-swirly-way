# Duck Takeover - The Warehouse

**Planning**

- We first agreed on our factors list and the top ones were engagement, fun and collaboration.
- By chance pulled a rubberduck and we agreed that a theme around ducks and farms could meet our factors list
- We then agreed on some timeframes and worked along on a call.

  **Implementation**

- First I had to find a Javascript concept that we learnt about and some other bootcamper could solve.
- Then I wanted to make it a challenge and add a fun twist to it so instead of just organizing a barn/warehouse I shuffled in some weapons hidden in the warehouse object.
- Once all of that was clear first I wrote the first simple test to fail.
- Then followed an approach of writing a simple function to pass the test and worked on the next test.
- Once failed I worked on the solution for a while.
- When the function solution was ready I worked for different test cases.

  **Kata description:**

/\*\*

- Hello farmer! For some reasons the ducks were gearing up for war and piling up weapons among the farm supplies.
- To avoid that you are going to separate the farm items from the weapons and sell them
- Luckily after a brief look you can see the amount, price and type of each item in the warehouse.
- Your task is to write a function named `sellWeapons` which takes in an object named `warehouse`
- Your implementation should:
- Iterate through the object and identify if it has a weapon
- Based on the amount of a weapon calculate a price
- And return the total price of all the weapons.
- This is how the smallest warehouse looks like:
- const warehouse = {
  corn: { amount: 100, price: 5, type: "F" },
  sword: { amount: 1, price: 100, type: "W" },
  }
-
-
-
- It shuold work with this considerations:
- With any size of object
- If there aren't any weapons in the object
- If there are any negative weapon quantities
- If the object is empty
  \*/

// Here's the skeleton function for you to start!:

// `export function sellWeapons(warehouse){
//
// }`
// Good luck!

**Issues during the process**

- Overcomplicating things in my head. Once you start writing your pseudocode for both the test and your expected solution it's all more clear
- Keeping it simple so that I could solve it and other bootcampers wouldn't struggle, I had to rewrite the passed object to avoid cluttering with unnecesary values.
- Some GitHub issues when trying to merge and pull, which was good learning.

⏭️ **Next:**

- Would like to bring up the difficulty by adding different kinds of items as well I thought about ducks, so the function could return the price and the amount of ducks hidden.
