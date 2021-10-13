import { put, select } from 'redux-saga/effects'
import { AppState } from '../../../app-store'
import { calculateModifier } from '../../../utils/calculate-modifier-with-proficiency'
import { statsActions } from '../state/actions'

export function createGetSkillsSaga() {
    return function* getSkillsSaga(
        action: ReturnType<typeof statsActions.getSkills>
    ) {
        try {

            yield put(statsActions.getSkillsProficiencies(action.payload.character_id))

            const state: AppState = yield select()

            const modifiers = state.stats.abilityScoresModifiers
            const proficiencies = state.stats.skillsProficiencies
            const proficiencyBonus = state.stats.level.proficiencyBonus

            if (
                modifiers.strengthModifier &&
                modifiers.charismaModifier &&
                modifiers.intelligenceModifier &&
                modifiers.wisdomModifier &&
                modifiers.constitutionModifier &&
                modifiers.dexterityModifier
            )
                yield put(statsActions.setSkills(
                    {        
                        acrobatics: calculateModifier(modifiers.dexterityModifier, proficiencies.acrobatics, proficiencyBonus),
                        animalHandling: calculateModifier(modifiers.wisdomModifier, proficiencies.animalHandling, proficiencyBonus),
                        arcana: calculateModifier(modifiers.intelligenceModifier, proficiencies.arcana, proficiencyBonus),
                        athletics: calculateModifier(modifiers.strengthModifier, proficiencies.athletics, proficiencyBonus),
                        deception: calculateModifier(modifiers.charismaModifier, proficiencies.deception, proficiencyBonus),
                        history: calculateModifier(modifiers.intelligenceModifier, proficiencies.history, proficiencyBonus),
                        insight: calculateModifier(modifiers.wisdomModifier, proficiencies.insight, proficiencyBonus),
                        intimidation: calculateModifier(modifiers.charismaModifier, proficiencies.intimidation, proficiencyBonus),
                        investigation: calculateModifier(modifiers.intelligenceModifier, proficiencies.investigation, proficiencyBonus),
                        medicine: calculateModifier(modifiers.wisdomModifier, proficiencies.medicine, proficiencyBonus),
                        nature: calculateModifier(modifiers.intelligenceModifier, proficiencies.nature, proficiencyBonus),
                        perception: calculateModifier(modifiers.wisdomModifier, proficiencies.perception, proficiencyBonus),
                        performance: calculateModifier(modifiers.charismaModifier, proficiencies.performance, proficiencyBonus),
                        persuasion: calculateModifier(modifiers.charismaModifier, proficiencies.persuasion, proficiencyBonus),
                        religion: calculateModifier(modifiers.intelligenceModifier, proficiencies.religion, proficiencyBonus),
                        sleightOfHand: calculateModifier(modifiers.dexterityModifier, proficiencies.sleightOfHand, proficiencyBonus),
                        stealth: calculateModifier(modifiers.dexterityModifier, proficiencies.stealth, proficiencyBonus),
                        survival: calculateModifier(modifiers.wisdomModifier, proficiencies.survival, proficiencyBonus)
                    }
                ))     

        } catch (e) {
            console.log(e)
        }
    }
}