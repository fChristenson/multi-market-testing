import { IMoneyService } from "./moneyService";
import { IConfig, Market } from "../../../configs";

export class SwedishMoneyService implements IMoneyService {
  private config: IConfig;

  constructor(config: IConfig) {
    this.config = config;
  }

  makeMoney() {
    if (this.config.market === Market.Sweden) {
      console.log("Made some Swedish money");
      console.log("--------------------------");
    }

    throw Error("fail");
  }
}
