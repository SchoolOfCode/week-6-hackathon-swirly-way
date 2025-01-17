export function sellWeapons(warehouse) {
  let weaponTotal = 0;
  for (let item in warehouse) {
    if (warehouse[item].type === "W" && warehouse[item].amount > 0) {
      weaponTotal += warehouse[item].amount * warehouse[item].price;
    }
  }
  return weaponTotal;
}

/**
 * Hello farmer! For some reasons the ducks were gearing up for war and piling up weapons among the farm supplies.
 * To avoid that you are going to separate the farm items from the weapons and sell them
 * Luckily after a brief look you can see the amount, price and type of each item in the warehouse.
 * Your task is to write a function named `sellWeapons` which takes in an object named `warehouse`
 *
 * Your implementation should:
 *  Iterate through the object and identify if it has a weapon 
 *  Based on the amount of a weapon calculate a price
 *  And return the total price of all the weapons.
 *
 *  This is how the smallest warehouse looks like:
 * const warehouse = {
     corn: { amount: 100, price: 5, type: "F" },
     sword: { amount: 1, price: 100, type: "W" },
     }
 * 
 * 
 * 
 *  It shuold work with this considerations:
 *    With any size of object
 *    If there aren't any weapons in the object
 *    If there are any negative weapon quantities
 *    If the object is empty
 */

// Here's the skeleton function for you to start!:

//  `export function sellWeapons(warehouse){
//
// }`
// Good luck!
