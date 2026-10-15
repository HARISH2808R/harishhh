import React, { Suspense, lazy } from "react";
const AppCore = lazy(() => import("./AppCore.jsx"));
export default function App() {
  return <Suspense fallback={<main aria-live="polite" className="notice">Loading Medicare application…</main>}><AppCore /></Suspense>;
}
