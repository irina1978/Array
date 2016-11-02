function clearString(str) {
    var trash = ['.', ',', '"', "'", '-', '–', ':', ';'];
    var newStr = str;
    for (var i = 0; i < trash.length; i++) {
        newStr = newStr.replace(trash[i], '');
    }
    
    return newStr;
}

var str = 'Все значения в JavaScript, за исключением null и undefined, содержат набор вспомогательных, \n\
функций и значений, доступных " через точку ". Такие функции называют " методами ", а значения – " свойствами ". \n\
Здесь мы рассмотрим основы использования свойств и методов.';

var words = str.split(' ');
var maxLen = 0;
var maxIndex = null;
var currentClearWord;
for (var i = 0; i < words.length; i++) {
    currentClearWord = clearString(words[i]);
    if (currentClearWord.length > maxLen) {
        maxLen = currentClearWord.length;
        maxIndex = i;
    }
}

alert ('Самое длинное слово: "' + clearString(words[maxIndex]) + '"');

