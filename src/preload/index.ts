import { contextBridge, ipcRenderer } from 'electron';
import { electronAPI } from '@electron-toolkit/preload';

// Custom APIs for renderer
export const api = {
  /**
   * @description 控制窗口最小化/最大化/关闭
   *
   * @param  str - 控制命令('minimize'|'maximize'|'close')
   */
  control(str: 'minimize' | 'maximize' | 'close') {
    ipcRenderer.send('control', str);
  },
  async isMaximized() {
    return await ipcRenderer.invoke('isMaximized');
  },
};

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
