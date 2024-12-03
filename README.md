# Notification System

## 📜 Descrição

Este projeto implementa um sistema de notificações flexível usando o **Padrão de Projeto Strategy** em **TypeScript**. 

Ele permite alternar entre diferentes estratégias de envio de notificações, como **e-mail**, **SMS** e **push notifications**, mantendo o código aderente ao Princípio Aberto/Fechado (Open/Closed Principle) e facilmente extensível para novos canais de notificação.

## 🚀 Como Configurar e Executar

### Pré-requisitos

Certifique-se de que você possui as seguintes ferramentas instaladas:
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/)
- [TypeScript](https://www.typescriptlang.org/) (instale globalmente usando `npm install -g typescript`)

### Passo a Passo

1. Clone este repositório:
   ```bash
   git clone https://github.com/seuusuario/notification-system.git
   cd notification-system

Instale as dependências:
```bash
npm install
```
Compile o código TypeScript:
```bash
npx tsc
```
Execute o programa:
```bash
node dist/index.js
```
## 🛠️ Estrutura do Projeto
```bash
notification-system/
├── src/
│   ├── EmailNotification.ts          # Estratégia de envio por e-mail
│   ├── NotificationManager.ts        # Classe principal para gerenciamento de notificações
│   ├── NotificationStrategy.ts       # Interface da estratégia
│   ├── PushNotification.ts           # Estratégia de envio de notificações push
│   ├── SMSNotification.ts            # Estratégia de envio por SMS
│   └── index.ts                      # Ponto de entrada da aplicação
├── package.json                      # Configurações do projeto e dependências
├── tsconfig.json                     # Configurações do TypeScript
├── .gitignore                        # Arquivos e pastas ignorados pelo Git
└── README.md                         # Documentação do projeto
```
## 📚 Funcionamento do Sistema
Interface NotificationStrategy: Define o contrato que todas as estratégias de notificação devem seguir, garantindo consistência.

### Classes de Estratégias:

EmailNotification: Envia mensagens por e-mail.
SMSNotification: Envia mensagens por SMS.
PushNotification: Envia mensagens por push notification.
Classe Principal NotificationManager: Gerencia o envio de notificações e permite alternar entre estratégias dinamicamente.

Arquivo de Demonstração (index.ts): Exibe como configurar e usar o sistema de notificações.

## 💻 Exemplo de Uso
```bash
import { NotificationManager } from "./NotificationManager";
import { EmailNotification } from "./EmailNotification";
import { SMSNotification } from "./SMSNotification";
import { PushNotification } from "./PushNotification";

// Inicializa com a estratégia de e-mail
const manager = new NotificationManager(new EmailNotification());
manager.sendNotification("Hello via Email!");

// Altera para a estratégia de SMS
manager.setStrategy(new SMSNotification());
manager.sendNotification("Hello via SMS!");

// Altera para a estratégia de notificações push
manager.setStrategy(new PushNotification());
manager.sendNotification("Hello via Push Notification!");

Saída esperada:
Sending Email: Hello via Email!
Sending SMS: Hello via SMS!
Sending Push Notification: Hello via Push Notification!
```
##📦 Dependências

TypeScript: Linguagem utilizada para implementar o projeto.

Node.js: Ambiente de execução para o código compilado.

##📝 Observações

A estrutura está pronta para ser estendida. 

Para adicionar um novo canal de notificação, basta criar uma nova classe que implemente NotificationStrategy e configurar no NotificationManager.

##🖋️ Autor
Desenvolvido por André Albuquerque como parte de uma atividade prática para aprendizado de padrões de projeto e TypeScript.

## 📜 Licença
Este projeto está licenciado sob a MIT License.
