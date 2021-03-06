import Modifiers from './json/modifiers.json'
import ArmorInfo from './json/armorInfo.json'

function calculateModifier(value, proficiency, proficiencyBonus) {
  let modifier = Modifiers[value];
  //proficiency is boolean
  if (proficiency) {
    modifier = parseInt(modifier) + parseInt(proficiencyBonus);
    const sign = Math.sign(modifier);
    if (sign > 0) modifier = "+" + modifier.toString();
    else modifier = modifier.toString();
  }
  return modifier
}


export default {
  calculateModifier,
  calculateAC(armorDict, dex) {
    const thisArmorInfo = ArmorInfo.armor[armorDict.armor];
    if (thisArmorInfo){
      let ac = parseInt(thisArmorInfo.ac.base);
      if (armorDict.shield) {
        ac += parseInt(ArmorInfo.armor.Shield.ac.base);
      }
      if (thisArmorInfo.ac.modifier === "dexterity") {
        ac += parseInt(calculateModifier(dex));
      }
      return ac.toString()
    } else return "0"
  },
  breakJsonText(text) {
    if (text) {
      return text.split("<br>")
    } else return [""]
  },
  increaseOrDecrease(valueStr, whichWay) {
    let newValue = whichWay == "increase" ? parseInt(valueStr) + 1 : parseInt(valueStr) - 1;
    return newValue < 0 ? "0" : newValue.toString();
  }
}
