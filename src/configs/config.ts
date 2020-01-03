export interface IConfig {
  market: Market;
  defaultLocale: Locale;
  fractionDigits: number;
}

export enum Market {
  Sweden = "Sweden",
  Denmark = "Denmark",
  Finland = "Finland",
  Norway = "Norway"
}

export enum Locale {
  se_SV = "sv_SE",
  da_DK = "da_DK",
  fi_FI = "fi_FI",
  no_NO = "no_NO"
}
