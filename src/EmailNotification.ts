import { NotificationStrategy } from "./NotificationStrategy";

export class EmailNotification implements NotificationStrategy {
  send(message: string): void {
    console.log(`Sending Email: ${message}`);
  }
}
