import express from "express";
import { translationService } from "./libs/services";
import { config, Market } from "./configs";

export const app = express();

app.get("/api/v1/translations", (req, res) => {
  const locale = req.query.locale || config.defaultLocale;
  const strings = translationService.getTranslations(locale);
  res.json(strings);
});

app.get("/api/v1/format/bad", (req, res) => {
  const sum: number = req.query.sum;

  switch (config.market) {
    case Market.Denmark:
    case Market.Norway:
    case Market.Sweden:
      return res.end(sum.toFixed(2));

    default:
      throw new Error("fail");
  }
});

app.get("/api/v1/format/really-bad", (req, res) => {
  const sum: number = req.query.sum;

  switch (process.env.MARKET) {
    case Market.Denmark:
    case Market.Norway:
    case Market.Sweden:
      return res.end(sum.toFixed(2));

    default:
      throw new Error("fail");
  }
});

app.get("/api/v1/format", (req, res) => {
  const sum: number = req.query.sum;
  res.end(sum.toFixed(config.fractionDigits));
});

app.get("/api/v1/money", (req, res) => {
  const sum: number = req.query.sum;
  res.end(sum.toFixed(config.fractionDigits));
});
