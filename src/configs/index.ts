import { Market, IConfig } from "./config";
import { svConfig } from "./sv.config";
import { fiConfig } from "./fi.config";
import { daConfig } from "./da.config";
import { noConfig } from "./no.config";

export * from "./config";

/**
 * This is a standard dependency injection strategy but there is one problem.
 *
 * With this approach we will have to duplicate a lot of configurations and build
 * an ever increasing suite of tests to try out the various permutations.
 */
const loadConfig = (): IConfig => {
  switch (process.env.MARKET) {
    case Market.Sweden:
      return svConfig;

    case Market.Finland:
      return fiConfig;

    case Market.Norway:
      return noConfig;

    case Market.Denmark:
      return daConfig;

    default:
      throw new Error("No match found for market");
  }
};

export const config: IConfig = loadConfig();
