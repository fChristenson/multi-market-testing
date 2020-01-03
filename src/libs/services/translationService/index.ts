import { IConfig, Locale, Market } from "../../../configs";
import { getTranslatedString, getTranslatedStrings } from "./translations";

export class TranslationsService {
  private config: IConfig;

  constructor(config: IConfig) {
    this.config = config;
  }

  getTranslation(
    key: string,
    locale: Locale = this.config.defaultLocale
  ): string {
    // pretend this is getting the data from a database
    return getTranslatedString(key, locale);
  }

  getTranslations(locale: Locale = this.config.defaultLocale) {
    // pretend this is getting the data from a database
    return getTranslatedStrings(locale);
  }

  getTranslationsTheBadWay() {
    switch (process.env.MARKET) {
      case Market.Sweden:
        return getTranslatedStrings(Locale.se_SV);

      default:
        throw new Error("fail");
    }
  }
}
