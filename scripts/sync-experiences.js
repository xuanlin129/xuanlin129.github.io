import { loadEnv } from 'vite';
import { fetchAboutExperiences } from '../src/services/experience-api.js';
import { syncApiSnapshot } from './sync-api-snapshot.js';

const mode = process.argv.includes('--development') ? 'development' : 'production';
const environment = loadEnv(mode, process.cwd(), 'VITE_');
await syncApiSnapshot({
  baseUrl: environment.VITE_API_BASE_URL,
  fetchRecords: fetchAboutExperiences,
  destination: new URL('../src/config/experiences.snapshot.json', import.meta.url),
  label: '經歷',
});
