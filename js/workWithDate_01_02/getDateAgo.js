/**
 * Created by zert on 31.01.2016.
 */
/*
 Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.

 Например, для 2 января 2015:

 var date = new Date(2015, 0, 2);

 alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
 alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
 alert( getDateAgo(date, 365) ); // 2, (2 января 2014)
 P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date.
 */
describe("getDateAgo", function() {

    it("1 день до 02.01.2015 -> число 1", function() {
        assert.equal(getDateAgo(new Date(2015, 0, 2), 1), 1);
    });


    it("2 день до 02.01.2015 -> число 31", function() {
        assert.equal(getDateAgo(new Date(2015, 0, 2), 2), 31);
    });

    it("100 дней от 02.01.2015 -> число 24", function() {
        assert.equal(getDateAgo(new Date(2015, 0, 2), 100), 24);
    });

    it("365 дней от 02.01.2015 -> число 2", function() {
        assert.equal(getDateAgo(new Date(2015, 0, 2), 365), 2);
    });

    it("не меняет переданный объект Date", function() {
        var date = new Date(2015, 0, 2);
        var dateCopy = new Date(date);
        getDateAgo(dateCopy, 100);
        assert.equal(date.getTime(), dateCopy.getTime());
    });

});

function getDateAgo(date, days) {
    var dateCopy = new Date(date);
    dateCopy.setDate(dateCopy.getDate() - days);
    return dateCopy.getDate();
}