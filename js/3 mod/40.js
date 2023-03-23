const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
const ind = this.potions.indexOf(oldName);
      console.log(ind);
      this.potions.splice(ind, 1, newName);
 return this.potions;
    // Change code above this line
    }
 
};
atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"))

