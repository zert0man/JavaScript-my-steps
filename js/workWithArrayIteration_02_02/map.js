/**
 * Created by zert on 02.02.2016.
 */
/*
 Код ниже получает из массива строк новый массив, содержащий их длины:

var arr = ["Есть", "жизнь", "на", "Марсе"];

 var arrLength = [];
 for (var i = 0; i < arr.length; i++) {
 arrLength[i] = arr[i].length;
 }

 alert( arrLength ); // 4,5,2,5
 Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.
 */

var arr = ["Есть", "жизнь", "на", "Марсе"];

var lengths = arr.map(function(name) {
    return name.length;
});
alert(lengths);