export const formatModifier = (modifier: number) => {
    return (modifier < 0 ? String(modifier) : '+' + modifier)
}