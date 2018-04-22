import {ValidatorConstraint, ValidatorConstraintInterface} from "class-validator";

@ValidatorConstraint({ name: "randomColor", async: true })
export class ColorValidator implements ValidatorConstraintInterface {

    validate(text: string,) {
        return text === "red" || text === "yellow" || text === "blue" || text === "magenta" || text === "green" // for async validations you must return a Promise<boolean> here
    }

    defaultMessage() { // here you can provide default error message if validation failed
        return `Only red, blue, green, magenta and yellow as color, please!`;
    }
}