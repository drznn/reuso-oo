"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotificationManager_1 = require("./NotificationManager");
const EmailNotification_1 = require("./EmailNotification");
const SMSNotification_1 = require("./SMSNotification");
const PushNotification_1 = require("./PushNotification");
// Initialize the manager with an Email strategy
const manager = new NotificationManager_1.NotificationManager(new EmailNotification_1.EmailNotification());
manager.sendNotification("Hello via Email!");
// Switch to SMS strategy
manager.setStrategy(new SMSNotification_1.SMSNotification());
manager.sendNotification("Hello via SMS!");
// Switch to Push Notification strategy
manager.setStrategy(new PushNotification_1.PushNotification());
manager.sendNotification("Hello via Push Notification!");
