const { money } = require('../tihe')

const maskMoney = function () {
    const param = '12'
    const result = money.maskForMoney(param)
    const expect = 'R$ 12'

    try {
        if (result != expect) {
            throw new Error('convert wrong money')
        }
    } catch (error) {
        throw error.message
    }

}

module.exports = () => {
    maskMoney()
    console.log('money\'s tests successfully completed :)')
}