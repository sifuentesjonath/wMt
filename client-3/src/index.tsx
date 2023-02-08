import * as React from "react";
import { Link } from "react-router-dom";
import type { PiletApi } from "instance";

const Client3Page = React.lazy(() => import("./Page"));

export function setup(app: PiletApi) {
  app.defineConfigSchema({
    type: "object",
    properties: {
      config_client_three: {
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

  app.registerPage("/client/3", () => {
    const globalConfig = app.getCurrentConfig();
    return <Client3Page config={globalConfig} />;
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
