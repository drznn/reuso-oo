import { NotificationStrategy } from "./NotificationStrategy";

export class PushNotification implements NotificationStrategy {
  send(message: string): void {
    console.log(`Sending Push Notification: ${message}`);
  }
}
