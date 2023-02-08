import * as React from "react";

interface PageProps {
  config: any;
}

export default (props: PageProps) => {
  return (
    <>
      <h1>Client three page</h1>
      <p>This page can only be seen for the client number three</p>

      <p>Configuration sent by instance is</p>
      <pre>
        <code>{JSON.stringify(props.config, null, 4)}</code>
      </pre>
    </>
  );
};
