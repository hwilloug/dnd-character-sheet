import Modifiers from './json/modifiers.json'

export default {
  calculateModifier(value, proficiency, proficiencyBonus) {
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
}
