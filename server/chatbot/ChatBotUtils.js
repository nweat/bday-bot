const differenceInDays = require('date-fns/differenceInCalendarDays')
const isValid = require('date-fns/isValid')
const isAfter = require('date-fns/isAfter')
const getYear = require('date-fns/getYear')
const setYear = require('date-fns/setYear')

function isValidDate(dateString) {
    return isValid(new Date(dateString))
}

function bdayCountdownMessage(userBDay, currDate) {
    if (getYear(userBDay) <= getYear(currDate)) {
        userBDay = setYear(userBDay, getYear(currDate))
        if (isAfter(userBDay, currDate)) {
            return "There are " + differenceInDays(userBDay, currDate) + " days left until your next birthday"
        } else {
            return "Happy belated birthday! You're birthday was " + differenceInDays(currDate, userBDay) + " day(s) ago!"
        }
    } else {
        return "There are " + differenceInDays(userBDay, currDate) + " days left until your next birthday"
    }
}

module.exports = {
    isValidDate: isValidDate,
    bdayCountdownMessage: bdayCountdownMessage
}
