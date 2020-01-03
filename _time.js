const time = {
    
    maskForHours: (param, separator = ':', withSeconds = false) => {
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
    },

    isValidHours: function (param, separator = ':', isSeconds = false) {
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

module.exports = time