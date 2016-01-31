/*
Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.

День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.

var date = new Date(2012, 0, 3);  // 3 янв 2012
alert( getLocalDay(date) );       // вторник, выведет 2
 */

describe("getLocalDay возвращает день недели", function() {
	it("3 января 2014 - пятница", function() {
		assert.equal(getLocalDay(new Date(2014, 0, 3)), 5);
	});

	it("4 января 2014 - суббота", function() {
		assert.equal(getLocalDay(new Date(2014, 0, 4)), 6);
	});

	it("5 января 2014 - воскресенье", function() {
		assert.equal(getLocalDay(new Date(2014, 0, 5)), 7);
	});

	it("6 января 2014 - понедельник", function() {
		assert.equal(getLocalDay(new Date(2014, 0, 6)), 1);
	});

	it("7 января 2014 - вторник", function() {
		assert.equal(getLocalDay(new Date(2014, 0, 7)), 2);
	});

	it("8 января 2014 - среда", function() {
		assert.equal(getLocalDay(new Date(2014, 0, 8)), 3);
	});

	it("9 января 2014 - четверг", function() {
		assert.equal(getLocalDay(new Date(2014, 0, 9)), 4);
	});
});


function getLocalDay(date) {
	var day = date.getDay();
	return day === 0 ? 7 : day;
}