import React from "react";
import routes from "./pages/routes";
import { BrowserRouter, useRoutes } from "react-router-dom";
const Router = () => useRoutes(routes);

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
