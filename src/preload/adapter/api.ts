import { ipcRenderer } from 'electron';

// Custom APIs for renderer
export const api = {
  /**
   * @description 控制窗口最小化/最大化/关闭/置顶
   *
   * @param  str - 控制命令
   */
  control(
    str: 'minimize' | 'maximize' | 'unmaximize' | 'top' | 'untop' | 'close',
  ) {
    ipcRenderer.invoke('control', str);
  },

  /**
   * @description 判断窗口是否最大化
   *
   * @return {boolean} - 是否最大化
   */
  async isMaximized(): Promise<boolean> {
    return await ipcRenderer.invoke('isMaximized');
  },

  /**
   * @description 判断窗口是否置顶
   *
   * @return {Promise<boolean>} - 是否置顶
   */
  async isTop(): Promise<boolean> {
    return ipcRenderer.invoke('isTop');
  },
  systemNotice({ title, body }: { title: string; body: string }) {
    ipcRenderer.invoke('notification', { title, body });
  },
  webNotice({ title, body }: { title: string; body: string }) {
    new window.Notification(title, { body });
  },
};
