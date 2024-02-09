const { createApp, ref } = Vue



createApp({
  setup () {
    const navItems = [
      {text: 'About', href: '#about'},
      {text: 'Ability', href: '#ability'},
      {text: 'Resume', href: '#resume'},
      {text: 'Portfolio', href: '#portfolio'}
    ]

    const skills = ref([
      {name: 'html', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png'},
      {name: 'css', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png'},
      {name: 'javascript', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'},
      {name: 'vue', img: 'https://img.icons8.com/?size=256&id=eETV3RNHVrWA&format=png'},
      {name: 'nodejs', img: 'https://img.icons8.com/?size=512&id=54087&format=png'},
      {name: 'mongoDB', img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg'},
      {name: 'git', img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'},
      {name: 'bootstrap', img: 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png'},
      {name: 'sass', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968358.png'},
      {name: 'figma', img: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg'},
      {name: 'photoshop', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968520.png'},
      {name: 'illustrator', img: 'https://cdn-icons-png.flaticon.com/512/5968/5968472.png'}
    ])

    const abilities = ref([
      {title: '前端技術', content: 'HTML、CSS、JavaScript、jQuery、Vue.js、SCSS/SASS與RESTful API串接等技術', icon: 'ic:round-computer'},
      {title: '後端程式', content: 'Node.js、mongoDB後端資料庫開發經驗及Git版本版本控管', icon: 'ph:code-bold'},
      {title: 'UI/UX', content: 'Photoshop、Illustrator、Figma等設計軟體', icon: 'fa6-solid:pen-fancy'}
    ])

    const swipers = ref([
      {src: './images/swiper_01.png'},
      {src: './images/swiper_02.png'},
      {src: './images/swiper_03.png'},
      {src: './images/swiper_04.png'},
      {src: './images/swiper_05.png'},
      {src: './images/swiper_06.png'},
      {src: './images/swiper_07.png'},
      {src: './images/swiper_08.png'}
    ])

    const projects = ref([
      {name: '時鐘',content: '設定時間，時間到時會響鈴。', tech: 'HTML, JavaScript',img: './images/project_01.png',src: 'https://xuanlin129.github.io/clock/'},
      {name: '計算機',content: '計算機，如同一般計算機可以使用，有紀錄計算歷程的功能。', tech: 'HTML, JavaScript',img: './images/project_02.png',src: 'https://xuanlin129.github.io/calculate/'},
      {name: '打地鼠',content: '打地鼠遊戲，在時間內打中地鼠，一隻加一分。', tech: 'HTML, jQuery',img: './images/project_03.png',src: 'https://xuanlin129.github.io/whack-a-mole/'},
      {name: '翻牌',content: '翻牌配對遊戲，當相同的圖片配對成功時，圖片會消失。', tech: 'HTML, jQuery',img: './images/project_04.png',src: 'https://xuanlin129.github.io/card/'},
      {name: '番茄鐘',content: '提供使用者紀錄個人待辦事項。可於頁面輸入清單，也具編輯、刪除功能。除了以上功能，還可以選擇鬧鈴以及開關小鈴鐺，還可以下載成app在桌面上。', tech: 'Vue.js, vuetify',img: './images/project_05.png',src: 'https://xuanlin129.github.io/pomodoro/#/'},
      {name: 'R&CO',content: '使用 Bootstrap 切版的 RWD 響應式網頁。', tech: 'bootstrap',img: './images/project_06.png',src: 'https://xuanlin129.github.io/R-CO/'},
    ])

    const infos = ref([
      {icon: 'mdi:github', src: 'https://github.com/xuanlin129'},
      {icon: 'mdi:email', src: 'mailto:xuan.lin129@gmail.com'},
      {icon: 'mdi:instagram', src: 'https://www.instagram.com/xuan_lin129'},
    ])

    const navItemSrc = (id) => {
      document.querySelector(id).scrollIntoView(true)
    }

    return {
      navItems,
      skills,
      abilities,
      swipers,
      projects,
      infos,
      navItemSrc
    }
  }
}).mount('#app')

const swiper = new Swiper(".mySwiper", {
  speed: 1000,
  spaceBetween: 2000,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  crossFade: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const typer = document.getElementById('typer');
const typewriter = new Typewriter(typer, {
  loop: true,
  delay: 75,
});
typewriter
  .pauseFor(1500)
  .typeString(`Hi I'm Tzu-Hsuan`)
  .pauseFor(1500)
  .deleteChars(16)
  .pauseFor(1000)
  .typeString('Front-end Engineer')
  .pauseFor(1500)
  .deleteChars(18)
  .pauseFor(1000)
  .typeString('Web Designer')
  .pauseFor(1500)
  .start();