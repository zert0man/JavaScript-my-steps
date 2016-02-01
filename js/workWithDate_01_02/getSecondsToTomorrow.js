/**
 * Created by zert on 01.02.2016.
 */
/*
 Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.

 Например, если сейчас 23:00, то:

 getSecondsToTomorrow() == 3600
 P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
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

function getSecondsToTomorrow() {
    return   minutesToSecond(hoursToMinutes(24)) - getSecondFromDate(new Date());
}

alert(getSecondsToTomorrow());