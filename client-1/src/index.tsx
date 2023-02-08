import * as React from "react";
import { Link } from "react-router-dom";
// import type { PiletApi } from "instance";
import { PiletApi } from "instance";
import { PiletConfigsApi } from "piral-configs";

interface PiletCustomAPI extends PiletApi, PiletConfigsApi {}

const Page = React.lazy(() => import("./Page"));

export function setup(app: PiletCustomAPI) {
  app.defineConfigSchema({
    type: "object",
    properties: {
      config_client_one: {
        type: "object",
        properties: {
          tenant: {
            type: "string",
          },
          brand: {
            type: "string",
          },
          isPiralGood: {
            type: "boolean",
          },
        },
      },
    },
  });

  app.registerPage("/client/1", () => {
    const globalConfig = app.getCurrentConfig();
    console.log(globalConfig);
    return <Page config={globalConfig} />;
  });

  // app.showNotification('Hello from Piral!', {
  //   autoClose: 2000,
  // });
  // app.registerMenu(() => <Link to="/page">Page</Link>);
  // app.registerTile(() => <div>Welcome to Piral!</div>, {
  //   initialColumns: 2,
  //   initialRows: 2,
  // });
}
