import { TranslationsService } from ".";
import { IConfig, Market, Locale } from "../../../configs";

describe("TranslationService", () => {
  it("should return a translated string", () => {
    const config: IConfig = {
      market: Market.Sweden,
      defaultLocale: Locale.se_SV,
      fractionDigits: 2
    };
    const service = new TranslationsService(config);
    const text = service.getTranslation("hello", Locale.fi_FI);
    expect(text).toEqual("Hei");
  });

  it("should return a the default locale if none is passed", () => {
    const config: IConfig = {
      market: Market.Sweden,
      defaultLocale: Locale.se_SV,
      fractionDigits: 2
    };
    const service = new TranslationsService(config);
    const text = service.getTranslation("hello");
    expect(text).toEqual("Hej");
  });
});
