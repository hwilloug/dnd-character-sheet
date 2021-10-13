import { StatModifierType, ProficiencyBonusType } from "../components/stats/state/state"
import { formatModifier } from "./format-modifier"

export const calculateModifier = (baseModifier: StatModifierType, proficiency?: boolean, proficiencyBonus?: ProficiencyBonusType) => {

    if (proficiency === false) {
        return baseModifier
    }
    // if proficient:
    const modifier = parseInt(baseModifier as unknown as string) + parseInt(proficiencyBonus as unknown as string)

    console.log(modifier)

    return formatModifier(modifier) as unknown as StatModifierType
}