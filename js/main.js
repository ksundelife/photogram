// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    return 'Ошибка! Минимальное число не может быть больше либо равно максимальному';
  }
  if (min < 0 || max < 0) {
    return 'Можно использовать только диапазон положительных чисел, включая 0';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomNumber(80, 40);

const checkingStringLength = (str, maxLength) => str.length <= maxLength;

checkingStringLength ('sdghfjsdf qweqw', 5);
