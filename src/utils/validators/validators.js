export const required = value => {
    if (value) return undefined;
    return "Field is required"
}

export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value.lenght > maxLenght) return `Max lenght is ${maxLenght} symbols`;
    return undefined;
}