export const socials = {
  email: 'christoph.schafzahl@gmail.com',
  github: 'https://www.github.com', // full github profile url
  linkedin: 'https://www.linkedin.com/in/cschafzahl/', // full linkedin profile url
};

export const skills = [
  'C#',
  'Unity',
  'C++',
  'Unreal',
  'VBA',
  'Python',
  'Blender',
  'Maya',
  'JavaScript',
  'HTML',
  'CSS',
];

export const projects = [
  {
    title: 'Towerhold',
    description:
      'Towerhold is my first multimedia project at university. It is my love letter to the dying franchise of flashgames. The game is simple. Survive! Defend your Tower from Spiders, upgrade your weapons and strengthen your defences.',
    links: [
      { text: 'Read More', url: 'https://portfolio.fh-salzburg.ac.at/projects/2021-towerhold' },
      { text: 'GitHub', url: 'https://github.com' },
    ],
    // paths relative to /public/images/projects/
    images: [
      'towerhold/towerhold1.webp',
      'towerhold/towerhold2.webp',
      'towerhold/towerhold3.webp',
      'towerhold/towerhold4.webp',
    ],
  },
  {
    title: 'Snake Versus',
    description:
      "Snake is a simple yet widely known game that we all love. Wouldn't it be great to play it with another person? In Snake Versus you can abolish your opponent by stealing away fruits under their noses and blocking their path.",
    links: [
        { text: 'Live Site', url: 'https://christophschafzahl.github.io/snake-versus/' },
        { text: 'GitHub', url: 'https://github.com/christophschafzahl/snake-versus/' },
    ],
    // paths relative to /public/images/projects/
    images: ['snake/snake1.webp', 'snake/snake2.webp', 'snake/snake3.webp'],
  },
];

export const models = {
  // paths relative to /public/images/models/
  main: ['turm.webp', 'auto.webp', 'spinne.webp', 'raupe.webp'],

  // paths relative to /public/images/models/houses
  houses: [
    'house3.webp',
    'house4.webp',
    'house5.webp',
    'house6.webp',
    'house7.webp',
    'house8.webp',
    'house9.webp',
    'house10.webp',
    'house1.webp',
    'house2.webp',
  ],
};
