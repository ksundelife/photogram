const photoDescriptions = [
  'На природе',
  'На море',
  'На улице',
  'На даче',
  'Работа не волк, работа - это ворк, волк - это ходить',
  'С друзьями',
];

const userComments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const userNames = [
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

const getRandomArrayElement = (arr) => arr[getRandomPositiveInteger(0, arr.length - 1)];

const createArrPhotoContentData = () => {
  const photoContentData = [];

  for (let i=1; i<=25; i++) {
    const likes = getRandomPositiveInteger(15, 200);
    const randomAvatar = getRandomPositiveInteger(1, 6);

    photoContentData.push(
      {
        id: i,
        url: `photos/${i}.jpg`,
        description: getRandomArrayElement(photoDescriptions),
        likes: likes,
        comments: [
          {
            id: i + 1,
            avatar: `img/avatar-${randomAvatar}.svg`,
            message: getRandomArrayElement(userComments),
            name: getRandomArrayElement(userNames),
          },
        ],
      }
    );
  }
  return photoContentData;
};

createArrPhotoContentData();
