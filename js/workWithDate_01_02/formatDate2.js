/**
 * Created by zert on 01.02.2016.
 */
/*
 Напишите функцию formatDate(date), которая форматирует дату date так:

 Если со времени date прошло менее секунды, то возвращает "только что".
 Иначе если со времени date прошло менее минуты, то "n сек. назад".
 Иначе если прошло меньше часа, то "m мин. назад".
 Иначе полная дата в формате "дд.мм.гг чч:мм".
 Например:

 function formatDate(date) {  ваш код  }

alert( formatDate(new Date(new Date - 1)) ); // "только что"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"
 */
describe("formatDate", function() {
    it("выводит дату 1мс назад как \"только что\"", function() {
        assert.equal(formatDate(new Date(new Date - 1)), 'только что');
    });

    it('выводит дату "30 сек назад"', function() {
        assert.equal(formatDate(new Date(new Date - 30 * 1000)), "30 сек. назад");
    });

    it('выводит дату "5 мин назад"', function() {
        assert.equal(formatDate(new Date(new Date - 5 * 60 * 1000)), "5 мин. назад");
    });

    it("выводит старую дату в формате дд.мм.гг чч:мм", function() {
        assert.equal(formatDate(new Date(2014, 2, 1, 11, 22, 33)), "01.03.14 11:22");
    });

});