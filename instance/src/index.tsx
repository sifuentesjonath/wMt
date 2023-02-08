import * as React from "react";
import { createRoot } from "react-dom/client";
import { createInstance, Piral, createStandardApi } from "piral";
import { createConfigsApi } from "piral-configs";
import { layout, errors } from "./layout";

// change to your feed URL here (either using feed.piral.cloud or your own service)
// const feedUrl = process.env.FEED_URL;
const feedUrl = process.env.FEED_URL;

const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
  },
  plugins: [
    ...createStandardApi(),
    createConfigsApi({
      retrieve(configName: string) {
        console.log(configName);
        const configs = {
          "config-client_one": {
            tenant: "One",
            brand: "Microsoft",
            isPiralGood: true,
          },
          "config-client_two": {
            tenant: "Two",
            brand: "Apple",
            isPiralGood: true,
          },
          "config-client_three": {
            tenant: "Three",
            brand: "Google",
            isPiralGood: true,
          },
        };
        const piletConfig = configs[configName];
        console.log(piletConfig);
        return piletConfig;
      },
    }),
  ],
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

const root = createRoot(document.querySelector("#app"));

root.render(<Piral instance={instance} />);
