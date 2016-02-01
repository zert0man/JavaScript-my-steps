/**
 * Created by zert on 31.01.2016.
 */
/*
 Напишите функцию getLastDayOfMonth(year, month), которая возвращает последний день месяца.

 Параметры:

 year – 4-значный год, например 2012.
 month – месяц от 0 до 11.
 Например, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
 */
describe("getLastDayOfMonth", function() {
    it("последний день 01.01.2012 - 31", function() {
        assert.equal(getLastDayOfMonth(2012, 0), 31);
    });

    it("последний день 01.02.2012 - 29 (високосный год)", function() {
        assert.equal(getLastDayOfMonth(2012, 1), 29);
    });

    it("последний день 01.02.2013 - 28", function() {
        assert.equal(getLastDayOfMonth(2013, 1), 28);
    });
});