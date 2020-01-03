import { IMoneyService } from "./moneyService";

export class GeneralMoneyService implements IMoneyService {
  makeMoney() {
    console.log("Made some general money");
    console.log("--------------------------");
  }
}
