const DESCRIPTION = [
  'На природе',
  'На море',
  'На улице',
  'На даче',
  'Работа не волк, работа - это ворк, волк - это ходить',
  'С друзьями',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];


const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createPhotoDescription = () => {
  const result = [];

  for (let i=1; i<=25; i++) {
    const randomId = i;
    const randomUrl = i;
    const likes = getRandomPositiveInteger(15, 200);
    const randomCommentId = getRandomPositiveInteger(1, Number.MAX_SAFE_INTEGER);
    const randomAvatar = getRandomPositiveInteger(1, 6);

    const comments = [];
    const userInformation = {
      id: randomCommentId,
      avatar: `img/avatar-${randomAvatar}.svg`,
      message: getRandomArrayElement(MESSAGE),
      name: getRandomArrayElement(NAMES),
    };
    comments.push(userInformation);

    result.push(
      {
        id: randomId,
        url: `photos/${randomUrl}.jpg`,
        description: getRandomArrayElement(DESCRIPTION),
        likes: likes,
        comments,
      }
    );
  }

  return result;
};
console.log(createPhotoDescription());
