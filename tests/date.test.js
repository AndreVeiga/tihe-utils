const { date } = require('../tihe')

const maskDate = function () {
    const fullDate = '01012020'
    const result = date.maskForDate(fullDate)
    const expect = '01/01/2020'

    try {
        if (result != expect) {
            throw new Error('wrong converted date')
        }
    } catch (error) {
        throw error.message
    }
}

const validateDate = function () {
    let result = '01/01/2020'
    let expect = true
    try {
        if(date.isValidDate(result) != expect){
            throw new Error('invalid date')
        }
    } catch (error){
        throw error.message
    }

    result = '31/02/2020'
    expect = false

    try {
        if(date.isValidDate(result) != expect){
            throw new Error('invalid date')
        }
    } catch (error){
        throw error.message
    }
}

module.exports = () => {
    maskDate()
    validateDate()
    console.log('date tests successfully completed :)')
}
