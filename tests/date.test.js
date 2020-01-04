const { date } = require('../tihe')

const validateDate = function() {
    const day = parseInt(Math.random() * 31)
    let month = parseInt(Math.random() * 12)
    month = month < 10 ? `${0}${month}`: month 
    const year = parseInt(Math.random() * 20 + 2000)
    
    const fullDate = `${day}${month}${year}`
    
    let result = date.maskForDate(fullDate)
    let expect = `${day}/${month}/${year}`
    
    try {
        if(result != expect) {
            throw new Error('wrong converted date')
        } else {
            console.log('date tests successfully completed :)')
        }
    } catch (error) {
        throw error.message
    }
}


module.exports = () => {
    validateDate()
}
