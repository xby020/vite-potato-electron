import type {
  MessageApiInjection,
  DialogApiInjection,
  LoadingBarProviderInst,
  NotificationProviderInst,
} from 'naive-ui';

declare global {
  interface Window {
    $message: MessageApiInjection;
    $dialog: DialogApiInjection;
    $loading: LoadingBarProviderInst;
    $notification: NotificationProviderInst;
  }
}
