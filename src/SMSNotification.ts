import { NotificationStrategy } from "./NotificationStrategy";

export class SMSNotification implements NotificationStrategy {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}
