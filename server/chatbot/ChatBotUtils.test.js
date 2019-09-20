const { isValidDate, bdayCountdownMessage } = require("./ChatBotUtils")

test('2020-08-25 should be an accepted date', () => {
    expect(isValidDate("2020-08-25")).toBe(true)
})

test('2020-25-25 should not be an accepted date', () => {
    expect(isValidDate("2020-25-25")).toBe(false)
})

test('march 1 2020 should be an accepted date', () => {
    expect(isValidDate("march 1 2020")).toBe(true)
})

test('aug 1 2019 should be an accepted date', () => {
    expect(isValidDate("aug 1 2019")).toBe(true)
})

test('bday was one day ago', () => {
    expect(bdayCountdownMessage(new Date("sep 19"), new Date("September 20 2019"))).toBe("Happy belated birthday! You're birthday was 1 day(s) ago!")
})

test('bday was 19 days ago', () => {
    expect(bdayCountdownMessage(new Date("sep 1"), new Date("September 20 2019"))).toBe("Happy belated birthday! You're birthday was 19 day(s) ago!")
})

test('341 days until Aug 26 2020 bday', () => {
    expect(bdayCountdownMessage(new Date("august 26 2020"), new Date("September 20 2019"))).toBe("There are 341 days left until your next birthday")
})

test('103 days until 1 Jan 2020 bday', () => {
    expect(bdayCountdownMessage(new Date("January 1, 2020"), new Date("September 20 2019"))).toBe("There are 103 days left until your next birthday")
})

test('5 days until 25 September 2019 bday', () => {
    expect(bdayCountdownMessage(new Date("September 25, 2019"), new Date("September 20 2019"))).toBe("There are 5 days left until your next birthday")
})

test('10 days until 30 September 2019 bday', () => {
    expect(bdayCountdownMessage(new Date("September 30, 2019"), new Date("September 20 2019"))).toBe("There are 10 days left until your next birthday")
})