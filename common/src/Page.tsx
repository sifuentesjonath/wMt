import * as React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <h1>Common page</h1>
      <p>This page can be seen by all the clients</p>

      <p>Wanna try to see the tenants?</p>
      <ul>
        <li>
          <Link to="/client/1">Tenant 1</Link>
        </li>
        <li>
          <Link to="/client/2">Tenant 2</Link>
        </li>
        <li>
          <Link to="/client/3">Tenant 3</Link>
        </li>
      </ul>
    </>
  );
};
