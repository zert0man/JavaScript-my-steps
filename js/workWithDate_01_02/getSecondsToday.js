/**
 * Created by zert on 01.02.2016.
 */
/*
 Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.

 Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:

 getSecondsToday() == 36000 // (3600 * 10)
 Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
 */

function minutesToSecond(minutes) {
    return minutes*60;
}
function hoursToMinutes(hours) {
    return minutesToSecond(hours);
}
function getSecondFromDate(date) {
    return minutesToSecond(hoursToMinutes(date.getHours()) + date.getMinutes()) + date.getSeconds();
}
function getSecondsToday() {
    var today = new Date();

    var todaySecond = getSecondFromDate(today);
    return todaySecond;
}

alert(getSecondsToday() + " seconds from 00:00 ");