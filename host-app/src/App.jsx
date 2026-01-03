import React, { Suspense, lazy } from "react";
const Header = lazy(() => import("header_app/Header"));

export default function App() {
  return (
    <div>
      <h1>Host App</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Header />
      </Suspense>
    </div>
  );
}