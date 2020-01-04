const { time } = require('../tihe')

const validateTime = function () {
    let hours = '09:00'
    let result = time.isValidHours(hours)
    let expect = true

    try {
        if (result != expect) {
            throw new Error('invalid time')
        }
    } catch (error) {
        throw error.message
    }

    hours = '25:61'
    result = time.isValidHours(hours)
    expect = false

    try {
        if (result != expect) {
            throw new Error('invalid time')
        }
    } catch (error) {
        throw error.message
    }
}

module.exports = () => {
    validateTime()
    console.log('times tests successfully completed :)')

}