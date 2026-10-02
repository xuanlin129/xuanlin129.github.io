import assert from 'node:assert/strict';
import { setTimeout as delay } from 'node:timers/promises';
import { test } from 'node:test';
import { getOutlet } from 'reconnect.js';
import '../src/stores/index.js';
import { navigate, setRouter, handleLinkNavigation } from '../src/utils/index.js';

for (const shouldFail of [false, true]) {
  test(`navigation clears loading after ${shouldFail ? 'failure' : 'success'}`, async () => {
    const loadingOutlet = getOutlet('loading');
    const states = [];
    loadingOutlet.update({ loading: false });
    const unregister = loadingOutlet.register(({ loading }) => states.push(loading));
    setRouter({
      state: { location: { pathname: '/' } },
      async navigate() {
        if (shouldFail) throw new Error('Route failed to load');
      },
    });

    try {
      if (shouldFail) {
        await assert.rejects(navigate('/about'), /Route failed to load/);
      } else {
        await navigate('/about');
      }
      // Loading updates are queued for the next timer turn.
      await delay(10);
      assert.deepEqual(states, [true, false]);
      assert.equal(loadingOutlet.getValue().loading, false);
    } finally {
      unregister();
      setRouter(undefined);
    }
  });
}

test('internal links preserve new-tab modifier clicks and native navigation before initialization', () => {
  let prevented = false;
  const event = {
    button: 0,
    metaKey: true,
    currentTarget: { target: '' },
    preventDefault() { prevented = true; },
  };
  setRouter({ state: { location: { pathname: '/' } } });
  try {
    handleLinkNavigation(event, '/about');
    assert.equal(prevented, false);
    setRouter(undefined);
    event.metaKey = false;
    handleLinkNavigation(event, '/about');
    assert.equal(prevented, false);
  } finally {
    setRouter(undefined);
  }
});
