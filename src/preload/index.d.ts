import { ElectronAPI } from '@electron-toolkit/preload';
import { api } from './worker/api';

declare global {
  interface Window {
    electron: ElectronAPI;
    api: typeof api;
  }
}
