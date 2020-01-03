import { Locale } from "../../../configs";

export const swedish = {
  hello: "Hej"
};

export const danish = {
  hello: "Hej"
};

export const norwegian = {
  hello: "Hallo"
};

export const finnish = {
  hello: "Hei"
};

export const getTranslatedString = (key: string, locale: Locale): string => {
  switch (locale) {
    case Locale.da_DK:
      return danish[key];

    case Locale.se_SV:
      return swedish[key];

    case Locale.no_NO:
      return norwegian[key];

    case Locale.fi_FI:
      return finnish[key];

    default:
      throw new Error("No matching locale found");
  }
};

export const getTranslatedStrings = (locale: Locale) => {
  switch (locale) {
    case Locale.da_DK:
      return danish;

    case Locale.se_SV:
      return swedish;

    case Locale.no_NO:
      return norwegian;

    case Locale.fi_FI:
      return finnish;

    default:
      throw new Error("No matching locale found");
  }
};
