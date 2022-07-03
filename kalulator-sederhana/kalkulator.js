
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

module.exports = calculator = (stringInput) => {
    try {
        // syarat : Operator (+, -, *, /)
        const allowedOperators = ["+", "-", "*", "/"];

        let input = stringInput.split(' ')

        if (input.length !== 3) {
            throw new Error('Invalid input, input must be in this format: "operand1 operator operand2"')
        }
        if (allowedOperators.indexOf(input[1]) === -1) {
            throw new Error('Invalid operator, allowed operators are: ' + allowedOperators.join(', '))
        }
        // syarat : Operand 1 (angka maksimal 1 juta)
        let operand1 = parseFloat(input[0])
        if(operand1 > 1000000) throw new Error('Invalid operand 1, operand 1 must be <= 1000000')
        
        let operand2 = parseFloat(input[2])
        if(operand2> 1000000) throw new Error('Invalid operand 2, operand 2 must be <= 1000000')

        let operator = input[1]
        switch (operator) {
            case '+':
                return add(operand1, operand2)
                break;
            case '-':
                return subtract(operand1, operand2)
                break;
            case '*':
                return multiply(operand1, operand2)
                break;
            case '/':
                return divide(operand1, operand2)
                break;
            // default:
        }

    } catch (error) {
        return error.message
        // console.log(error)
    }

}