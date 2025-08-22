export class IrisAPI {
  constructor(botId: string, irisToken: string, version: string = '0.1') {
    const baseUrl = `https://iris-tg.ru/api/${botId}_${irisToken}/v${version}`;
    console.log(baseUrl);
  }
}
