import { TranslationsService } from "./translationService";
import { config, Market, IConfig } from "../../configs";
import { GeneralMoneyService } from "./moneyService/generalMoneyService";
import { SwedishMoneyService } from "./moneyService/swedishMoneyService";

const getMoneyService = (config: IConfig) => {
  switch (config.market) {
    case Market.Sweden:
      return new SwedishMoneyService(config);

    default:
      return new GeneralMoneyService();
  }
};

export const translationService = new TranslationsService(config);
export const moneyService = getMoneyService(config);
