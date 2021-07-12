export const required = value => {
    if (value) return undefined;

    return "Field is required";
}

export const maxLength = maxCounter => value => {
    if (value.length > maxCounter) return `Max length ${maxCounter} symbols`;

    return undefined;
}