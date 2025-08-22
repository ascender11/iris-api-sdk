# 🌸 Iris API SDK

[![npm version](https://img.shields.io/npm/v/iris-api-sdk)](https://www.npmjs.com/package/iris-api-sdk)

TypeScript SDK for interacting with the **Iris API**.

---

## 💾 Installation

```bash
npm install iris-api-sdk
```

## 🏗 Build

```bash
npm run build
```

## 🚀 Usage

```ts
import { IrisAPI } from 'iris-api-sdk';

const iris = new IrisAPI(BOT_ID, IRIS_TOKEN);

// 🍬 Sweets module
await iris.sweets.give({ userId: 123, amount: 10 });
const sweetsHistory = await iris.sweets.history();

// 🪙 Gold module
await iris.gold.give({ userId: 123, amount: 5 });
const goldHistory = await iris.gold.history();

// 👛 Pocket module
await iris.pocket.enable();
await iris.pocket.denyUser({ user_id: 456 });

// 💰 Balance module
const balance = await iris.balance.get();
console.log(balance);
```

## 🛠 Features


| Module     | Method      | Parameters             | Returns                 | Description                                         |
| ---------- | ----------- | ---------------------- | ----------------------- | --------------------------------------------------- |
| 🍬 Sweets  | `give`      | `SweetsGiveParams`     | `SweetsGiveResponse`    | Gives sweets to a specified user                    |
| 🍬 Sweets  | `history`   | `SweetsHistoryParams?` | `SweetsHistoryResponse` | Retrieves the sweets transaction history            |
| 🪙 Gold    | `give`      | `GoldGiveParams`       | `GoldGiveResponse`      | Gives gold to a specified user                      |
| 🪙 Gold    | `history`   | `GoldHistoryParams?`   | `GoldHistoryResponse`   | Retrieves the gold transaction history              |
| 👛 Pocket  | `enable`    | —                      | `EnableResponse`        | Enables the user's pocket for transfers or viewing  |
| 👛 Pocket  | `disable`   | —                      | `DisableResponse`       | Disables the user's pocket for transfers or viewing |
| 👛 Pocket  | `allowAll`  | —                      | `AllowAllResponse`      | Allows all users to perform transfers               |
| 👛 Pocket  | `denyAll`   | —                      | `DenyAllResponse`       | Denies all users from performing transfers          |
| 👛 Pocket  | `allowUser` | `AllowUserParams`      | `AllowUserResponse`     | Allows a specific user to perform transfers         |
| 👛 Pocket  | `denyUser`  | `DenyUserParams`       | `DenyUserResponse`      | Denies a specific user from performing transfers    |
| 💰 Balance | `get`       | —                      | `BalanceResponse`       | Retrieves the current balance of the user           |


