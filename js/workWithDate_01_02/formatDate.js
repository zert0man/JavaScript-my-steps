/**
 * Created by zert on 01.02.2016.
 */
/*
 Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:

 Например:

 var d = new Date(2014, 0, 30); // 30 января 2014
 alert( formatDate(d) ); // '30.01.14'
 P.S. Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.
 */
describe("formatDate", function() {
    it("правильно форматирует дату 30.01.14", function() {
        assert.equal(formatDate(new Date(2014, 0, 30)), '30.01.14');
    });

    it("правильно форматирует дату 01.01.01", function() {
        assert.equal(formatDate(new Date(2001, 0, 1)), '01.01.01');
    });

    it("правильно форматирует дату 01.01.00", function() {
        assert.equal(formatDate(new Date(2000, 0, 1)), '01.01.00');
    });
});

function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}