class Util {

    maskForDate(param, separator = '/') {
        let array = param.replace(separator, '')
            .replace(separator, '')
            .split('')

        switch (array.length) {
            case 1:
                return array.join('')
            case 2: case 3:
                array.splice(2, 0, separator)
                return array.join('')
            case 4: case 5: case 6: case 7: case 8:
                array.splice(2, 0, separator)
                array.splice(5, 0, separator)
                return array.join('')
            case 9:
                return array[array.length - 1]
            default:
                return ''
        }
    }

    maskForHours(param, separator = ':') {
        let array = param.replace(separator, '').split('')
    }
}

module.exports = new Util