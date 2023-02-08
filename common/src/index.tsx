import * as React from "react";
import { Link } from "react-router-dom";
import type { PiletApi } from "instance";

const CommonPage = React.lazy(() => import("./Page"));

export function setup(app: PiletApi) {
  app.registerPage("/common", CommonPage);

  // app.showNotification('Hello from Piral!', {
  //   autoClose: 2000,
  // });
  // app.registerMenu(() => <Link to="/page">Page</Link>);
  // app.registerTile(() => <div>Welcome to Piral!</div>, {
  //   initialColumns: 2,
  //   initialRows: 2,
  // });
}
