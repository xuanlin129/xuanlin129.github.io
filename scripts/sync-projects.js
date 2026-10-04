import { loadEnv } from 'vite';
import { fetchPortfolioProjects } from '../src/services/project-api.js';
import { syncApiSnapshot } from './sync-api-snapshot.js';

const mode = process.argv.includes('--development') ? 'development' : 'production';
const environment = loadEnv(mode, process.cwd(), 'VITE_');
await syncApiSnapshot({
  baseUrl: environment.VITE_API_BASE_URL,
  fetchRecords: fetchPortfolioProjects,
  destination: new URL('../src/config/projects.snapshot.json', import.meta.url),
  label: '作品',
});
