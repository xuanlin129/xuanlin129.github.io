import dutchieImage from '@/assets/dutchie.jpg';
import gohanCookingImage from '@/assets/gohan-cooking.jpg';
import portfolioImage from '@/assets/xuan-web.png';
import shinhuadeImage from '@/assets/shinhuade.png';
import flipClockImage from '@/assets/flip-clock.png';
export default [
  {
    id: 'dutchie',
    name: 'projects.dutchie.name',
    path: 'https://lin.ee/7R6k7nq',
    image: dutchieImage,
    highlight: true,
  },
  {
    id: 'gohan-cooking',
    name: 'projects.gohan-cooking.name',
    path: 'https://xuanlin129.github.io/gohancooking/',
    image: gohanCookingImage,
    highlight: true,
  },
  {
    id: 'xuan-lin',
    name: 'projects.xuan-lin.name',
    path: 'https://xuanlin129.github.io/',
    image: portfolioImage,
    highlight: false,
  },
  {
    id: 'shinhuade',
    name: 'projects.shinhuade.name',
    path: 'https://shinhuade.vercel.app/',
    image: shinhuadeImage,
    highlight: true,
  },
  // {
  //   id: 'duo',
  //   name: 'projects.duo.name',
  //   path: 'https://jpselection.tw/annieChen_exclusive',
  //   image: new URL('@/assets/duo.png', import.meta.url).href,
  //   highlight: false,
  // },
  {
    id: 'flip-clock',
    name: 'projects.flip-clock.name',
    path: 'https://xuanlin129.github.io/flip-clock/',
    image: flipClockImage,
    highlight: false,
  },
];
