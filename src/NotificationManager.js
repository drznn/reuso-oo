"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationManager = void 0;
class NotificationManager {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    sendNotification(message) {
        this.strategy.send(message);
    }
}
exports.NotificationManager = NotificationManager;
