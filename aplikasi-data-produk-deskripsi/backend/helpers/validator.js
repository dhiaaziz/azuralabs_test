const ApiError = require("./api-error");

module.exports = (arrOfAttributes, body) => {
    let errors = [];
    console.log(arrOfAttributes)
    const bodyKeys = Object.keys(body)
    arrOfAttributes.forEach(attribute => {
        if(bodyKeys.indexOf(attribute) === -1) {
            errors.push(attribute)
        }
    })
    if(errors.length > 0) {
        throw ApiError.badRequest(`${errors.join(', ')} are required`)
    }
   
}