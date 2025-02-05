const isMobileDevice = () => {
  const isMobileAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
  return isMobileAgent || isSmallScreen;
};

const safariHacks = () => {
  let windowsVH = window.innerHeight / 100;
  document.body.style.setProperty('--vh', windowsVH + 'px');
  window.addEventListener('resize', function () {
    document.body.style.setProperty('--vh', windowsVH + 'px');
  });
};

if (isMobileDevice()) {
  safariHacks();
}
