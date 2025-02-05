$('html').easeScroll();
// 禁止捲動
function disableScroll() {
  document.body.style.overflow = 'hidden';
}
// 啟用捲動
function enableScroll() {
  document.body.style.overflow = '';
  document.body.style.overflowX = 'hidden';
}

disableScroll();

if (isMobileDevice()) {
  const circle = document.querySelector('#FV .circle');
  circle.style.animation = 'none';
}

/*---------- body ----------*/
const scrollLinks = document.querySelectorAll('a');
scrollLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    if (this.getAttribute('href').includes('#')) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      let scrollTarget;

      if (targetId) {
        scrollTarget = document.getElementById(targetId);
      } else {
        scrollTarget = document.body;
      }
      scrollTarget.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});

/*---------- portfolio ----------*/
// website
const swiperProject = document.querySelector('.swiper-project');
for (let i = 1; i <= 9; i++) {
  swiperProject.querySelector('.swiper-wrapper').insertAdjacentHTML(
    'beforeend',
    `
    <div class="swiper-slide">
      <img class="rounded-3" src="./src/images/gohan-carousel${String(i).padStart(2, '0')}.jpg" alt="">
    </div>
  `
  );
}

var swiper = new Swiper('.swiper-project', {
  speed: 1000,
  spaceBetween: 1000,
  loop: true,
  effect: 'fade',
  crossFade: true,
  autoplay: {
    disableOnInteraction: false,
  },
});

swiper.autoplay.stop();

const swiperPlay = () => {
  if (this.scrollY > document.querySelector('#portfolio').offsetTop) {
    swiper.autoplay.start();
    this.removeEventListener('scroll', swiperPlay);
  }
};
window.addEventListener('scroll', swiperPlay);

const swiperTitle = document.querySelector('.swiper-title h4');
const swiperTitleArr = swiperTitle.innerText.split('｜');
swiperTitle.innerHTML = '';

for (const char of swiperTitleArr[0]) {
  const span = document.createElement('span');
  span.innerText = char;
  swiperTitle.appendChild(span);
  if (swiperTitleArr[0].indexOf(char) == swiperTitleArr[0].length - 1) {
    const br = document.createElement('br');
    swiperTitle.appendChild(br);
  }
}
const swiperTitleSmall = document.createElement('small');
for (const char of swiperTitleArr[1]) {
  const span = document.createElement('span');
  span.innerText = char;
  swiperTitleSmall.appendChild(span);
  if (swiperTitleArr[1].indexOf(char) == swiperTitleArr[1].length - 1) {
    swiperTitle.appendChild(swiperTitleSmall);
  }
}

// other
const otherArea = document.querySelector('#portfolio .other');

const otherProjects = [
  {
    title: '翻頁鐘',
    description: '時鐘，主色會根據系統顯示模式自動調整呈現效果。',
    img: './src/images/flip-clock.jpg',
    link: 'https://xuanlin129.github.io/flip_clock',
  },
  {
    title: '模式切換按鈕',
    description: '透過開關切換白天與夜間模式。',
    img: './src/images/alternation-of-day-and-night.jpg',
    link: 'https://xuanlin129.github.io/alternation_of_day_and_night',
  },
  {
    title: '計算機',
    description: '提供與一般計算機相同的使用體驗，並具備計算歷程紀錄功能。',
    img: './src/images/calculator.jpg',
    link: 'https://xuanlin129.github.io/calculate',
  },
  {
    title: 'R&CO',
    description: '使用 Bootstrap 切版的 RWD 響應式網頁。',
    img: './src/images/R&CO.jpg',
    link: 'https://xuanlin129.github.io/R-CO',
  },
  {
    title: '顏色選擇器',
    description: '控制RGB數值調整顏色',
    img: './src/images/color-selector.jpg',
    link: 'https://xuanlin129.github.io/color-selector',
  },
  {
    title: 'Youbike即時車況',
    description: '即時查詢YouBike車況並提供搜尋功能',
    img: './src/images/youbike.jpg',
    link: 'https://xuanlin129.github.io/youbike/',
  },
  // {
  //   title: '蕃茄鐘',
  //   description: '提供待辦事項記錄功能，支持清單輸入、編輯與刪除，並可設置鬧鈴、開關小鈴鐺。另可將網頁下載為桌面app。',
  //   img: '',
  //   link: 'https://xuanlin129.github.io/pomodoro/',
  // },
  // { title: "", description: "", img: "", link: "" },
];

for (const item of otherProjects) {
  otherArea.insertAdjacentHTML(
    'beforeend',
    `
    <div class="col-6 col-lg-4 mb-3">
      <a href="${item.link}" target="_blank" class="card">
        <div class="card-title">
          <img src="${item.img}" alt="...">
        </div>
        <div class="card-body">
          <h6 class="card-title">${item.title}</h6>
          <p>${item.description}</p>
        </div>
      </a>
    </div>
  `
  );
}

/*---------- contact ----------*/
// Email.js
const contactForm = document.getElementById('contact-form');
const contactSubmit = document.getElementById('contact-submit');
const loading = document.getElementById('loading');
const contactMsg = document.querySelector('#contact-msg');

contactForm.addEventListener('submit', function (event) {
  loading.classList.add('is-visible');
  disableScroll();
  event.preventDefault();

  const serviceID = 'service_6dqm07b';
  const templateID = 'template_r1qkokm';
  if (this.checkValidity()) {
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        this.querySelectorAll('.form-control').forEach((input) => {
          input.value = '';
        });

        this.classList.remove('was-validated');
        loading.classList.remove('is-visible');
        enableScroll();

        // 紙屑動畫
        const end = Date.now() + 0.5 * 1000;
        const colors = ['#bb0000', '#ffffff'];

        (function frame() {
          confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
          });

          confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        })();

        // 成功訊息
        contactMsg.classList.add('msg-alert');
        setTimeout(() => {
          contactMsg.classList.remove('msg-alert');
        }, 3000);
      },
      (err) => {}
    );
  } else if (!this.checkValidity()) {
    event.stopPropagation();
    setTimeout(() => {
      loading.classList.remove('is-visible');
      enableScroll();
      this.classList.add('was-validated');
    }, 1000);
    // console.log("表單驗證失敗");
  }
});
