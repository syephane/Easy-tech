import React from "react";
import Homepage from "./pages/Homepage";

const HomepageComponent = Homepage as unknown as React.ComponentType<any>;

export default function Home() {
  return (
    <main>
      <HomepageComponent />
    </main>
  );
}
