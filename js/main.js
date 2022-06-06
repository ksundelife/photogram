// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    console.log('Ошибка! Минимальное число не может быть больше либо равно максимальному');
    return;
  }
  if (min < 0 || max < 0) {
    console.log('Можно использовать только диапазон положительных чисел, включая 0');
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandomNumber(0, 40));

const checkLengthString = function (line, maxLength) {
  if (line.length <= maxLength) {
    return true;
  } else {
    return false;
  }
};

console.log(checkLengthString ('sdghfjsdf', 3));
