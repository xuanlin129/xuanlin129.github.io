import { getOutlet } from 'reconnect.js';
let router;

function setRouter(clientRouter) {
  router = clientRouter;
}

const LoadingOutlet = getOutlet('loading');

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function setLoading(loading, params) {
  const { message } = params || {};
  setTimeout(() => {
    LoadingOutlet.update({ loading: loading, message: message });
  }, 0);
}

async function navigate(path) {
  if (!router) return;
  if (router.state.location.pathname === path) {
    console.log('path not changed');
    return;
  }
  setLoading(true);
  try {
    await delay(500);
    await router.navigate(path);
  } finally {
    setLoading(false);
  }
}

export { delay, setLoading, navigate, setRouter };
