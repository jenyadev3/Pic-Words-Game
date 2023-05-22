const german = [
    {
      id: '1',
      token: 'fox',
      word: 'Fuchs',
      type: 'word'
    },
    {
      id: '2',
      token: 'fox',
      url: 'images/photo-1.jpg',
      type: 'image'
    },
    {
      id: '3',
      token: 'turtle',
      word: 'Schildkröte',
      type: 'word'
    },
    {
      id: '4',
      token: 'turtle',
      url: 'images/photo-2.jpg',
      type: 'image'
    },
    {
      id: '5',
      token: 'elephant',
      word: 'Elefant',
      type: 'word'
    },
    {
      id: '6',
      token: 'elephant',
      url: 'images/photo-3.jpg',
      type: 'image'
    },
    {
      id: '7',
      token: 'squirrel',
      word: 'Eichhorn',
      type: 'word'
    },
    {
      id: '8',
      token: 'squirrel',
      url: 'images/photo-4.jpg',
      type: 'image'
    },
    {
      id: '9',
      token: 'raccoon',
      word: 'Waschbär',
      type: 'word'
    },
    {
      id: '10',
      token: 'raccoon',
      url: 'images/photo-5.jpg',
      type: 'image'
    },
    {
      id: '11',
      token: 'deer',
      word: 'Hirsch',
      type: 'word'
    },
    {
      id: '12',
      token: 'deer',
      url: 'images/photo-6.jpg',
      type: 'image'
    }
  ];

const italian = [
    {
      id: '1',
      token: 'fox',
      word: 'Volpe',
      type: 'word'
    },
    {
      id: '2',
      token: 'fox',
      url: 'images/photo-1.jpg',
      type: 'image'
    },
    {
      id: '3',
      token: 'turtle',
      word: 'Tartaruga',
      type: 'word'
    },
    {
      id: '4',
      token: 'turtle',
      url: 'images/photo-2.jpg',
      type: 'image'
    },
    {
      id: '5',
      token: 'elephant',
      word: 'Elefante',
      type: 'word'
    },
    {
      id: '6',
      token: 'elephant',
      url: 'images/photo-3.jpg',
      type: 'image'
    },
    {
      id: '7',
      token: 'squirrel',
      word: 'Proteine',
      type: 'word'
    },
    {
      id: '8',
      token: 'squirrel',
      url: 'images/photo-4.jpg',
      type: 'image'
    },
    {
      id: '9',
      token: 'raccoon',
      word: 'Procione',
      type: 'word'
    },
    {
      id: '10',
      token: 'raccoon',
      url: 'images/photo-5.jpg',
      type: 'image'
    },
    {
      id: '11',
      token: 'deer',
      word: 'Cervo',
      type: 'word'
    },
    {
      id: '12',
      token: 'deer',
      url: 'images/photo-6.jpg',
      type: 'image'
    }
  ];

  const finnish = [
    {
      id: '1',
      token: 'fox',
      word: 'Kettu',
      type: 'word'
    },
    {
      id: '2',
      token: 'fox',
      url: 'images/photo-1.jpg',
      type: 'image'
    },
    {
      id: '3',
      token: 'turtle',
      word: 'Kilpikonna',
      type: 'word'
    },
    {
      id: '4',
      token: 'turtle',
      url: 'images/photo-2.jpg',
      type: 'image'
    },
    {
      id: '5',
      token: 'elephant',
      word: 'Elefantti',
      type: 'word'
    },
    {
      id: '6',
      token: 'elephant',
      url: 'images/photo-3.jpg',
      type: 'image'
    },
    {
      id: '7',
      token: 'squirrel',
      word: 'Orava',
      type: 'word'
    },
    {
      id: '8',
      token: 'squirrel',
      url: 'images/photo-4.jpg',
      type: 'image'
    },
    {
      id: '9',
      token: 'raccoon',
      word: 'Pesukarhu',
      type: 'word'
    },
    {
      id: '10',
      token: 'raccoon',
      url: 'images/photo-5.jpg',
      type: 'image'
    },
    {
      id: '11',
      token: 'deer',
      word: 'Deer',
      type: 'word'
    },
    {
      id: '12',
      token: 'deer',
      url: 'images/photo-6.jpg',
      type: 'image'
    }
  ];

  const Words = {
    finnish,
    german,
    italian
  };

  // Перемешивание карточек
  const getWords = (type) => RANDOMIZED ? [...Words[type]].sort(() => 0.5 - Math.random()) : [...Words[type]];

  const results = [
    { name: 'Вася', steps: 1 },
    { name: 'Аня', steps: 3 },
    { name: 'Петя', steps: 5 }
  ];

  window.getWords = getWords;
  window.results = results;
