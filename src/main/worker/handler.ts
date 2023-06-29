import { BrowserWindow, ipcMain, Notification } from 'electron';

export function setupHandler(win: BrowserWindow) {
  // customize app titlebar
  ipcMain.handle('control', (_event, ...args) => {
    const params = args[0];
    switch (params) {
      case 'minimize':
        win.minimize();
        break;
      case 'maximize':
        win.maximize();
        break;
      case 'unmaximize':
        win.restore();
        break;
      case 'close':
        win.close();
        break;
      case 'top':
        win.setAlwaysOnTop(true);
        break;
      case 'untop':
        win.setAlwaysOnTop(false);
        break;
      default:
        break;
    }
  });

  // isMaximized
  ipcMain.handle('isMaximized', () => {
    return win.isMaximized();
  });

  ipcMain.handle('isTop', () => {
    return win.isAlwaysOnTop();
  });

  ipcMain.handle('notification', (_event, ...args) => {
    const params = args[0];
    const notification = new Notification(params);
    notification.show();
  });
}
