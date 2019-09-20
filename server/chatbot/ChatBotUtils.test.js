const { isValidDate, numberOfDaysUntilBday } = require("./ChatBotUtils")

test('2020-08-25 should be an accepted date', () => {
    expect(isValidDate("2020-08-25")).toBe(true)
})

test('08-25 should not be an accepted date', () => {
    expect(isValidDate("08-25")).toBe(false)
})

test('august26 should not be an accepted date', () => {
    expect(isValidDate("august26")).toBe(false)
})

test('342 days until bday on Aug 26', () => {
    expect(numberOfDaysUntilBday(new Date(2020, 8, 26), new Date(2019, 9, 20))).toBe(342)
})

test('104 days until bday on 1 Jan', () => {
    expect(numberOfDaysUntilBday(new Date(2020, 1, 1), new Date(2019, 9, 20))).toBe(104)
})