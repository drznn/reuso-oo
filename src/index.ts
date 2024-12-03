import { NotificationManager } from "./NotificationManager";
import { EmailNotification } from "./EmailNotification";
import { SMSNotification } from "./SMSNotification";
import { PushNotification } from "./PushNotification";

// Initialize the manager with an Email strategy
const manager = new NotificationManager(new EmailNotification());
manager.sendNotification("Hello via Email!");

// Switch to SMS strategy
manager.setStrategy(new SMSNotification());
manager.sendNotification("Hello via SMS!");

// Switch to Push Notification strategy
manager.setStrategy(new PushNotification());
manager.sendNotification("Hello via Push Notification!");
