/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import Homepage from "./pages/Homepage";

const HomepageComponent = Homepage as unknown as React.ComponentType<{}>;

export default function Home() {
  return (
    <main>
      <HomepageComponent />
    </main>
  );
}
