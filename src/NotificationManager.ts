import { NotificationStrategy } from "./NotificationStrategy";

export class NotificationManager {
  private strategy: NotificationStrategy;

  constructor(strategy: NotificationStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: NotificationStrategy): void {
    this.strategy = strategy;
  }

  sendNotification(message: string): void {
    this.strategy.send(message);
  }
}
