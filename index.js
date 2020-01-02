class Util {

    maskForDate(param, separator = '/') {
        let array = param.replace(separator, '')
            .replace(separator, '')
            .split('')

        switch (array.length) {
            case 1:
            case 2:
                return array.join('')
            case 3:
            case 4:
                array.splice(2, 0, separator)
                return array.join('')
            case 5:
            case 6:
            case 7:
            case 8:
                array.splice(2, 0, separator)
                array.splice(5, 0, separator)
                return array.join('')
            case 9:
                return array[array.length - 1]
            default:
                return ''
        }
    }

    maskForHours(param, separator = ':', withSeconds = false) {
        let array = param
            .toString()
            .replace(separator, '')
            .split('')

        switch (array.length) {
            case 1:
            case 2:
                return array.join('')

            case 3:
            case 4:
                array.splice(2, 0, separator)
                return array.join('')
            case 5:
            case 6:
                return withSeconds ?
                    (_ => {
                        array.splice(2, 0, separator)
                        array.splice(5, 0, separator)
                        return array.join('')
                    })()
                    : array[array.length - 1]
            default:
                return ''
        }
    }

    isValidDate(param, separator = '/') {
        try {
            const array = param.split(separator)
            const year = Number(array[2])
            const conditionOne = year % 4 === 0 && year % 100 !== 0
            const conditionTwo = year % 4 !== 0 && year % 400 === 0
            let february = (conditionOne || conditionTwo) ? 29 : 28
            const monthsInYears = 12
            const daysInMonths = [0, 31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
            const day = Number(array[0])
            const month = Number(array[1])

            return (day > 0 && day <= daysInMonths[month])
                && (month > 0 && month <= monthsInYears)
                && (year > 0)
        } catch (e) {
            throw 'invalid date format'
        }
    }

    isValidHours(param, separator = ':', isSeconds = false) {
        try {
            const min = 0
            const maxH = 23
            const max = 59
            const array = param.split(separator ? separator : ':')
            const hours = Number(array[0])
            const minuts = Number(array[1])

            if (isSeconds) {
                const seconds = Number(array[2])
                return (hours >= min && hours <= maxH)
                    && (minuts >= min && minuts <= max)
                    && (seconds >= min && seconds <= max)
            }

            return (hours >= min && hours <= maxH)
                && (minuts >= min && minuts <= max)
        } catch (e) {
            throw 'invalid hours format'
        }
    }
}

module.exports = new Util