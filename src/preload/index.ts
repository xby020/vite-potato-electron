import { shell, contextBridge } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';
import { api } from './adapter/api';

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}

// 控制链接是否在默认浏览器中打开
const aLinks = document.querySelectorAll('a[href]');
aLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const url = link.getAttribute('href');
    e.preventDefault();
    url && shell.openExternal(url);
  });
});
