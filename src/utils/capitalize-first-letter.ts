export const capitalizeFirstLetter = (str: string) => {
    const splitString = str.split('')
    const firstLetter = splitString.shift()

    if (firstLetter) return firstLetter.toUpperCase() + splitString.join('')
    else return str
}