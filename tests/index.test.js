const testDate = require('./date.test')
const testTime = require('./time.test')
const testMoney = require('./money.test')

try {
    testDate()
    testTime()
    testMoney()
    console.log('All tests finalized successfully \\0/ \\0/')
} catch (error) {
    throw error.message
}
