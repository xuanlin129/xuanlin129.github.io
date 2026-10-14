import { getNewOutlet } from 'reconnect.js';

getNewOutlet('loading', { loading: true }, { autoDelete: false });
getNewOutlet('loadingTransition', { isComplete: false }, { autoDelete: false });
