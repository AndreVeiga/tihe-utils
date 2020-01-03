const money = {
    maskForMoney: function (param, currency = 'R$', isDecimal = false) {
        const cash = 'R$ '
        let array = param
            .replace(/[^0-9]/g, '')
            .split('')
            .filter(n => Number(n) || n == false)

        array = array.map(e => e)
        isDecimal ? array.splice(array.length - 2, 0, ',') : ''
        array = array.join('')
        return currency ? `${currency} ` + array : cash + array
    },

    removeMask: (param) => {
        let array = param
            .replace(/[^0-9]/g, '')
            .split('')
            .filter(n => Number(n) || n == false)

        return array.join('')
    }
}

module.exports = money