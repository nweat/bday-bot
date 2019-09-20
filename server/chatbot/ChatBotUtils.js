const differenceInDays = require('date-fns/differenceInCalendarDays')

function isValidDate(dateString) {
    const regEx = /^\d{4}-\d{2}-\d{2}$/
    return dateString.match(regEx) != null
}

function numberOfDaysUntilBday(laterDate, earlierDate) {
    return differenceInDays(laterDate, earlierDate)
}

module.exports = {
    isValidDate: isValidDate,
    numberOfDaysUntilBday: numberOfDaysUntilBday
}
